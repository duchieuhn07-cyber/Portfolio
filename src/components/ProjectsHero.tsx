import { Sparkles, ChevronRight, ArrowUpRight, FolderTree, Search, Code2, Users, Wand2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';

const projects = [
  {
    icon: <FolderTree className="w-5 h-5 text-gray-200" />,
    title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
    desc: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa."
  },
  {
    icon: <Search className="w-5 h-5 text-gray-200" />,
    title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
    desc: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện."
  },
  {
    icon: <Code2 className="w-5 h-5 text-gray-200" />,
    title: "Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    desc: "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI."
  },
  {
    icon: <Users className="w-5 h-5 text-gray-200" />,
    title: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    desc: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến."
  },
  {
    icon: <Wand2 className="w-5 h-5 text-gray-200" />,
    title: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    desc: "Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-gray-200" />,
    title: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    desc: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện."
  }
];

export default function ProjectsHero({ onBack, onNavigateSummary, onNavigateToProject }: { onBack: () => void, onNavigateSummary: () => void, onNavigateToProject: (id: number) => void }) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          
          {/* Original Navbar */}
          <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
            <div className="flex-1 hidden md:block" />
            <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg">
              <li 
                onClick={onBack}
                className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5"
              >
                Trang chủ
              </li>
              <li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">
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
                onClick={onBack}
                className="flex items-center bg-[rgba(62,68,80,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(62,68,80,1)] transition-colors group"
              >
                <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-xs md:text-sm font-normal">Back</span>
              </motion.button>
            </div>
          </nav>

          <div className="w-full flex flex-col items-center pt-8 px-4 sm:px-6 text-center max-w-7xl mx-auto pb-24 h-full overflow-y-auto custom-scrollbar">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-6 -mt-4 w-fit shrink-0"
            >
              <Sparkles className="w-5 h-5 text-[rgba(62,68,80,0.8)]" />
              <span className="text-base font-medium text-[rgba(62,68,80,0.9)]">Danh sách dự án</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-nunito font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3E4450] mb-4 tracking-tight leading-[1.1] text-center shrink-0"
            >
              Báo cáo kết quả học tập
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[#3E4450] opacity-80 leading-relaxed max-w-3xl font-medium mb-12 shrink-0"
            >
              Tập trung vào việc biên tập và trình bày lại kết quả của các bài tập nhỏ từ Bài 1 đến Bài 6. <br /> Ấn chọn từng bài tập để xem chi tiết.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  onClick={() => onNavigateToProject(index + 1)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 sm:p-8 flex flex-col text-left hover:bg-[#0f172a]/80 transition-colors cursor-pointer group shadow-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mb-5 shrink-0">
                    {project.icon}
                  </div>
                  <h3 className="font-nunito font-semibold text-lg sm:text-xl text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow opacity-90">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors uppercase">
                      Xem chi tiết
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <BottomLeftCard />
          
          {/* Original Bottom Right Corner */}
          <motion.div
            onClick={onNavigateSummary}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 cursor-pointer hover:bg-[#e8e8e8] transition-colors"
          >
            <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0"/>
              </svg>
            </div>
            <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0"/>
              </svg>
            </div>
            
            <div className="bg-[rgba(62,68,80,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(62,68,80,0.1)]">
              <ArrowUpRight className="w-5 h-5 text-[rgba(62,68,80,0.8)]" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Tổng kết</span>
              <div className="flex items-center gap-1 text-[rgba(62,68,80,0.6)] cursor-pointer hover:text-[rgba(62,68,80,0.8)] transition-colors">
                <span className="text-[12px] md:text-[15px] font-normal">Ấn để xem</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
