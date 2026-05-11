const fs = require('fs');
const path = require('path');
const pagesDir = 'c:/Users/NS/Desktop/codesip/frontend/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx')).map(f => path.join(pagesDir, f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  let newContent = content.replace(/<h2([^>]*)className=['"]([^'"]*)['"]/g, (match, p1, p2) => {
    if (!p2.includes('reveal')) {
      changed = true;
      return '<h2' + p1 + 'className="' + p2 + ' reveal"';
    }
    return match;
  });
  
  newContent = newContent.replace(/<Card([^>]*)className=['"]([^'"]*)['"]/g, (match, p1, p2) => {
    if (!p2.includes('reveal')) {
      changed = true;
      return '<Card' + p1 + 'className="' + p2 + ' reveal"';
    }
    return match;
  });
  
  newContent = newContent.replace(/<Card(\s*(?:key=[^>]+)?)\s*>/g, (match, p1) => {
    changed = true;
    return '<Card' + p1 + ' className="reveal">';
  });

  if (changed) {
    fs.writeFileSync(file, newContent);
    console.log('Updated', file);
  }
});
