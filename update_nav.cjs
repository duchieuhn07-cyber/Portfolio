const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:', 'Users', 'duchi', 'Downloads', 'New folder', 'src');
const componentsDir = path.join(srcDir, 'components');

for (let i = 1; i <= 6; i++) {
  const pPath = path.join(componentsDir, `Project${i}Hero.tsx`);
  if (!fs.existsSync(pPath)) continue;
  
  let content = fs.readFileSync(pPath, 'utf8');
  
  // Replace the ul
  const ulRegex = /<ul className="hidden md:flex items-center gap-[^>]+>[\s\S]*?<\/ul>/;
  const match = content.match(ulRegex);
  if (match) {
    const classMatch = match[0].match(/className="([^"]+)"/);
    let originalClassName = classMatch ? classMatch[1] : 'hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg';
    
    // Replace text-sm with text-lg, font-normal with font-medium
    originalClassName = originalClassName.replace('text-sm', 'text-lg').replace('font-normal', 'font-medium');
    // Replace gap-8 with gap-4 lg:gap-8 (if it's gap-8)
    if (originalClassName.includes('gap-8') && !originalClassName.includes('gap-4')) {
      originalClassName = originalClassName.replace('gap-8', 'gap-4 lg:gap-8');
    }
    
    const newUl = `<ul className="${originalClassName}">
              <li onClick={onNavigateHome} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5">Trang chủ</li>
              <li onDoubleClick={onNavigateProjects} title="Nhấn đúp để quay lại trang Dự án" className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#1E325A]">
                Dự án
              </li>
              <li onClick={onNavigateSummary} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5">Tổng kết</li>
            </ul>`;
            
    content = content.replace(ulRegex, newUl);
  }
  
  fs.writeFileSync(pPath, content, 'utf8');
}
console.log('Update successful');
