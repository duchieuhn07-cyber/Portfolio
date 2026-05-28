import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar({ onNavigate, onNavigateSummary }: { onNavigate?: () => void, onNavigateSummary?: () => void }) {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex-1 hidden md:block" />
      <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg">
        <li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">
          Trang chủ
        </li>
        <li 
          onClick={onNavigate}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5"
        >
          Dự án
        </li>
        <li 
          onClick={onNavigateSummary}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5"
        >
          Tổng kết
        </li>
      </ul>
      <div className="md:hidden">
        <span className="font-regular tracking-tighter text-xl text-[rgba(62,68,80,0.9)]">RIVR</span>
      </div>
      <div className="flex-1 flex justify-end">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(62,68,80,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(62,68,80,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  );
}
