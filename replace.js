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

  // Exact cases
  content = content.replace(/L&T MALAD/g, 'UTPALAA THE CONDOVILLE');
  content = content.replace(/VRX MAGNA/g, 'UTPALAA THE CONDOVILLE');

  // Case insensitive
  content = content.replace(/L&T Malad/gi, 'Utpalaa The Condoville');
  content = content.replace(/L&T Realty/gi, 'Ambuja Neotia'); // Or just developer, but let's replace with the project name to be safe if developer not specified, wait the image says "About Developer... This Developer stands as..." It might be better to just replace L&T Realty with Developer or Utpalaa The Condoville
  content = content.replace(/L&T Realty/gi, 'The Developer');
  
  content = content.replace(/VRX Magna/gi, 'Utpalaa The Condoville');
  content = content.replace(/vrx-magna/gi, 'utpalaa-the-condoville');
  
  // Replace location in whatsapp message
  content = content.replace(/Thirumazhisai Chennai/gi, 'Kolkata'); // Utpalaa is in Kolkata usually, but let's just make it blank or Kolkata
  content = content.replace(/VRX%20MAGNA%20Thirumazhisai%20Chennai/gi, 'Utpalaa%20The%20Condoville');

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
