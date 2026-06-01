import { 
  ChevronRight, ArrowUpRight, User, IdCard, BookOpen, Sparkles, 
  Brain, CheckCircle2, AlertTriangle, Globe, FileText, FolderTree
} from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';
import minhchunggemini from '../assets/minhchunggemini.png';
import minhchungdalle from '../assets/minhchungdalle.png';
import minhchungcanva from '../assets/minhchungcanva.png';
import minhchunginforgraphic from '../assets/minhchunginforgraphic.png';

export default function Project5Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary, onNavigateNext }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void, onNavigateNext?: () => void }) {
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
          
          <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
            <div className="flex-1 hidden md:block" />
            <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[rgba(255,255,255,0.8)] font-medium text-lg">
              <li onClick={onNavigateHome} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5">Trang chủ</li>
              <li onClick={onNavigateProjects} title="Quay lại trang Dự án" className="cursor-pointer flex items-center gap-1 group bg-white/30 backdrop-blur-xl px-6 py-2.5 rounded-full transition-all text-[#3E4450] font-bold">
                Dự án
              </li>
              <li onClick={onNavigateSummary} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group px-6 py-2.5">Tổng kết</li>
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

          {/* New White Glass Card Content */}
          <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 pb-4 md:pb-6 flex-grow flex flex-col mt-4 overflow-hidden relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full overflow-y-auto custom-scrollbar bg-white/30 backdrop-blur-xl border border-white/40 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col"
            >
              {/* Header Section */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-8 xl:mb-10">
                <div className="flex-1">
                  <h1 className="font-nunito font-black text-3xl sm:text-4xl md:text-5xl text-[#3E4450] mb-4 leading-tight tracking-tight">
                    Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-medium">
                    Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI.
                  </p>
                </div>
                {/* Tabs/Actions */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="flex items-center bg-white/40 border border-white/40 rounded-xl p-1 shadow-sm">
                    <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm bg-white/60 text-[#3E4450] font-bold shadow-sm">
                      <FileText className="w-4 h-4" />
                      <span>Báo cáo</span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center p-2.5 sm:p-3 bg-white/40 border border-white/40 rounded-xl text-[#3E4450] hover:text-[#3E4450] hover:bg-white/60 shadow-sm transition-colors">
                    <FolderTree className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#3E4450]/20 mb-8"></div>

              {/* Body Section */}
              <div className="flex-1 flex flex-col w-full relative">
                
                {/* Metadata Student Card */}
                <div className="w-full bg-white/20 border border-white/40 rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3E4450]/10 border border-white/50 flex items-center justify-center">
                      <User className="w-6 h-6 text-[#3E4450]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#3E4450]/70 uppercase tracking-wider">Họ và tên</h3>
                      <p className="text-lg font-black text-[#3E4450]">Trần Đức Hiếu</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3E4450]/10 border border-white/50 flex items-center justify-center">
                      <IdCard className="w-6 h-6 text-[#3E4450]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#3E4450]/70 uppercase tracking-wider">Mã sinh viên</h3>
                      <p className="text-lg font-black text-[#3E4450]">25020933</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3E4450]/10 border border-white/50 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#3E4450]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#3E4450]/70 uppercase tracking-wider">Môn học</h3>
                      <p className="text-sm sm:text-base font-extrabold text-[#3E4450] leading-tight max-w-[320px]">
                        Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo (UET.A19)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section I: MÔ TẢ DỰ ÁN */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      I. Mô tả dự án
                    </span>
                  </div>

                  <div className="bg-white/10 border border-white/25 rounded-2xl p-6 md:p-8 shadow-sm">
                    <p className="text-[#3E4450] leading-relaxed text-justify text-sm sm:text-base mb-6 font-medium">
                      Báo cáo thực hành: <span className="font-extrabold text-[#3E4450]">Ứng dụng AI trong sáng tạo nội dung</span>. Trong dự án này, em đã thiết kế một ấn phẩm truyền thông chuyên nghiệp kết hợp các công cụ AI tạo sinh hàng đầu hiện nay.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Item 1 */}
                      <div className="bg-white/25 rounded-xl p-5 border border-white/40 flex flex-col gap-2">
                        <span className="text-xs font-black text-[#3E4450]/60 uppercase tracking-wider">Loại hình nội dung</span>
                        <p className="text-sm text-[#3E4450] font-bold leading-snug">
                          Đồ họa thông tin (Infographic) dạng dọc, tối ưu để chia sẻ trên mạng xã hội (Facebook, Instagram).
                        </p>
                      </div>

                      {/* Item 2 */}
                      <div className="bg-white/25 rounded-xl p-5 border border-white/40 flex flex-col gap-2">
                        <span className="text-xs font-black text-[#3E4450]/60 uppercase tracking-wider">Chủ đề dự án</span>
                        <p className="text-sm text-[#3E4450] font-bold leading-snug">
                          5 thói quen xanh, dễ thực hiện dành cho người sống tại các căn hộ, chung cư diện tích nhỏ ở thành phố lớn.
                        </p>
                      </div>

                      {/* Item 3 */}
                      <div className="bg-white/25 rounded-xl p-5 border border-white/40 flex flex-col gap-2">
                        <span className="text-xs font-black text-[#3E4450]/60 uppercase tracking-wider">Mục tiêu</span>
                        <p className="text-sm text-[#3E4450] font-bold leading-snug">
                          Truyền tải thông điệp bảo vệ môi trường qua giải pháp vi mô, thiết thực, đồng thời tối ưu hóa thời gian sản xuất bằng AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section II: NHẬT KÝ SỬ DỤNG AI VÀ QUÁ TRÌNH TRIỂN KHAI */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Brain className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      II. Nhật ký sử dụng AI và quá trình triển khai
                    </span>
                  </div>

                  <p className="text-[#3E4450] font-semibold text-sm sm:text-base mb-6 text-justify">
                    Để hoàn thiện dự án này, em đã thiết lập một quy trình làm việc kết hợp 3 công cụ AI tạo sinh khác nhau:
                  </p>

                  <div className="flex flex-col gap-8">
                    {/* Task 1: Google Gemini */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 flex items-center justify-center text-xs font-bold">1</span>
                          Phát triển nội dung văn bản (Sử dụng Google Gemini)
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">🎯 Mục đích:</span>
                            <p className="font-medium text-justify">Xây dựng khung nội dung (outline) và các ý tưởng chính cho Infographic.</p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">💬 Câu lệnh (Prompt) đã dùng:</span>
                            <p className="font-mono bg-white/30 border border-white/40 rounded-xl p-3 text-xs italic text-[#3E4450] font-semibold select-all">
                              "Hãy đóng vai một chuyên gia môi trường đô thị. Viết 5 mẹo ngắn gọn, thiết thực và dễ thực hiện nhất về lối sống bền vững cho những người sống ở chung cư diện tích nhỏ. Mỗi mẹo chỉ dài tối đa 2 câu, bao gồm một tiêu đề hấp dẫn."
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚡ Kết quả đầu ra của AI:</span>
                            <p className="font-medium text-justify">
                              Gemini trả về 5 ý tưởng rất sát yêu cầu, bao gồm: Làm vườn ban công, phân loại rác dưới bồn rửa, tận dụng ánh sáng tự nhiên, lắp vòi nước tăng áp tiết kiệm nước, và tối giản tủ quần áo.
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Xử lý và Tích hợp thực tế:</span>
                            <p className="font-medium text-justify font-sans">
                              Mặc dù ý tưởng tốt, nhưng văn phong AI vẫn hơi dài dòng cho Infographic. Em đã tự biên tập lại, gọt giũa các đoạn văn thành những cụm từ "slogan" ngắn gọn (khoảng 10-15 chữ/mục) để tối ưu không gian. Ví dụ: Từ <span className="italic">"Tận dụng tối đa không gian ban công bằng các chậu cây treo"</span> thành <span className="font-bold text-[#3E4450]">"Phủ xanh ban công - Lọc sạch không khí"</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchunggemini} 
                            alt="Minh chứng Google Gemini" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng Google Gemini</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task 2: DALL-E 3 */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-700 border border-blue-500/20 flex items-center justify-center text-xs font-bold">2</span>
                          Sản xuất hình ảnh minh họa (Sử dụng DALL-E 3)
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">🎯 Mục đích:</span>
                            <p className="font-medium text-justify">Tạo các yếu tố đồ họa (elements) mang tính thẩm mỹ cao và đồng nhất về phong cách.</p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">💬 Câu lệnh (Prompt) đã dùng:</span>
                            <p className="font-mono bg-white/30 border border-white/40 rounded-xl p-3 text-xs italic text-[#3E4450] font-semibold select-all">
                              "Flat vector illustration of a modern apartment balcony with lush green potted plants, minimalist style, earthy and pastel green color palette, clean lines, solid white background."
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚡ Kết quả đầu ra của AI:</span>
                            <p className="font-medium text-justify">
                              DALL-E 3 cung cấp một bức ảnh vector đúng tông màu xanh lá pastel theo phong cách tối giản tuyệt đẹp, thể hiện tốt sự thư giãn và cảm giác thân thiện môi trường "Eco-friendly".
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Xử lý và Tích hợp thực tế:</span>
                            <p className="font-medium text-justify">
                              Hình ảnh do AI tạo ra ở dạng khối vuông (1:1), không thể dùng trực tiếp vào Infographic dọc. Em đã sử dụng công cụ tách nền, bóc tách từng chậu cây và vật dụng thành các "sticker" độc lập để dễ dàng linh hoạt sắp xếp trong bước dàn trang tiếp theo.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchungdalle} 
                            alt="Minh chứng DALL-E 3" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng DALL-E 3</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task 3: Canva AI */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-700 border border-purple-500/20 flex items-center justify-center text-xs font-bold">3</span>
                          Dàn trang và Thiết kế (Sử dụng Canva AI - Magic Design)
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">🎯 Mục đích:</span>
                            <p className="font-medium text-justify">Lên bố cục nhanh chóng và ghép nối văn bản từ Gemini cùng hình ảnh từ DALL-E 3.</p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Cách sử dụng:</span>
                            <p className="font-medium text-justify">
                              Em nhập yêu cầu <span className="font-mono bg-white/30 border border-white/40 px-2 py-0.5 rounded text-xs text-[#3E4450] font-semibold">"Infographic about eco-friendly apartment living, green color theme"</span> vào thanh tìm kiếm Magic Design của Canva.
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚡ Kết quả & Tích hợp thực tế:</span>
                            <p className="font-medium text-justify">
                              AI của Canva gợi ý một số khung (template) chia khối màu sẵn. Em đã chọn một khung phù hợp nhất, tiến hành xóa bỏ các hình ảnh chung chung có sẵn, thay thế bằng bộ sticker chậu cây đã bóc tách từ DALL-E 3, và chèn phần văn bản đã được biên tập ngắn gọn từ Gemini vào các vị trí tương ứng.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchungcanva} 
                            alt="Minh chứng Canva AI" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng Canva AI</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Final Infographic Product */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden group">
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-2 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20 flex items-center justify-center text-xs font-bold">★</span>
                          Sản phẩm Infographic Hoàn thiện
                        </h3>
                        <p className="text-sm text-[#3E4450] font-medium mb-4">
                          Dưới đây là sản phẩm đồ họa thông tin hoàn chỉnh mang tên <span className="font-extrabold text-[#3E4450]">"CẨM NANG SỐNG XANH CHO CĂN HỘ NHỎ"</span> được hỗ trợ bởi các công cụ AI tạo sinh và thiết kế thủ công của bạn.
                        </p>
                      </div>

                      {/* Large Image Placeholder */}
                      <div className="w-full">
                        <div className="w-full border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative group/img">
                          <img 
                            src={minhchunginforgraphic} 
                            alt="Bản thiết kế Infographic đầy đủ" 
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white text-sm font-bold tracking-wider uppercase">Sản phẩm Infographic Hoàn thiện</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Section III: SỰ ĐÓNG GÓP SÁNG TẠO CÁ NHÂN */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <User className="w-5 h-5 text-indigo-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      III. Sự đóng góp sáng tạo cá nhân (Yếu tố con người)
                    </span>
                  </div>

                  <div className="bg-white/10 border border-white/25 rounded-2xl p-6 md:p-8 shadow-sm">
                    <p className="text-[#3E4450] leading-relaxed text-justify text-sm sm:text-base mb-6 font-semibold italic">
                      "Dự án cuối cùng không phải là sự chắp vá máy móc từ máy tính. Đóng góp cá nhân của em thể hiện rõ nét ở vai trò 'Đạo diễn' điều phối cho toàn bộ ấn phẩm:"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Box 1 */}
                      <div className="bg-white/20 border border-white/30 rounded-xl p-5 shadow-sm">
                        <h4 className="text-sm font-black text-[#3E4450] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          1. Định hướng thị giác
                        </h4>
                        <p className="text-xs sm:text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          Em trực tiếp quyết định mã màu chủ đạo (Color Palette) xanh lục pastel và font chữ không chân (Sans-serif) để mang lại cảm giác hiện đại, sạch sẽ và thân thiện môi trường.
                        </p>
                      </div>

                      {/* Box 2 */}
                      <div className="bg-white/20 border border-white/30 rounded-xl p-5 shadow-sm">
                        <h4 className="text-sm font-black text-[#3E4450] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          2. Kiểm soát luồng thông tin
                        </h4>
                        <p className="text-xs sm:text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          Em tự tay điều chỉnh bố cục, sắp xếp luồng đọc của mắt từ trên xuống dưới theo logic chặt chẽ: Thay đổi Không không gian &rarr; Thay đổi Năng lượng &rarr; Thay đổi Thói quen sinh hoạt.
                        </p>
                      </div>

                      {/* Box 3 */}
                      <div className="bg-white/20 border border-white/30 rounded-xl p-5 shadow-sm">
                        <h4 className="text-sm font-black text-[#3E4450] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          3. Kiểm duyệt chất lượng
                        </h4>
                        <p className="text-xs sm:text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          Em chủ động lọc bỏ những chi tiết thừa hoặc lỗi vẽ từ DALL-E 3 (như các nét đứt gãy vô lý) và biên tập ngôn từ tiếng Việt chuẩn ngữ pháp, ngắn gọn và tự nhiên hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section IV: PHÂN TÍCH VÀ ĐÁNH GIÁ VAI TRÒ CỦA AI */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      IV. Phân tích và đánh giá vai trò của AI
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Column 1: Ưu điểm & Hạn chế */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                      <div>
                        <h3 className="text-lg font-black text-emerald-800 flex items-center gap-2.5 mb-4">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          1. Ưu điểm và Hạn chế của AI
                        </h3>
                        <div className="space-y-4 text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          <div>
                            <span className="font-extrabold text-emerald-700 text-xs block mb-1">🟢 Điểm mạnh vượt trội:</span>
                            AI giúp em vượt qua <span className="font-bold text-[#3E4450]">"hội chứng sợ trang giấy trắng"</span> (Writer's Block). Thay vì mất hàng giờ để nghĩ ý tưởng hay vẽ tay từng chi tiết chậu cây, AI cung cấp các nguyên liệu thô với tốc độ chỉ tính bằng giây.
                          </div>
                          <div className="pt-2 border-t border-emerald-500/10">
                            <span className="font-extrabold text-red-700 text-xs block mb-1">🔴 Điểm yếu & Hạn chế:</span>
                            AI vẫn chưa có sự tinh tế trong việc thấu hiểu chiều sâu cảm xúc ngôn ngữ bản địa. DALL-E 3 đôi khi gặp các lỗi hình học nhỏ về kết cấu. Điều này bắt buộc con người phải có kỹ năng hậu kỳ và kiểm duyệt tốt.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Sự thay đổi quy trình & Đạo đức bản quyền */}
                    <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                      <div>
                        <h3 className="text-lg font-black text-amber-800 flex items-center gap-2.5 mb-4">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                          2. Quy trình làm việc mới & Đạo đức
                        </h3>
                        <div className="space-y-4 text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          <div>
                            <span className="font-extrabold text-amber-700 text-xs block mb-1">🟡 Dịch chuyển vai trò:</span>
                            Công việc của em đã dịch chuyển rõ rệt từ <span className="font-bold text-[#3E4450]">Người trực tiếp sản xuất (Producer)</span> sang <span className="font-bold text-[#3E4450]">Người giám tuyển và định hướng (Curator/Director)</span>. Em tập trung nhiều hơn vào việc đánh giá, lựa chọn và kết nối các thành phần lại với nhau.
                          </div>
                          <div className="pt-2 border-t border-amber-500/10">
                            <span className="font-extrabold text-amber-700 text-xs block mb-1">🟡 Tính minh bạch & Đạo đức học thuật:</span>
                            Em nhận thức rõ sự cần thiết của việc minh bạch khi sử dụng công cụ AI. Khi chia sẻ ấn phẩm này, em sẽ luôn đính kèm ghi chú: <span className="italic font-bold text-[#3E4450]">"Hình ảnh và khung nội dung được hỗ trợ bởi Generative AI"</span>.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bonus Block: Thiên kiến dữ liệu */}
                  <div className="relative bg-gradient-to-br from-[#3E4450]/5 to-white/15 border-2 border-white rounded-2xl p-6 sm:p-8 shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#3E4450]/5 rounded-bl-full pointer-events-none"></div>
                    <h4 className="text-sm font-black text-[#3E4450] uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#3E4450]" />
                      Nhận thức về Thiên kiến dữ liệu (Bias)
                    </h4>
                    <p className="text-sm text-[#3E4450] leading-relaxed text-justify font-medium">
                      Lời khuyên của AI đôi khi mang đậm hơi hướng thói quen phương Tây. Dưới góc độ người kiểm duyệt nội dung, em có trách nhiệm <span className="font-extrabold text-[#3E4450]">"bản địa hóa"</span> những kiến thức đó sao cho hoàn toàn phù hợp với thực tế chung cư và nếp sống văn hóa tại Việt Nam (ví dụ như diện tích ban công thực tế hay các quy tắc phân loại rác đô thị).
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
          
          <BottomLeftCard />
          
          <motion.div
            onClick={onNavigateNext}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-20 bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 cursor-pointer hover:bg-white transition-colors group"
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Bài 6</span>
              <div className="flex items-center gap-1 text-[rgba(62,68,80,0.6)] group-hover:text-[rgba(62,68,80,0.8)] transition-colors">
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

