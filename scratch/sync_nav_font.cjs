const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Navbar.tsx',
  'src/components/SummaryHero.tsx',
  'src/components/ProjectsHero.tsx',
  'src/components/Project1Hero.tsx',
  'src/components/Project2Hero.tsx',
  'src/components/Project3Hero.tsx',
  'src/components/Project4Hero.tsx',
  'src/components/Project5Hero.tsx',
  'src/components/Project6Hero.tsx'
];

const target = 'className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg"';
const replacement = 'className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-helvetica font-medium text-lg"';

files.forEach(file => {
  const absolutePath = path.join('c:\\Users\\duchi\\Downloads\\New folder', file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    if (content.includes(target)) {
      content = content.replaceAll(target, replacement);
      fs.writeFileSync(absolutePath, content, 'utf8');
      console.log(`Updated: ${file}`);
    } else {
      console.log(`Target not found in: ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
