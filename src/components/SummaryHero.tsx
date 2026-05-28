import { Sparkles, ArrowUpRight, User, GraduationCap, Trophy, PenTool, Database, Search, FileText, BarChart, Layers, Brain, Users } from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';

export default function SummaryHero({ onBack, onNavigateProjects }: { onBack: () => void, onNavigateProjects: () => void }) {
  
  const milestones = [
    {
      id: 1,
      title: "Bài 1: Kỹ năng số cơ bản",
      desc: "Quản lý tệp tin & thư mục khoa học. Thiết lập cấu trúc lưu trữ và quy tắc đặt tên tệp chuẩn mực.",
      icon: <Database className="w-4 h-4 text-blue-600" />,
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      id: 2,
      title: "Bài 2: Khai thác thông tin",
      desc: "Tìm kiếm học thuật bằng toán tử nâng cao và đánh giá độ tin cậy của tài liệu khoa học ISI/Scopus.",
      icon: <Search className="w-4 h-4 text-[#3E4450]" />,
      bg: "bg-[#3E4450]/10 border-[#3E4450]/20"
    },
    {
      id: 3,
      title: "Bài 3: Prompt Engineering",
      desc: "Làm chủ nghệ thuật viết prompt hiệu quả, so sánh prompt thường và prompt cải tiến nâng tầm đầu ra từ AI.",
      icon: <FileText className="w-4 h-4 text-amber-600" />,
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      id: 4,
      title: "Bài 4: Hợp tác trực tuyến",
      desc: "Sử dụng bộ công cụ số (Zoom, Google Drive, Trello) để làm việc nhóm, điều phối dự án từ xa hiệu quả.",
      icon: <BarChart className="w-4 h-4 text-purple-600" />,
      bg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      id: 5,
      title: "Bài 5: Sáng tạo nội dung với AI",
      desc: "Sản xuất infographic chuyên nghiệp dưới sự hỗ trợ đắc lực từ mô hình AI tạo sinh (Gemini, DALL-E 3).",
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      bg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: 6,
      title: "Bài 6: Sử dụng AI có trách nhiệm",
      desc: "Xây dựng bộ cẩm nang đạo đức 5T vàng để giữ vững tính liêm chính học thuật trong kỷ nguyên trí tuệ nhân tạo.",
      icon: <Sparkles className="w-4 h-4 text-rose-600" />,
      bg: "bg-rose-500/10 border-rose-500/20"
    }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0] ">
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
          
          {/* Navigation Bar */}
          <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
            <div className="flex-1 hidden md:block" />
            <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg">
              <li 
                onClick={onBack}
                className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5"
              >
                Trang chủ
              </li>
              <li 
                onClick={onNavigateProjects}
                className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5"
              >
                Dự án
              </li>
              <li className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">
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

          {/* Main Content Area */}
          <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 pb-6 md:pb-12 flex-grow flex flex-col mt-4 overflow-hidden relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full overflow-y-auto custom-scrollbar bg-white/30 backdrop-blur-xl border border-white/40 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col"
            >
              
              {/* Header Section */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-8 xl:mb-10 border-b border-[#3E4450]/20 pb-8">
                <div className="flex-1">
                  <h1 className="font-nunito font-black text-3xl sm:text-4xl md:text-5xl text-[#3E4450] mb-4 leading-tight tracking-tight">
                    Tổng kết & Thu hoạch môn học
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl font-medium">
                    Hành trình kiến tạo năng lực số và ứng dụng trí tuệ nhân tạo trong học tập tại trường Đại học Công nghệ (UET).
                  </p>
                </div>
                
                {/* Student Info Card in Header */}
                <div className="flex flex-wrap items-center gap-6 bg-white/45 border border-white/50 rounded-2xl p-4 shadow-sm shrink-0 w-full xl:w-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-[#3E4450]" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-[#3E4450]/70 uppercase tracking-wider">Sinh viên thực hiện</h3>
                      <p className="text-sm font-black text-[#3E4450]">Trần Đức Hiếu • 25020933</p>
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-[#3E4450]/20 hidden sm:block"></div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#3E4450]" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-[#3E4450]/70 uppercase tracking-wider">Lớp môn học</h3>
                      <p className="text-sm font-black text-[#3E4450]">UET.A19</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Column Premium Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow">
                
                {/* Left Column: Personal Reflection & Knowledge Management (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  {/* Card I: Personal Reflection */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/45 border border-white/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-[#3E4450]" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#3E4450] uppercase tracking-wide">I. Trải nghiệm & Cảm nhận cá nhân</h2>
                        <p className="text-xs text-[#3E4450] font-bold tracking-wider uppercase">Hành trình thay đổi tư duy làm việc số</p>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-[#3E4450] font-semibold leading-relaxed text-justify italic border-l-2 border-[#3E4450]/30 pl-4 py-1">
                      "Là một sinh viên chuyên ngành Vật lý kỹ thuật, trước đây tôi thường nghĩ môn học này chỉ dừng lại ở các kỹ năng soạn thảo văn bản hay làm slide thuyết trình đơn giản. Tuy nhiên, sau khi đi qua toàn bộ lộ trình, tôi thực sự bất ngờ về sự thay đổi trong tư duy học tập số của bản thân. Cảm giác tự tay sắp xếp hệ thống thư mục khoa học, thiết lập bộ nguyên tắc tương tác AI học đường và tự mình xây dựng trang Portfolio cá nhân này mang lại cho tôi niềm vui và sự tự tin lớn. Môn học đã giúp tôi phá bỏ giới hạn của những công cụ văn phòng thông thường, biến chúng thành phương tiện mạnh mẽ để tối ưu hóa việc quản lý dữ liệu nghiên cứu thực nghiệm hàng ngày."
                    </p>
                  </motion.div>

                  {/* Card II: Digital Knowledge Management */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/45 border border-white/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                        <PenTool className="w-5 h-5 text-[#3E4450]" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#3E4450] uppercase tracking-wide">II. Quản trị tri thức số & Xây dựng nền tảng</h2>
                        <p className="text-xs text-[#3E4450] font-bold tracking-wider uppercase">Hệ thống hóa học tập cá nhân (Bài 1, 2, 3)</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed text-justify">
                      Giai đoạn đầu của chương trình học giúp tôi chuẩn hóa toàn bộ không gian học tập số và phương pháp nghiên cứu tài liệu khoa học. Bắt đầu với <strong className="text-[#3E4450]">Bài 1</strong>, việc xây dựng cấu trúc thư mục phân cấp chuẩn và quy chuẩn đặt tên tệp logic theo định dạng kebab-case giúp tôi quản lý hàng trăm tài liệu thực nghiệm một cách nhanh chóng và hệ thống. Sang <strong className="text-[#3E4450]">Bài 2</strong>, việc vận dụng linh hoạt các toán tử tìm kiếm nâng cao (AND, OR, site:, filetype:) cùng bộ tiêu chuẩn CRAAP đã hỗ trợ tối đa trong việc chọn lọc, thẩm định các bài báo học thuật uy tín trên các hệ thống cơ sở dữ liệu lớn. Cuối cùng ở <strong className="text-[#3E4450]">Bài 3</strong>, nghệ thuật Prompt Engineering với các kỹ thuật Few-shot và Chain-of-Thought đã nâng tầm cách tôi giao tiếp với AI, biến mô hình ngôn ngữ lớn thành một trợ lý nghiên cứu đắc lực, hỗ trợ phân tích dữ liệu bán dẫn và viết báo cáo học thuật chuyên nghiệp.
                    </p>
                  </motion.div>

                  {/* Card III: Digital Collaboration & AI Creation */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/45 border border-white/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                        <Trophy className="w-5 h-5 text-[#3E4450]" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#3E4450] uppercase tracking-wide">III. Hợp tác số & Sáng tạo nội dung tạo giá trị</h2>
                        <p className="text-xs text-[#3E4450] font-bold tracking-wider uppercase">Kết nối và tối ưu hiệu suất trong kỷ nguyên AI (Bài 4, 5, 6)</p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed text-justify">
                      Giai đoạn hai thúc đẩy kỹ năng làm việc tập thể và kiến tạo sản phẩm học tập thực tế. <strong className="text-[#3E4450]">Bài 4</strong> với việc thiết lập và vận hành các không gian làm việc số (Google Workspace, Trello, Zoom) đã định hình tư duy điều phối công việc nhóm khoa học và xử lý tài liệu đồng thời. Tiếp đó, <strong className="text-[#3E4450]">Bài 5</strong> đem lại bước đột phá trong tư duy hình ảnh hóa thông tin, biến những dữ liệu kỹ thuật bán dẫn khô khan thành Infographic sinh động, trực quan bằng Canva dưới sự trợ giúp đắc lực của mô hình AI tạo sinh. Đặc biệt, <strong className="text-[#3E4450]">Bài 6</strong> củng cố tinh thần liêm chính và đạo đức công nghệ thông qua bộ Cẩm nang 5T vàng, giúp tôi định vị bản thân là một công dân số có trách nhiệm, sử dụng AI làm đòn bẩy phát triển cá nhân mà không làm tổn hại đến các giá trị đạo đức học đường.
                    </p>
                  </motion.div>

                </div>

                {/* Right Column: Roadmap / Projects Milestone Summary (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Digital Projects Roadmap Card */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/45 border border-white/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm flex-grow"
                  >
                    <div className="flex items-center gap-4 border-b border-[#3E4450]/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-[#3E4450]" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-extrabold text-[#3E4450] uppercase tracking-wide">Tổng kết các bài học</h2>
                        <p className="text-xs text-[#3E4450] font-bold tracking-wider uppercase">Chặng đường 6 sản phẩm thực hành</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      
                      {milestones.map((m) => (
                        <div key={m.id} className="flex gap-4 group bg-white/20 hover:bg-white/40 border border-white/30 rounded-xl p-3.5 transition-all duration-300 shadow-sm">
                          <div className={`w-9 h-9 rounded-lg ${m.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                            {m.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#3E4450] mb-1">{m.title}</h4>
                            <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">
                              {m.desc}
                            </p>
                          </div>
                        </div>
                      ))}

                    </div>
                  </motion.div>

                  {/* Deep Gratitude Note */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-white/40 border border-white/50 rounded-2xl p-5 text-center shadow-sm"
                  >
                    <p className="text-xs sm:text-sm text-[#3E4450] font-bold italic leading-relaxed">
                      "Xin chân thành cảm ơn các Thầy Cô đã đồng hành và hướng dẫn em hoàn thành xuất sắc các nội dung học tập bổ ích này!"
                    </p>
                  </motion.div>

                </div>

              </div>

            </motion.div>
          </div>
          
          <BottomLeftCard />
          
        </div>
      </section>
    </div>
  );
}
