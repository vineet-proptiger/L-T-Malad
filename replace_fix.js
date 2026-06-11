const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'app'),
  path.join(__dirname, 'components'),
  path.join(__dirname, 'package.json')
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Revert my previous mistaken replacements
  content = content.replace(/UTPALAA THE CONDOVILLE/g, 'L&T MALAD');
  content = content.replace(/Utpalaa The Condoville/gi, 'L&T Malad');
  content = content.replace(/utpalaa-the-condoville/gi, 'lnt-malad');
  
  // Also we need to change Chennai/Kolkata references to Mumbai
  content = content.replace(/Thirumazhisai Chennai/gi, 'Malad East, Mumbai');
  content = content.replace(/Kolkata/gi, 'Malad East, Mumbai');
  
  // Change Vijay Raja Homes to L&T Realty
  content = content.replace(/Vijay Raja Homes/gi, 'L&T Realty');
  content = content.replace(/Vijay Raja Group/gi, 'L&T Group');
  
  // Change location strings in the code
  content = content.replace(/Thirumazhisai/gi, 'Malad East');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDir(dirPath) {
  if (fs.statSync(dirPath).isFile()) {
    replaceInFile(dirPath);
    return;
  }

  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json')) {
      replaceInFile(fullPath);
    }
  }
}

dirs.forEach(processDir);
