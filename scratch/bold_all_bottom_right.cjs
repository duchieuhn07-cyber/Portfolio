const fs = require('fs');
const path = require('path');

const projectDir = 'c:\\Users\\duchi\\Downloads\\New folder';

const files = [
  'src/components/Project1Hero.tsx',
  'src/components/Project2Hero.tsx',
  'src/components/Project3Hero.tsx',
  'src/components/Project4Hero.tsx',
  'src/components/Project5Hero.tsx',
  'src/components/Project6Hero.tsx',
  'src/components/ProjectsHero.tsx'
];

const target = 'font-normal text-[rgba(62,68,80,0.95)]';
const replacement = 'font-bold text-[rgba(62,68,80,0.95)]';

files.forEach(file => {
  const absolutePath = path.join(projectDir, file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    if (content.includes(target)) {
      content = content.replaceAll(target, replacement);
      fs.writeFileSync(absolutePath, content, 'utf8');
      console.log(`Updated bottom right corner text to bold in: ${file}`);
    } else {
      console.log(`Target not found in: ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
