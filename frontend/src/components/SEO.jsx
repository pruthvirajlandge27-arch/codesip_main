import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DEFAULT_SEO, ROUTE_SEO, INTERNSHIP_DOMAINS, generateSchema } from './seoConfig';

const SEO = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const pathname = location.pathname;
    
    // 1. RESOLVE METADATA VALUES
    let title = DEFAULT_SEO.title;
    let description = DEFAULT_SEO.description;
    let keywords = DEFAULT_SEO.keywords;
    let robots = DEFAULT_SEO.robots;

    // Check static routes
    if (ROUTE_SEO[pathname]) {
      title = ROUTE_SEO[pathname].title;
      description = ROUTE_SEO[pathname].description;
      if (ROUTE_SEO[pathname].keywords) keywords = ROUTE_SEO[pathname].keywords;
    } 
    // Check dynamic internship routes e.g., /internships/frontend
    else if (pathname.startsWith('/internships/') && params.domain) {
      const domainKey = params.domain.toLowerCase();
      if (INTERNSHIP_DOMAINS[domainKey]) {
        title = INTERNSHIP_DOMAINS[domainKey].title;
        description = INTERNSHIP_DOMAINS[domainKey].description;
        if (INTERNSHIP_DOMAINS[domainKey].keywords) {
          keywords = `${DEFAULT_SEO.keywords}, ${INTERNSHIP_DOMAINS[domainKey].keywords}`;
        }
      } else {
        // Fallback for custom undefined internship domains
        title = `${params.domain.charAt(0).toUpperCase() + params.domain.slice(1)} Internship | CodeSip`;
        description = `Hands-on practical training in ${params.domain} development with live projects at CodeSip Technology.`;
      }
    }

    // 2. UPDATE STATIC DOM ATTRIBUTES
    document.title = title;

    // Helper to update or create meta tags dynamically
    const updateMetaTag = (nameAttr, nameVal, propAttr, propVal, contentVal) => {
      let selector = '';
      if (nameAttr) selector = `meta[name="${nameVal}"]`;
      else if (propAttr) selector = `meta[property="${propVal}"]`;

      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (nameAttr) element.setAttribute('name', nameVal);
        if (propAttr) element.setAttribute('property', propVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard SEO Tags
    updateMetaTag(true, 'description', false, null, description);
    updateMetaTag(true, 'keywords', false, null, keywords);
    updateMetaTag(true, 'robots', false, null, robots);

    // OpenGraph Social Media Share Tags
    const canonicalUrl = `${DEFAULT_SEO.canonicalUrl}${pathname}`;
    updateMetaTag(false, null, true, 'og:title', title);
    updateMetaTag(false, null, true, 'og:description', description);
    updateMetaTag(false, null, true, 'og:url', canonicalUrl);
    updateMetaTag(false, null, true, 'og:type', 'website');
    updateMetaTag(false, null, true, 'og:image', DEFAULT_SEO.ogImage);
    updateMetaTag(false, null, true, 'og:site_name', DEFAULT_SEO.siteName);

    // Twitter Card Tags
    updateMetaTag(true, 'twitter:card', false, null, DEFAULT_SEO.twitterCard);
    updateMetaTag(true, 'twitter:title', false, null, title);
    updateMetaTag(true, 'twitter:description', false, null, description);
    updateMetaTag(true, 'twitter:image', false, null, DEFAULT_SEO.ogImage);

    // 3. CANONICAL LINK
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. GOOGLE SITE VERIFICATION
    const siteVerificationCode = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (siteVerificationCode) {
      updateMetaTag(true, 'google-site-verification', false, null, siteVerificationCode);
    }

    // 5. STRUCTURED SCHEMA.ORG DATA (JSON-LD)
    const schemaData = generateSchema(pathname, params.domain);
    
    // Clean up any existing injected LD+JSON script tags to prevent duplication
    const existingScript = document.getElementById('codesip-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = 'codesip-jsonld';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    // Cleanup function when component updates or unmounts
    return () => {
      const scriptToRemove = document.getElementById('codesip-jsonld');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [location.pathname, params.domain]);

  // 6. GOOGLE ANALYTICS (GA4) ROUTER SYNC
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    if (!trackingId) return;

    // Check if GA gtag is already injected into DOM, if not, inject it
    let gaScript = document.getElementById('codesip-ga-tag');
    if (!gaScript) {
      gaScript = document.createElement('script');
      gaScript.id = 'codesip-ga-tag';
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement('script');
      gaConfigScript.id = 'codesip-ga-config';
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', { send_page_view: false });
      `;
      document.head.appendChild(gaConfigScript);
    }

    // Trigger pageview in GA4 on location pathname transitions
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location.pathname]);

  return null;
};

export default SEO;
