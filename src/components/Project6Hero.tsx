import { useState } from 'react';
import { 
  ChevronRight, ArrowUpRight, User, Sparkles, 
  CheckCircle2, ShieldAlert, Info, GraduationCap, ShieldCheck
, FileText, Image as ImageIcon, FolderTree, Brain} from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';
import minhchunginforgraphicbai6 from '../assets/minhchunginforgraphicbai6.png';

export default function Project6Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void }) {
  const [activeTab, setActiveTab] = useState<'baocao' | 'bailam'>('baocao');
  
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

          {/* White Glass Card Content */}
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
                    Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl font-medium">
                    Báo cáo phân tích và cẩm nang bộ nguyên tắc vàng về sử dụng AI có trách nhiệm của sinh viên UET.
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

              <div className="w-full h-[1px] bg-[#3E4450]/20 mb-8"></div>

              {/* Conditional body section */}
              {activeTab === 'baocao' ? (
                <div className="flex-grow flex flex-col gap-6 text-left">
                  
                  {/* Research Introduction Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-gradient-to-br from-[#3E4450]/25 to-white/15 border border-white/40 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
                  >
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                        <span className="text-xs font-black text-[#3E4450] uppercase tracking-wider">Nghiên cứu & Chuẩn hóa Đạo đức AI</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-nunito font-black text-[#3E4450] leading-tight">
                        Hệ thống Nguyên tắc Vàng "5T" cho Sinh viên UET
                      </h2>
                      <p className="text-sm text-[#3E4450] opacity-85 leading-relaxed text-justify font-semibold">
                        Dựa trên việc nghiên cứu chính sách liêm chính học thuật của Đại học Quốc gia Hà Nội và Đại học Công nghệ (UET), em đã đúc kết và chuẩn hóa bộ nguyên tắc **"5T"** (Trung thực - Thẩm định - Tư duy - Tôn trọng - Trách nhiệm). Đây là khung hướng dẫn thực tế giúp sinh viên khai phóng sức mạnh của AI một cách thông minh, hiệu quả và có đạo đức.
                      </p>
                    </div>
                    <div className="w-full md:w-auto shrink-0 bg-white/40 border border-white/50 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center text-center gap-2 min-w-[200px]">
                      <span className="text-[10px] font-black text-[#3E4450]/60 uppercase tracking-widest">Khung chuẩn</span>
                      <span className="text-5xl font-black text-[#3E4450] leading-none font-mono">5T</span>
                      <span className="text-xs font-bold text-[#3E4450]/80">Liêm chính học thuật</span>
                    </div>
                  </motion.div>

                  {/* 5T Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        num: "01",
                        keyword: "TRUNG THỰC",
                        title: "Không copy mù quáng",
                        desc: "Tuyệt đối không copy-paste 100% câu trả lời của AI vào bài nộp. Luôn phải đọc hiểu và viết lại theo văn văn phong và hiểu biết của mình.",
                        tip: "Tự viết lại theo cách hiểu cá nhân và đối chiếu xem văn phong đã tự nhiên chưa.",
                        icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
                        border: "hover:border-emerald-500/40 hover:bg-emerald-500/5",
                        badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
                        glow: "shadow-emerald-500/5"
                      },
                      {
                        num: "02",
                        keyword: "THẨM ĐỊNH",
                        title: "Fact-check là bắt buộc",
                        desc: "Đặc biệt với các môn Toán, Lý, AI giải phương trình hay bị nhầm dấu hoặc bịa ra định lý. Luôn phải tự tính lại hoặc đối chiếu tài liệu học tập chuẩn.",
                        tip: "Kiểm tra lại công thức và số liệu thực nghiệm bằng giáo trình UET hoặc ít nhất 2 nguồn uy tín.",
                        icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
                        border: "hover:border-rose-500/40 hover:bg-rose-500/5",
                        badge: "bg-rose-500/10 text-rose-700 border-rose-500/20",
                        glow: "shadow-rose-500/5"
                      },
                      {
                        num: "03",
                        keyword: "TƯ DUY",
                        title: "AI hướng dẫn, không làm hộ",
                        desc: "Dùng AI để hỏi cách giải (hướng tư duy, thuật toán từng bước) chứ không dùng để lấy ngay kết quả cuối cùng.",
                        tip: "Sử dụng các prompt dạng \"Giải thích hướng tiếp cận bài toán...\" thay vì yêu cầu AI cho đáp án.",
                        icon: <Brain className="w-6 h-6 text-purple-600" />,
                        border: "hover:border-purple-500/40 hover:bg-purple-500/5",
                        badge: "bg-purple-500/10 text-purple-700 border-purple-500/20",
                        glow: "shadow-purple-500/5"
                      },
                      {
                        num: "04",
                        keyword: "TÔN TRỌNG",
                        title: "Luôn minh bạch thông tin",
                        desc: "Nếu bài tập lớn có sử dụng AI can thiệp nhiều vào quá trình làm, sinh viên bắt buộc phải ghi rõ ở phần mở đầu hoặc mục tài liệu tham khảo.",
                        tip: "Ghi rõ câu trích dẫn: \"Dàn ý báo cáo được hỗ trợ lên ý tưởng bằng AI; số liệu chuyên sâu do tác giả tự tổng hợp.\"",
                        icon: <Info className="w-6 h-6 text-blue-600" />,
                        border: "hover:border-blue-500/40 hover:bg-blue-500/5",
                        badge: "bg-blue-500/10 text-blue-700 border-blue-500/20",
                        glow: "shadow-blue-500/5"
                      },
                      {
                        num: "05",
                        keyword: "TRÁCH NHIỆM",
                        title: "Bảo mật & Không rò rỉ",
                        desc: "Không ném dữ liệu cá nhân, đề tài nghiên cứu chưa công bố hoặc số liệu nội bộ của trường lên các công cụ AI công cộng.",
                        tip: "Tránh chia sẻ mã sinh viên, tài liệu mật của phòng thí nghiệm hoặc số liệu nội bộ lên AI.",
                        icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                        border: "hover:border-amber-500/40 hover:bg-amber-500/5",
                        badge: "bg-amber-500/10 text-amber-700 border-amber-500/20",
                        glow: "shadow-amber-500/5"
                      }
                    ].map((rule) => (
                      <motion.div
                        key={rule.num}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className={`bg-white/25 border border-white/35 rounded-3xl p-6 flex flex-col gap-4 shadow-md transition-all duration-300 ${rule.border} ${rule.glow}`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <div className="w-12 h-12 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center shadow-sm shrink-0">
                            {rule.icon}
                          </div>
                          <span className="text-3xl font-black opacity-30 text-[#3E4450] font-mono leading-none shrink-0">
                            {rule.num}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md border w-fit font-mono ${rule.badge}`}>
                            {rule.keyword}
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-[#3E4450]">
                            {rule.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed text-justify flex-grow opacity-90">
                          {rule.desc}
                        </p>

                        <div className="bg-[#3E4450]/5 border border-[#3E4450]/10 rounded-2xl p-4 flex flex-col gap-1 text-[11px] text-[#3E4450]/90">
                          <span className="font-extrabold text-[#3E4450] uppercase tracking-wider text-[9px]">💡 Lời khuyên thực tế:</span>
                          <p className="font-semibold leading-relaxed text-justify italic">{rule.tip}</p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Final call to action card to balance the 6-grid layout! */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="bg-gradient-to-br from-[#3E4450]/10 to-white/10 border-2 border-white rounded-3xl p-6 flex flex-col justify-center items-center text-center gap-4 shadow-md"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#3E4450]/10 border border-[#3E4450]/20 flex items-center justify-center">
                        <Sparkles className="w-7 h-7 text-[#3E4450] animate-bounce" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base sm:text-lg font-black text-[#3E4450]">Cam Kết Bền Vững</h3>
                        <p className="text-xs text-[#3E4450] font-bold uppercase tracking-wider font-mono">Học tập số lành mạnh</p>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3E4450]/80 font-semibold leading-relaxed max-w-[280px]">
                        Em cam kết tuân thủ bộ nguyên tắc này để xây dựng văn hóa công nghệ số văn minh, trách nhiệm tại UET.
                      </p>
                    </motion.div>

                  </div>
                </div>
              ) : (
                <div className="flex-grow flex flex-col">
                  {/* Grid Layout: Left is report content, Right is Infographic Placeholder */}
                  <div className="flex-grow flex flex-col w-full relative text-left">
                    
                    {/* Metadata Student Card */}
                    <div className="w-full bg-white/45 border border-white/50 rounded-2xl p-5 flex flex-col sm:flex-row flex-wrap justify-between gap-4 shadow-sm mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-white/50 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-[#3E4450]" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-[#3E4450]/70 uppercase tracking-wider">Họ và tên</h3>
                          <p className="text-sm sm:text-base font-black text-[#3E4450]">Trần Đức Hiếu</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#3E4450]/10 border border-white/50 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-5 h-5 text-[#3E4450]" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-[#3E4450]/70 uppercase tracking-wider">Trường & Ngành</h3>
                          <p className="text-xs sm:text-sm font-black text-[#3E4450]">Đại học Công nghệ (UET) - Vật lý Kỹ thuật & CN Nano</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-visible">
                      
                      {/* Left Column: Report Details (Spans 7 cols on large screens) */}
                      <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* 1. Chính sách của trường */}
                        <div className="bg-white/20 border border-white/30 rounded-2xl p-5 sm:p-6 shadow-sm">
                          <h3 className="text-base sm:text-lg font-black text-[#3E4450] mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#3E4450]/10 text-[#3E4450] border border-[#3E4450]/20 flex items-center justify-center text-xs font-bold">1</span>
                            Chính sách của trường về việc sử dụng AI
                          </h3>
                          <p className="text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed text-justify mb-4">
                            Hiện tại ở ĐHQGHN nói chung và UET nói riêng, việc sử dụng AI không bị cấm đoán khắt khe mà theo hướng cởi mở nhưng phải trung thực. Trường đã đưa môn <span className="text-[#3E4450] font-extrabold">"Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo"</span> vào giảng dạy, cho thấy việc dùng AI là xu hướng tất yếu.
                          </p>
                          <div className="bg-white/20 rounded-xl p-4 border border-white/30 space-y-3">
                            <span className="text-xs font-black text-[#3E4450] uppercase tracking-wider block mb-1">⚖️ Ranh giới liêm chính học thuật vẫn rất rõ ràng:</span>
                            <div className="grid grid-cols-1 gap-2.5 text-xs text-[#3E4450] font-semibold">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <p><strong>Chỉ hỗ trợ, không làm thay:</strong> Sinh viên được phép dùng AI để tìm tài liệu, gợi ý ý tưởng, hoặc check lỗi code/ngữ pháp. Nhưng tư duy phản biện và việc giải quyết bài toán cốt lõi vẫn phải là của sinh viên.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <p><strong>Minh bạch thông tin:</strong> Nếu có dùng AI để hỗ trợ làm bài (viết lách, xử lý số liệu), sinh viên phải khai báo rõ ràng.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                <p><strong>Cấm gian lận:</strong> Hành vi copy 100% kết quả từ AI, lấy đó làm bài luận hay báo cáo của mình để nộp bị tính là đạo văn và gian lận học thuật.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Trải nghiệm thực tế */}
                        <div className="bg-white/20 border border-white/30 rounded-2xl p-5 sm:p-6 shadow-sm">
                          <h3 className="text-base sm:text-lg font-black text-[#3E4450] mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#3E4450]/10 text-[#3E4450] border border-[#3E4450]/20 flex items-center justify-center text-xs font-bold">2</span>
                            Trải nghiệm thực tế: Dùng AI làm bài tập chuyên ngành
                          </h3>
                          <div className="space-y-4 text-xs sm:text-sm text-[#3E4450] font-semibold">
                            <div className="p-3 bg-white/25 rounded-xl border border-white/30">
                              <strong className="text-[#3E4450]">🎯 Nhiệm vụ:</strong> Tìm tài liệu và lên dàn ý cho bài thuyết trình môn học về <span className="italic text-[#3E4450]">"Tính chất nhiệt động lực học của ống Nano Carbon (CNT) và ứng dụng"</span>.
                            </div>
                            
                            <div className="space-y-3">
                              <strong className="text-[#3E4450] uppercase tracking-wider text-xs block">⚡ Quá trình thực hiện:</strong>
                              
                              <div className="pl-3 border-l-2 border-[#3E4450]/25 space-y-3">
                                <div>
                                  <span className="font-bold text-[#3E4450] text-xs block mb-1">💬 Các prompt đã dùng:</span>
                                  <div className="font-mono bg-white/35 border border-white/40 rounded-lg p-2 text-xs italic text-[#3E4450] mb-1 leading-snug">
                                    <strong>Prompt 1:</strong> "Liệt kê các tính chất cơ học và nhiệt động lực học nổi bật nhất của ống nano carbon (CNT). Viết ngắn gọn theo các gạch đầu dòng, tập trung vào bản chất vật lý."
                                  </div>
                                  <div className="font-mono bg-white/35 border border-white/40 rounded-lg p-2 text-xs italic text-[#3E4450] leading-snug">
                                    <strong>Prompt 2:</strong> "Từ các tính chất trên, gợi ý giúp tôi 3 ứng dụng thực tế của CNT trong làm linh kiện điện tử và giải thích ngắn gọn cơ chế."
                                  </div>
                                </div>

                                <div>
                                  <span className="font-bold text-[#3E4450] text-xs block mb-1">🤖 Kết quả AI trả về:</span>
                                  <p className="text-justify leading-relaxed">
                                    AI cho ra một cấu trúc khá rành mạch. Trả lời được các ý chính như độ bền kéo vượt trội, khả năng dẫn nhiệt tốt dọc theo trục ống, và tính chất bán dẫn phụ thuộc vào cấu trúc xoắn (chirality). Nó cũng gợi ý được các ứng dụng như làm bóng bán dẫn (transistor) hay vật liệu tản nhiệt.
                                  </p>
                                </div>

                                <div>
                                  <span className="font-bold text-[#3E4450] text-xs block mb-1">⚙️ Đánh giá và chỉnh sửa:</span>
                                  <p className="text-justify leading-relaxed">
                                    AI giúp dựng khung bài thuyết trình rất nhanh, đỡ tốn thời gian cày tài liệu tiếng Anh để lọc ý chính. Tuy nhiên, nội dung AI đưa ra còn nông, thiếu các phương trình nhiệt động lực học và các thông số thực nghiệm chính xác. Em chỉ lấy dàn ý của AI làm sườn, sau đó tự tra ngược lại giáo trình và các paper khoa học uy tín để điền công thức vào, đồng thời check lại các con số vì AI đôi khi hay "ảo giác" số liệu.
                                  </p>
                                </div>

                                <div>
                                  <span className="font-bold text-[#3E4450] text-xs block mb-1">📝 Cách trích dẫn:</span>
                                  <p className="italic text-[#3E4450]/90 bg-white/20 p-2.5 rounded-lg border border-white/30 text-center font-medium">
                                    "Cấu trúc dàn ý của báo cáo này được hỗ trợ lên ý tưởng bằng công cụ AI. Các số liệu, phương trình và phân tích chuyên sâu do tác giả tự tổng hợp từ tài liệu chuyên ngành."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 3. Phân tích đạo đức khi dùng AI */}
                        <div className="bg-white/20 border border-white/30 rounded-2xl p-5 sm:p-6 shadow-sm">
                          <h3 className="text-base sm:text-lg font-black text-[#3E4450] mb-3 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#3E4450]/10 text-[#3E4450] border border-[#3E4450]/20 flex items-center justify-center text-xs font-bold">3</span>
                            Phân tích đạo đức khi dùng AI
                          </h3>
                          <div className="space-y-4 text-xs sm:text-sm text-[#3E4450] font-semibold leading-relaxed">
                            
                            <div className="space-y-2">
                              <strong className="text-[#3E4450]">⚡ Ranh giới giữa việc hỗ trợ và gian lận:</strong>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3">
                                  <span className="font-black text-emerald-800 uppercase tracking-wider block mb-1">✔️ Hỗ trợ hợp lý</span>
                                  <p>Dùng AI để debug một đoạn code Python đang bị lỗi, nhờ nó giải thích lại một định lý khó nhằn trong Đại số tuyến tính, hoặc tóm tắt nhanh một bài báo dài.</p>
                                </div>
                                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3">
                                  <span className="font-black text-red-800 uppercase tracking-wider block mb-1">❌ Gian lận</span>
                                  <p>Ném nguyên cái đề bài tính toán cơ học hoặc lý thuyết vào AI, copy toàn bộ lời giải và đem nộp mà trong đầu không hiểu bản chất các bước làm.</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <strong className="text-[#3E4450] block mb-1">🔗 Vấn đề bản quyền:</strong>
                              <p className="text-justify">
                                AI sinh ra văn bản dựa trên việc xào nấu lại dữ liệu từ internet. Nếu mình lấy nguyên văn mà không trích dẫn thì về cơ bản là mình đang "chép bài" của một hệ thống tổng hợp. Khai báo việc dùng AI là cách để tôn trọng công sức của các tác giả gốc và giữ tính minh bạch.
                              </p>
                            </div>

                            <div>
                              <strong className="text-[#3E4450] block mb-1">📈 Tác động đến việc học:</strong>
                              <p className="text-justify">
                                Nếu lạm dụng, chắc chắn sinh viên sẽ bị thui chột tư duy. Dân khối kỹ thuật mà lười suy nghĩ, ỷ lại vào AI thì các kỹ năng lõi như logic toán học, khả năng tự fix bug sẽ mất hết, lúc thi giấy vào phòng thi chỉ có tịt. Nhưng nếu dùng đúng cách, AI giống như một gia sư 1 kèm 1 xịn, hỏi lúc nào cũng trả lời, giúp lấp lỗ hổng kiến thức cực kỳ nhanh.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 4. Bộ nguyên tắc cá nhân (5 quy tắc dùng AI) */}
                        <div className="bg-white/20 border border-white/30 rounded-2xl p-5 sm:p-6 shadow-sm">
                          <h3 className="text-base sm:text-lg font-black text-[#3E4450] mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#3E4450]/10 text-[#3E4450] border border-[#3E4450]/20 flex items-center justify-center text-xs font-bold">4</span>
                            Bộ nguyên tắc cá nhân "5T" - Sử dụng AI có trách nhiệm
                          </h3>
                          
                          <div className="space-y-3">
                            {[
                              {
                                num: 1,
                                title: "Quy tắc \"Không copy mù quáng\"",
                                desc: "Tuyệt đối không copy-paste 100% câu trả lời của AI vào bài nộp. Luôn phải đọc hiểu và viết lại theo văn phong của mình."
                              },
                              {
                                num: 2,
                                title: "Fact-check là bắt buộc",
                                desc: "Đặc biệt với các môn Toán, Lý, AI giải phương trình hay bị nhầm dấu hoặc bịa ra định lý. Luôn phải lấy giấy bút ra tính lại hoặc check với giáo trình."
                              },
                              {
                                num: 3,
                                title: "AI để học cách làm, không làm hộ",
                                desc: "Dùng AI để hỏi \"cách giải\" (hướng tư duy), chứ không dùng để \"lấy kết quả cuối cùng\"."
                              },
                              {
                                num: 4,
                                title: "Luôn minh bạch",
                                desc: "Nếu bài tập lớn có sử dụng AI can thiệp nhiều vào quá trình làm, phải ghi rõ ở phần lời mở đầu hoặc mục tài liệu tham khảo."
                              },
                              {
                                num: 5,
                                title: "Không rò rỉ dữ liệu",
                                desc: "Không ném dữ liệu cá nhân, đề tài nghiên cứu chưa công bố hoặc số liệu nội bộ của trường lên khung chat AI để nhờ phân tích."
                              }
                            ].map((rule) => (
                              <div key={rule.num} className="bg-white/25 border border-white/35 rounded-xl p-4 flex gap-3 items-start shadow-sm">
                                <span className="w-6 h-6 rounded-full bg-[#3E4450] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                  {rule.num}
                                </span>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-black text-[#3E4450] mb-1">{rule.title}</h4>
                                  <p className="text-xs text-[#3E4450] font-semibold leading-relaxed text-justify">{rule.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Right Column: Infographic Placeholder (Spans 5 cols on large screens) */}
                      <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-0 h-fit gap-6 text-left">
                        
                        {/* Title of Showcase */}
                        <div className="bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-full text-center">
                          <span className="text-xs sm:text-sm font-black text-[#3E4450] uppercase tracking-wider flex items-center justify-center gap-2">
                            <Sparkles className="w-4.5 h-4.5 text-amber-500 animate-pulse" />
                            Cẩm nang Đạo đức AI & Infographic
                          </span>
                        </div>

                        {/* Image for Infographic */}
                        <div className="w-full border border-[#3E4450]/20 bg-white/20 rounded-3xl overflow-hidden shadow-md flex items-center justify-center relative group">
                          <img 
                            src={minhchunginforgraphicbai6} 
                            alt="Bài làm Infographic Bài 6" 
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                            <span className="text-white text-xs font-black tracking-wider uppercase mb-1">Cẩm nang sử dụng AI có trách nhiệm</span>
                            <span className="text-gray-200 text-[10px] font-medium">Bản vẽ Infographic thiết kế cho sinh viên UET</span>
                          </div>
                        </div>

                        {/* Brief Info about Infographic contents */}
                        <div className="bg-gradient-to-br from-[#3E4450]/10 to-white/10 border-2 border-white rounded-3xl p-5 shadow-sm text-justify">
                          <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-5 h-5 text-[#3E4450]" />
                            <span className="text-xs font-black text-[#3E4450] uppercase tracking-wider">Cơ cấu nội dung Cẩm nang:</span>
                          </div>
                          <ul className="text-xs text-[#3E4450] font-semibold space-y-2">
                            <li>• <strong>Phần đầu:</strong> Khẳng định trí tuệ nhân tạo là công cụ, trí tuệ con người mới là điểm tựa vững chãi.</li>
                            <li>• <strong>Phần thân:</strong> Phân tích trực quan 2 khối đối lập "Hỗ trợ hợp lý" (màu xanh) vs "Gian lận học thuật" (màu đỏ).</li>
                            <li>• <strong>Phần cuối:</strong> Tuyên truyền 5 nguyên tắc vàng và tác động đa chiều của AI trong cuộc sống học đường.</li>
                          </ul>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          <BottomLeftCard />
          
          <motion.div
            onClick={onNavigateProjects}
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Dự án</span>
              <div className="flex items-center gap-1 text-[rgba(62,68,80,0.6)] group-hover:text-[rgba(62,68,80,0.8)] transition-colors">
                <span className="text-[12px] md:text-[15px] font-normal">Ấn để trở về</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
