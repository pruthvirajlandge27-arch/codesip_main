import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';
import founderImg from '../assets/founder.jpg';
import dardaLogo from '../assets/darda.jpg';
import drpanjabLogo from '../assets/drpanjab.jpg';
import hvpmLogo from '../assets/hvpm.jpg';
import oldmeegheLogo from '../assets/oldmeeghe.png';
import prpoteLogo from '../assets/prpote.jpg';
import sipnaLogo from '../assets/sipna.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';
import event7 from '../assets/event7.jpg';
import event8 from '../assets/event8.jpg';
import event9 from '../assets/event9.jpg';
import event10 from '../assets/event10.jpg';
import event11 from '../assets/event11.jpg';
import { Lightbulb, ShieldCheck, Target, Award, Network, Scale, Rocket, ArrowRight } from 'lucide-react';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import NetworkBackground from '../components/ui/NetworkBackground';
import WaveBackground from '../components/ui/WaveBackground';
import DottedWaveBackground from '../components/ui/DottedWaveBackground';
import RadialWaveBackground from '../components/ui/RadialWaveBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const glowingText = "Local to Global";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary">
        <NetworkBackground />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-secondary font-mono mb-4 text-sm md:text-base tracking-wider"
        >
         गाँव से ग्लोबल तक
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
            Bridging the Gap from
          </span>
          <br />
          <motion.span
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="animate-text-shimmer"
          >
            {glowingText.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Empowering students with premium internships, career guidance, and cutting-edge project development. Step into the future of tech.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center relative"
        >
          <Link to="/internships" className="relative group block">
            <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <Button variant="primary" className="relative w-full group overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></span>
              <span className="relative z-10">Explore Internships</span>
            </Button>
          </Link>
          <Link to="/contact" className="block">
            <Button variant="secondary" className="w-full shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:shadow-[0_0_30px_rgba(0,180,216,0.4)]">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "AI Call Agent", desc: "Automate outbound and inbound customer calls.", fullDesc: "Enterprise-grade conversational AI that handles support, sales outreach, and booking 24/7.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
    { title: "WhatsApp Bot", desc: "Intelligent DMs and customized sales flows.", fullDesc: "Connect with thousands of customers automatically via WhatsApp API with NLP intent recognition.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { title: "SaaS Dashboard", desc: "Actionable data insights at a glance.", fullDesc: "Real-time analytics processing billions of rows into stunning visual charts and alerts.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
    { title: "Voice Auth", desc: "Advanced biometric security layer.", fullDesc: "Identify users by their unique voice print to provide seamless passwordless authentication flows.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
    { title: "Smart Matching", desc: "Connect premium talent with tech roles.", fullDesc: "AI algorithms that perfectly match candidate profiles to job requirements via deep learning.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal">Elite <span className="text-accent">Projects</span></h2>
        <p className="text-gray-400 text-lg">Pioneering the future of technology solutions.</p>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-[scroll-x_25s_linear_infinite] hover:[animation-play-state:paused] group/scroller">
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-8 px-4">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="w-[350px] flex-shrink-0 relative transition-all duration-500 group/card hover:z-50 group-hover/scroller:opacity-40 hover:!opacity-100 group-hover/scroller:blur-[4px] hover:!blur-none"
                >
                  <Card
                    className="flex flex-col transition-all duration-500 ease-out group-hover/card:scale-[1.15] group-hover/card:-translate-y-4 group-hover/card:shadow-[0_0_40px_rgba(0,180,216,0.3)] group-hover/card:border-accent/80 border-white/10 relative overflow-hidden reveal"
                  >
                    {/* Background image overlay */}
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-30 group-hover/card:opacity-50 transition-opacity duration-500 mix-blend-screen"
                      style={{ backgroundImage: `url(${proj.image})` }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20"></div>

                    <div className="relative z-10 flex flex-col h-full mt-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-accent transition-colors duration-300">{proj.title}</h3>

                      <div className="grid transition-all duration-500 grid-rows-[1fr] group-hover/card:grid-rows-[0fr] opacity-100 group-hover/card:opacity-0 overflow-hidden">
                        <div className="min-h-0">
                          <p className="text-gray-300 drop-shadow-md">{proj.desc}</p>
                        </div>
                      </div>

                      <div className="grid transition-all duration-500 grid-rows-[0fr] group-hover/card:grid-rows-[1fr] opacity-0 group-hover/card:opacity-100 overflow-hidden">
                        <div className="min-h-0 flex flex-col gap-5 pt-2">
                          <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">{proj.fullDesc}</p>
                          <Button variant="secondary" className="w-full text-sm py-2 shadow-none border-white/30 backdrop-blur-sm">View Project</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Internship Programs", desc: "Gain real-world experience with top startups and MNCs globally." },
    { title: "Career Guidance", desc: "1-on-1 mentorship with industry experts to land your dream tech job." },
    { title: "Project Development", desc: "End-to-end development of custom software solutions for startups." },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <RadialWaveBackground />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 reveal">Our Premium <span className="text-secondary">Services</span></h2>
          <p className="text-gray-400">Turbocharge your career trajectory.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link to={idx === 0 ? "/internships" : "/services"} key={idx} className="block group">
              <Card className="reveal transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, to, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = (to < 10 ? value.toFixed(1) : Math.floor(value)) + suffix;
        }
      }
    });

    return () => controls.stop();
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { num: 10, suffix: "k+", label: "Students Reached" },
    { num: 500, suffix: "+", label: "project created" },
    { num: 50, suffix: "+", label: "College Visited" },
    { num: 1, suffix: "+", label: "Lines of Code" }
  ];

  return (
    <section className="py-32 px-4 bg-primary relative overflow-hidden">
      <DottedWaveBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6"
            >
              <h3 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-white mb-3 filter drop-shadow-[0_0_10px_rgba(0,180,216,0.3)]">
                <CountUp to={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const highlights = [
    {
      text: (
        <>
          <span className="text-white font-bold">Codesip Technology LLP</span> is a leading <span className="text-secondary font-bold drop-shadow-[0_0_12px_rgba(0,255,136,0.3)] tracking-wide">GenAI solutions</span> provider, empowering modern businesses with cutting-edge intelligence.
        </>
      ),
      glow: "from-secondary/10 to-transparent"
    },
    {
      text: (
        <>
          Trusted globally by top <span className="text-accent font-bold drop-shadow-[0_0_12px_rgba(0,180,216,0.3)] tracking-wide">banks, fintechs</span>, and enterprise leaders to automate and scale operations safely.
        </>
      ),
      glow: "from-accent/10 to-transparent"
    },
    {
      text: (
        <>
          A recognized industry pioneer in <span className="text-secondary font-bold drop-shadow-[0_0_12px_rgba(0,255,136,0.3)] tracking-wide">Agentic AI</span> architectures and autonomous agent orchestration.
        </>
      ),
      glow: "from-secondary/10 to-transparent"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Ambient background glow shifting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight reveal">Who <span className="text-accent drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">We Are</span></h2>
          <p className="text-gray-400 text-lg">Defining the standard for enterprise artificial intelligence.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {highlights.map((item, idx) => (
            <motion.div variants={itemVariants} key={idx} className="h-full">
              <Card className="h-full relative overflow-hidden group cursor-default transition-all duration-500 hover:scale-[1.04] hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(0,180,216,0.15)] hover:border-accent/40 bg-white/5 border-white/10 rounded-[20px] p-8 md:p-10 flex items-center justify-center text-center reveal">
                {/* Internal Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-duration-700 pointer-events-none`}></div>

                <p className="text-gray-300 text-lg md:text-xl leading-[1.8] relative z-10 font-medium group-hover:text-white transition-colors duration-500">
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const values = [
    { letter: 'C', title: 'Creativity', desc: 'We encourage innovative thinking ', icon: <Lightbulb className="w-5 h-5 text-accent" /> },
    { letter: 'O', title: 'Ownership', desc: 'We take full responsibility for our work.', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
    { letter: 'D', title: 'Discipline', desc: 'We follow structured processes', icon: <Target className="w-5 h-5 text-accent" /> },
    { letter: 'E', title: 'Excellence', desc: 'We strive for high-quality output', icon: <Award className="w-5 h-5 text-accent" /> },
    { letter: 'S', title: 'Synergy', desc: 'We believe in teamwork', icon: <Network className="w-5 h-5 text-accent" /> },
    { letter: 'I', title: 'Integrity', desc: 'We act with honesty', icon: <Scale className="w-5 h-5 text-accent" /> },
    { letter: 'P', title: 'Progress', desc: 'We continuously learn and evolve with technology ', icon: <Rocket className="w-5 h-5 text-accent" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <DottedWaveBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal">Our Core <span className="text-accent hover:animate-text-shimmer inline-block">Values</span></h2>
          <p className="text-gray-400 text-lg">The foundation of everything we build.</p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative px-4">
          {/* Connecting Line Container */}
          <div className="absolute top-[80px] left-[5%] w-[90%] h-[80px] flex justify-between pointer-events-none">
            {values.map((_, idx) => (
              <div key={idx} className="relative w-1 h-full flex flex-col items-center">
                <div className={`w-[2px] h-full ${hoveredIdx === idx ? 'bg-secondary' : 'bg-white/20'} transition-colors duration-300 relative overflow-hidden`}>
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 100 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: idx * 0.2 }}
                    className={`w-full h-6 ${hoveredIdx === idx ? 'bg-white shadow-[0_0_10px_#00FF88]' : 'bg-accent/50 shadow-[0_0_8px_#00B4D8]'}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-7 gap-4 xl:gap-6"
          >
            {/* Letters Row */}
            {values.map((val, idx) => (
              <motion.div variants={itemVariants} key={`letter-${idx}`} className="flex justify-center mb-28">
                <h3 className={`text-6xl font-black transition-all duration-300 ${hoveredIdx === idx ? 'text-secondary drop-shadow-[0_0_20px_#00FF88] scale-125' : 'text-white/80'}`}>
                  {val.letter}
                </h3>
              </motion.div>
            ))}

            {/* Cards Row */}
            {values.map((val, idx) => (
              <motion.div
                variants={itemVariants}
                key={`card-${idx}`}
                className="mt-[-100px] flex h-full"
              >
                <Card
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`w-full min-h-[220px] flex flex-col items-center justify-start text-center px-4 py-6 transition-all duration-300 cursor-default ${hoveredIdx === idx ? '-translate-y-4 scale-110 border-secondary shadow-[0_0_30px_rgba(0,255,136,0.3)] bg-white/10 z-10' : 'border-white/10 opacity-75 z-0'} overflow-hidden group/valuecard`}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all duration-300 shadow-[inset_0_0_15px_rgba(0,180,216,0.15)] group-hover/valuecard:scale-105 group-hover/valuecard:shadow-[inset_0_0_20px_rgba(0,180,216,0.4),0_0_15px_rgba(0,180,216,0.3)] ${hoveredIdx === idx ? 'bg-accent/10 border border-accent/50 shadow-[inset_0_0_20px_rgba(0,180,216,0.4),0_0_15px_rgba(0,180,216,0.3)] scale-105' : 'bg-primary/30 border border-white/10 opacity-80'}`}>
                    <div className="animate-[pulse_3s_ease-in-out_infinite]">{val.icon}</div>
                  </div>
                  <h4 className={`text-base xl:text-lg font-bold mb-3 transition-colors ${hoveredIdx === idx ? 'text-white' : 'text-gray-300'}`}>{val.title}</h4>
                  <p className={`text-xs xl:text-sm leading-[1.5] transition-colors break-words w-full overflow-hidden ${hoveredIdx === idx ? 'text-gray-200' : 'text-gray-400'}`}>{val.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="block lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {values.map((val, idx) => (
              <motion.div variants={itemVariants} key={`mobile-${idx}`} className="flex flex-col items-center group">
                <h3 className="text-6xl font-black text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-2 group-hover:text-secondary group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#00FF88] transition-all duration-300">
                  {val.letter}
                </h3>

                <div className="w-[2px] h-12 bg-white/20 relative overflow-hidden mb-2 group-hover:bg-secondary transition-colors duration-300">
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 60 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-4 bg-accent/50 group-hover:bg-white shadow-[0_0_10px_#00B4D8] group-hover:shadow-[0_0_10px_#00FF88]"
                  />
                </div>

                <Card className="w-full max-w-sm min-h-[220px] flex flex-col items-center justify-start text-center px-6 py-6 border-white/10 group-hover:border-secondary transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] bg-white/5 overflow-hidden reveal">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary/30 border border-white/10 flex items-center justify-center mb-5 transition-all duration-300 shadow-[inset_0_0_15px_rgba(0,180,216,0.15)] opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:bg-accent/10 group-hover:border-accent/50 group-hover:shadow-[inset_0_0_20px_rgba(0,180,216,0.4),0_0_15px_rgba(0,180,216,0.3)]">
                    <div className="animate-[pulse_3s_ease-in-out_infinite]">{val.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{val.title}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors leading-[1.6] break-words w-full overflow-hidden">{val.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// CoreTeam dynamically maps team profiles over interactive backgrounds
const CoreTeam = () => {
  const team = [
    {
      name: "Pruthviraj Landge",
      role: "Founder & CEO",
      image: founderImg,
      socials: { 
        linkedin: "https://www.linkedin.com/company/codesip-technology-llp/?viewAsMember=true", 
        twitter: "#" 
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden font-spaceGrotesk">
      <DottedWaveBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight reveal">The Core <span className="text-accent drop-shadow-[0_0_15px_rgba(0,180,216,0.3)] inline-block">Team</span></h2>
          <p className="text-gray-400 text-lg">The visionaries architecting our intelligent systems.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          {team.map((member, idx) => (
            <motion.div variants={itemVariants} key={idx} className="h-full">
              <div className="h-full animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: `${idx * 1.5}s` }}>
                <div className="group h-full relative overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:-translate-y-3 p-6 md:p-8 flex flex-col items-center text-center">

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-[2rem] overflow-hidden mb-6 border-2 border-white/10 group-hover:border-accent/50 transition-colors duration-500 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 rounded-[2rem]">
                      <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all border border-white/20 hover:border-transparent hover:scale-110">
                        <LinkedinIcon />
                      </a>
                      <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all border border-white/20 hover:border-transparent hover:scale-110">
                        <TwitterIcon />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 drop-shadow-md z-10">{member.name}</h3>
                  <p className="text-secondary font-medium tracking-wide text-sm z-10">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const EventCard = ({ title, images, className, variants }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div variants={variants} className={className}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={title}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] tracking-wide group-hover:text-secondary transition-colors duration-300">{title}</h3>
      </div>
    </motion.div>
  );
};

const OurEvents = () => {
  const eventSections = [
    {
      title: "Team bonding & collaboration",
      images: [event1, event4, event7, event10],
    },
    {
      title: "Innovation and learning culture",
      images: [event2, event5, event8, event11],
    },
    {
      title: "Celebrating milestones together",
      images: [event3, event6, event9],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden font-spaceGrotesk">
      <DottedWaveBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight reveal">Our <span className="text-secondary drop-shadow-[0_0_15px_rgba(0,255,136,0.3)] inline-block">Events</span></h2>
          <p className="text-gray-400 text-lg">Moments that define our culture and journey.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:h-[600px] xl:h-[700px]"
        >
          <div className="flex flex-col gap-6 lg:gap-8 h-full">
            <EventCard 
              title={eventSections[0].title}
              images={eventSections[0].images}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.5)] flex-1 border border-white/10 hover:border-secondary hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-colors duration-500 cursor-pointer min-h-[250px] lg:min-h-0"
            />

            <EventCard 
              title={eventSections[1].title}
              images={eventSections[1].images}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.5)] flex-1 border border-white/10 hover:border-secondary hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-colors duration-500 cursor-pointer min-h-[250px] lg:min-h-0"
            />
          </div>

          <EventCard 
            title={eventSections[2].title}
            images={eventSections[2].images}
            variants={itemVariants}
            className="relative group overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.6)] h-[400px] lg:h-full border border-white/10 hover:border-secondary hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-colors duration-500 cursor-pointer"
          />

        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none">
        <NetworkBackground />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white reveal">Get In Touch</h2>
            <p className="text-gray-400 text-[15px] font-sans tracking-wide">Let’s build something intelligent together.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
            <form className="space-y-5 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400 transition-colors">Name</label>
                  <input
                    type="text"
                    className="w-full h-[48px] bg-[#1E293B] border border-[#334155] rounded-[10px] px-4 text-[14px] focus:outline-none focus:border-accent transition-colors text-[#EAEAEA] placeholder-[#888888] shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400 transition-colors">Email</label>
                  <input
                    type="email"
                    className="w-full h-[48px] bg-[#1E293B] border border-[#334155] rounded-[10px] px-4 text-[14px] focus:outline-none focus:border-accent transition-colors text-[#EAEAEA] placeholder-[#888888] shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400 transition-colors">Subject</label>
                <input
                  type="text"
                  className="w-full h-[48px] bg-[#1E293B] border border-[#334155] rounded-[10px] px-4 text-[14px] focus:outline-none focus:border-accent transition-colors text-[#EAEAEA] placeholder-[#888888] shadow-sm"
                  placeholder="How can we collaborate?"
                />
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400 transition-colors">Message</label>
                <textarea
                  className="w-full bg-[#1E293B] border border-[#334155] rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-accent transition-colors text-[#EAEAEA] placeholder-[#888888] min-h-[120px] resize-y shadow-sm"
                  placeholder="Tell us about your next big idea..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="w-full h-[48px] bg-accent hover:bg-[#0096B4] hover:shadow-[0_4px_15px_rgba(0,180,216,0.3)] text-primary text-[15px] font-semibold rounded-[10px] transition-all duration-200 flex items-center justify-center active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
const TrustedBy = () => {
  // NOTE: You can replace these placeholder image URLs with the actual paths to your college logos from the assets folder.
  // For example: import college1 from '../assets/college1.png'; and use { name: 'College 1', img: college1 }
  const logos = [
    { name: "Darda College", img: dardaLogo },
    { name: "Dr. Panjabrao Deshmukh", img: drpanjabLogo },
    { name: "HVPM", img: hvpmLogo },
    { name: "Meghe Group", img: oldmeegheLogo },
    { name: "PR Pote College", img: prpoteLogo },
    { name: "Sipna College", img: sipnaLogo },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#080d18] relative overflow-hidden flex flex-col items-center">
      <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-8 z-10 text-center">Trusted By Top Colleges & Institutions</p>
      
      {/* Edge Gradients for smooth carousel fade */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#080d18] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#080d18] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-[scroll-x_20s_linear_infinite] hover:[animation-play-state:paused] group">
        {[1, 2].map((group) => (
          <div key={group} className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="w-40 md:w-56 flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer">
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="w-full h-[120px] object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to naturally preview the premium loading entry
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Inject Jotform Chatbot Script for the Main Page
  useEffect(() => {
    const scriptSrc = 'https://cdn.jotfor.ms/agent/embedjs/019e118dc41371be930cb8515da6294cd30d/embed.js?autoOpenChatIn=1';
    
    // Avoid duplicate script injection
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up the script tag on unmount so it's strictly on the main page.
      // Note: Full theming is best configured directly inside your Jotform Agent Dashboard
      // to match the site's dark palette (e.g., primary: #0F172A, accent: #00B4D8).
      const scriptElement = document.querySelector(`script[src="${scriptSrc}"]`);
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
      
      // Attempt to clean up any DOM elements the bot might have injected (Jotform specifics vary)
      const agentNode = document.querySelector('agent-ui, .agent-chat-container, iframe[src*="agent.jotform"]');
      if (agentNode) {
        agentNode.remove();
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0B0F19] overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight"
          >
            {/* Background ambient AI glow */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <NetworkBackground />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

            {/* Central Boot Sequence */}
            <div className="relative z-10 flex flex-col items-center">

              {/* Circular Network Node Rings */}
              <div className="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72 mb-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1.5px] border-secondary/20 border-dashed rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-accent/30 border-dotted rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 bg-accent/10 rounded-full blur-md"
                ></motion.div>

                {/* Logo core */}
                <motion.img
                  src={logo}
                  alt="CodeSip Logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-32 md:h-44 w-auto object-contain rounded-2xl shadow-[0_0_50px_rgba(0,180,216,0.4)] relative z-10"
                />
              </div>

              {/* Loader Text & Progress Bar */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 w-64 md:w-72"
              >
                <span className="text-accent text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase opacity-90 animate-pulse">
                  Initializing Intelligence...
                </span>

                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-accent shadow-[0_0_10px_rgba(0,180,216,0.6)]"
                  ></motion.div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        <Hero />
        <TrustedBy />
        <Stats />
        <Projects />
        <Highlights />
        <CoreValues />
        <CoreTeam />
        <OurEvents />
        <Services />
      </div>
    </>
  );
};

export default Home;
