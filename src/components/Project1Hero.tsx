import { ArrowUpRight, FileText, Image as ImageIcon, FolderTree, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Folder, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import BottomLeftCard from './BottomLeftCard';

export default function Project1Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary, onNavigateNext }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void, onNavigateNext?: () => void }) {
  const [activeTab, setActiveTab] = useState<'baocao' | 'bailam'>('baocao');
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { image: '/minhchung1.png', caption: 'Bước 1: Mở File Explorer' },
    { image: '/minhchung2.png', caption: 'Bước 2: Truy cập ổ đĩa/thư mục' },
    { image: '/minhchung3.png', caption: 'Bước 3: Tạo thư mục mới' },
    { image: '/minhchung4.png', caption: 'Bước 4: Vào thư mục vừa tạo' },
    { image: '/minhchung5.png', caption: 'Bước 5: Tạo tệp tin văn bản' },
    { image: '/minhchung6.png', caption: 'Bước 6: Đổi tên tệp tin' },
    { image: '/minhchung7.png', caption: 'Bước 7: Tạo thư mục con' },
    { image: '/minhchung8.png', caption: 'Bước 8: Sao chép tệp tin (Copy & Paste)' },
    { image: ['/minhchung9.png', '/minhchung10.png'], caption: 'Bước 9: Di chuyển tệp tin (Cut & Paste)' },
    { image: '/minhchung11.png', caption: 'Bước 10: Xóa tệp tin' },
    { image: '/minhchung12.png', caption: 'Bước 11: Xóa vĩnh viễn' },
    { image: '/minhchung13.png', caption: 'Bước 12: Khôi phục từ Thùng rác (Tùy chọn)' }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0] ">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        
        {/* Original Video Background */}
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
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 xl:mb-12">
                <div className="flex-1">
                  <h1 className="font-nunito font-black text-3xl sm:text-4xl md:text-5xl text-[#3E4450] mb-4 leading-tight tracking-tight">
                    Bài 1: Thao tác cơ bản với tệp tin và thư mục
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-medium">
                    Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.
                  </p>
                </div>
                
                {/* Tabs/Actions */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="flex items-center bg-white/40 border border-white/40 rounded-xl p-1 shadow-sm">
                    <button 
                      onClick={() => setActiveTab('baocao')}
                      className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-colors ${
                        activeTab === 'baocao' 
                          ? 'bg-white/60 text-[#3E4450] font-bold shadow-sm' 
                          : 'text-[#3E4450] hover:text-[#3E4450] hover:bg-white/50 font-semibold'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Trình bày</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('bailam')}
                      className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-colors ${
                        activeTab === 'bailam' 
                          ? 'bg-white/60 text-[#3E4450] font-bold shadow-sm' 
                          : 'text-[#3E4450] hover:text-[#3E4450] hover:bg-white/50 font-semibold'
                      }`}
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Báo cáo</span>
                    </button>
                  </div>
                  <button className="flex items-center justify-center p-2.5 sm:p-3 bg-white/40 border border-white/40 rounded-xl text-[#3E4450] hover:text-[#3E4450] hover:bg-white/60 shadow-sm transition-colors">
                    <FolderTree className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#3E4450]/20 mb-8 sm:mb-10"></div>

              {/* Body Section */}
              <div className="flex-1 flex flex-col w-full relative">
              {activeTab === 'baocao' ? (
                <div className="w-full mt-2 sm:mt-4 rounded-2xl border-2 border-white/50 shadow-xl bg-white/20 p-6 md:p-10 flex flex-col text-left overflow-y-auto">
                  
                  {/* Part 1: Cấu trúc thư mục tối ưu */}
                  <div className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#3E4450] mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>1. Cấu trúc thư mục tối ưu</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#3E4450] font-semibold leading-relaxed mb-6 text-justify">
                      Một cấu trúc thư mục tối ưu cần đảm bảo tính logic, dễ tìm kiếm và dễ mở rộng. Em có thể phân chia theo cấp độ từ tổng quan đến chi tiết. Dưới đây là mô hình cấu trúc phân cấp chuẩn của em:
                    </p>

                    {/* Styled Directory Tree */}
                    <div className="bg-white/30 border border-white/50 rounded-2xl p-5 md:p-6 font-mono text-xs sm:text-sm text-[#3E4450] mb-6 shadow-sm">
                      <div className="flex items-center gap-2 font-bold mb-3 text-sm sm:text-base">
                        <FolderOpen className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                        <span>📂 Ổ đĩa D:\ (Hoặc thư mục gốc bất kỳ)</span>
                      </div>
                      <div className="pl-6 border-l border-[#3E4450]/25 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[#3E4450]/40">├──</span>
                          <Folder className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-bold text-blue-800">01_HocTap</span>
                        </div>
                        <div className="pl-6 border-l border-[#3E4450]/25 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">├──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span className="font-semibold">Mon_TinHoc</span>
                          </div>
                          <div className="pl-6 border-l border-[#3E4450]/25 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[#3E4450]/40">├──</span>
                              <Folder className="w-4 h-4 text-amber-600/80 shrink-0" />
                              <span>BaiTap</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[#3E4450]/40">└──</span>
                              <Folder className="w-4 h-4 text-amber-600/80 shrink-0" />
                              <span>TaiLieuThamKhao</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">└──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span className="font-semibold">Mon_Toan</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[#3E4450]/40">├──</span>
                          <Folder className="w-4 h-4 text-purple-600 shrink-0" />
                          <span className="font-bold text-purple-800">02_CongViec</span>
                        </div>
                        <div className="pl-6 border-l border-[#3E4450]/25 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">├──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span>DuAn_KinhDoanh</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">└──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span>BaoCao_Thang</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[#3E4450]/40">└──</span>
                          <Folder className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-bold text-emerald-800">03_CaNhan</span>
                        </div>
                        <div className="pl-6 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">├──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span>HinhAnh</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#3E4450]/40">└──</span>
                            <Folder className="w-4 h-4 text-[#3E4450]/80 shrink-0" />
                            <span>GiayTo_TuyThan</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pl-2">
                      <span className="text-xs font-black text-[#3E4450] uppercase tracking-wider block mb-2">💡 Ưu điểm của cấu trúc này:</span>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <p>
                          <strong>Sử dụng số ở đầu (`01_`, `02_`):</strong> Giúp các thư mục luôn hiển thị theo đúng thứ tự ưu tiên mà em mong muốn, không bị xáo trộn theo bảng chữ cái.
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <p>
                          <strong>Phân loại rõ ràng:</strong> Định hình ranh giới cụ thể giữa các khía cạnh cuộc sống và công việc (Học tập, Công việc, Cá nhân).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-[#3E4450]/20 mb-8"></div>

                  {/* Part 2: Quy tắc đặt tên tệp tin và thư mục đã thiết lập */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#3E4450] mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span>2. Quy tắc đặt tên tệp tin và thư mục đã thiết lập</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#3E4450] font-semibold leading-relaxed mb-6 text-justify">
                      Để tránh lỗi khi mở file trên các phần mềm hoặc hệ điều hành khác nhau, đồng thời giúp việc tìm kiếm dễ dàng hơn, em áp dụng các quy tắc đặt tên khoa học sau:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/25 border border-white/35 rounded-xl p-4 shadow-sm">
                        <h4 className="text-xs sm:text-sm font-black text-[#3E4450] mb-2 uppercase tracking-wide">✍️ Viết không dấu</h4>
                        <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">
                          Khuyến khích sử dụng Tiếng Việt không dấu để đảm bảo tương thích hệ thống tốt nhất.
                          <br /><span className="italic text-[#3E4450]/80 mt-1 block">Ví dụ: <code className="bg-white/40 px-1.5 py-0.5 rounded">BaiTap</code> thay vì <code className="bg-white/40 px-1.5 py-0.5 rounded">Bài Tập</code>.</span>
                        </p>
                      </div>

                      <div className="bg-white/25 border border-white/35 rounded-xl p-4 shadow-sm">
                        <h4 className="text-xs sm:text-sm font-black text-[#3E4450] mb-2 uppercase tracking-wide">🚫 Không dùng khoảng trắng</h4>
                        <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">
                          Thay thế khoảng trắng bằng dấu gạch dưới (`_`) hoặc dấu gạch ngang (`-`) để tên file liền mạch, hạn chế lỗi đường dẫn.
                          <br /><span className="italic text-[#3E4450]/80 mt-1 block">Ví dụ: <code className="bg-white/40 px-1.5 py-0.5 rounded">Bai_tap_Tin_hoc.docx</code>.</span>
                        </p>
                      </div>

                      <div className="bg-white/25 border border-white/35 rounded-xl p-4 shadow-sm">
                        <h4 className="text-xs sm:text-sm font-black text-[#3E4450] mb-2 uppercase tracking-wide">📅 Thêm ngày tháng (Version Control)</h4>
                        <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">
                          Sử dụng định dạng <code className="bg-white/40 px-1 py-0.5 rounded font-mono">YYYYMMDD</code> (NămThángNgày) ở đầu hoặc cuối tên file để hệ thống tự động sắp xếp theo thời gian chính xác nhất.
                          <br /><span className="italic text-[#3E4450]/80 mt-1 block">Ví dụ: <code className="bg-white/40 px-1.5 py-0.5 rounded">20231025_BaoCaoTuan.pdf</code> (Báo cáo ngày 25/10/2023).</span>
                        </p>
                      </div>

                      <div className="bg-white/25 border border-white/35 rounded-xl p-4 shadow-sm">
                        <h4 className="text-xs sm:text-sm font-black text-[#3E4450] mb-2 uppercase tracking-wide">🎯 Ngắn gọn, đi thẳng vào nội dung</h4>
                        <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">
                          Tên file cần phản ánh đúng nội dung cốt lõi bên trong, tránh đặt tên quá dài hoặc vô nghĩa như <code className="bg-white/40 px-1.5 py-0.5 rounded">tailieu1.docx</code>, <code className="bg-white/40 px-1.5 py-0.5 rounded">untitled.docx</code>.
                          <br /><span className="italic text-[#3E4450]/80 mt-1 block">Ví dụ tệp chuẩn: <code className="bg-white/40 px-1.5 py-0.5 rounded">20231101_BT_TinHoc_Muc1.4.docx</code>.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xl sm:text-2xl leading-none mt-0.5">📸</span>
                      <span className="text-[#3E4450] font-bold tracking-wider text-xs sm:text-sm mt-1 sm:mt-1.5 uppercase">Hình ảnh thực hành từng bước:</span>
                    </div>
                    <div className="text-[#3E4450] font-bold text-xs sm:text-sm tracking-wider uppercase bg-white/40 px-3 py-1.5 rounded-lg border border-white/50">
                      Bước <span className="text-[#3E4450] text-base">{currentStep + 1}</span> / {steps.length}
                    </div>
                  </div>
                  
                  <div className="w-full min-h-[300px] sm:min-h-[400px] mt-2 sm:mt-4 bg-white/30 border-2 border-white/50 rounded-2xl flex flex-col items-center justify-center group relative overflow-hidden shadow-xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        {Array.isArray(steps[currentStep].image) ? (
                          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 p-4 pb-24 bg-[#0f172a]/5">
                            {(steps[currentStep].image as string[]).map((img, idx) => (
                              <img 
                                key={idx} 
                                src={img} 
                                alt={`Hình ảnh bước ${currentStep + 1} - ${idx + 1}`} 
                                className="w-full md:w-1/2 h-1/2 md:h-full object-contain rounded-xl shadow-md border border-white/20 bg-[#0f172a]/10"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement?.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                                }}
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={steps[currentStep].image as string}
                            alt={`Hình ảnh bước ${currentStep + 1}`}
                            className="w-full h-full object-contain bg-[#0f172a]/10"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement?.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                            }}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <div className="fallback-text hidden flex-col items-center gap-3 sm:gap-4 text-[#3E4450] z-10 absolute pointer-events-none">
                      <ImageIcon className="w-10 h-10 sm:w-12 sm:h-12 opacity-50" />
                      <span className="text-sm sm:text-base font-bold px-4 text-center">Chưa tìm thấy ảnh bài làm bước {currentStep + 1}.<br/>Hãy kiểm tra lại tên file trong thư mục public.</span>
                    </div>

                    <button 
                      onClick={handlePrev}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#3E4450] p-2 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-30"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#3E4450] p-2 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-30"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Gradient Caption at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-5 z-20">
                      <motion.span 
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide drop-shadow-lg text-center px-12"
                      >
                        {steps[currentStep].caption}
                      </motion.span>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex items-center justify-center gap-2 mt-2">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStep(idx)}
                        className={`h-2.5 rounded-full transition-all ${
                          currentStep === idx ? 'w-8 bg-[#3E4450]' : 'w-2.5 bg-[#3E4450]/30 hover:bg-[#3E4450]/50'
                        }`}
                      />
                    ))}
                  </div>

                </div>
              )}
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Bài 2</span>
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
