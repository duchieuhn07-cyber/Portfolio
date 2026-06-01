const fs = require('fs');
const path = require('path');

const projectDir = 'c:\\Users\\duchi\\Downloads\\New folder';

// 1. Revert font-helvetica from ul tags in all navbar-containing files
const filesWithNavbar = [
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

const helveticaUl = 'className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-helvetica font-medium text-lg"';
const originalUl = 'className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg"';

filesWithNavbar.forEach(file => {
  const absolutePath = path.join(projectDir, file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    
    // Revert ul font to original
    if (content.includes(helveticaUl)) {
      content = content.replaceAll(helveticaUl, originalUl);
      console.log(`Reverted font-helvetica in: ${file}`);
    }

    // Now let's add font-bold to the active tab li element
    // Let's check each component specifically:
    if (file === 'src/components/Navbar.tsx') {
      const activeLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450]">';
      const boldLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">';
      if (content.includes(activeLi)) {
        content = content.replace(activeLi, boldLi);
        console.log(`Added font-bold to Trang chủ active tab in: ${file}`);
      }
    } else if (file === 'src/components/ProjectsHero.tsx') {
      const activeLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450]">';
      const boldLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">';
      if (content.includes(activeLi)) {
        content = content.replace(activeLi, boldLi);
        console.log(`Added font-bold to Dự án active tab in: ${file}`);
      }
    } else if (file === 'src/components/SummaryHero.tsx') {
      const activeLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450]">';
      const boldLi = '<li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">';
      if (content.includes(activeLi)) {
        content = content.replace(activeLi, boldLi);
        console.log(`Added font-bold to Tổng kết active tab in: ${file}`);
      }
    } else if (file.startsWith('src/components/Project') && file.endsWith('Hero.tsx')) {
      // In ProjectXHero.tsx, active tab is Dự án:
      // className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450]"
      const activeLi = 'className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450]"';
      const boldLi = 'className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold"';
      if (content.includes(activeLi)) {
        content = content.replace(activeLi, boldLi);
        console.log(`Added font-bold to Dự án active tab in: ${file}`);
      }
    }

    fs.writeFileSync(absolutePath, content, 'utf8');
  }
});

// 2. Bold the big text in BottomRightCorner.tsx
const brcPath = path.join(projectDir, 'src/components/BottomRightCorner.tsx');
if (fs.existsSync(brcPath)) {
  let content = fs.readFileSync(brcPath, 'utf8');
  const targetText = '<span className="text-[16px] md:text-[20px] font-normal text-[rgba(62,68,80,0.95)]">Dự án</span>';
  const boldText = '<span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Dự án</span>';
  if (content.includes(targetText)) {
    content = content.replace(targetText, boldText);
    fs.writeFileSync(brcPath, content, 'utf8');
    console.log('Successfully set BottomRightCorner text to font-bold');
  } else {
    console.log('Target text in BottomRightCorner.tsx not found or already bold.');
  }
}
