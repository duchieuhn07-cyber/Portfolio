import { 
  ChevronRight, ArrowUpRight, User, IdCard, BookOpen, HardDrive, 
  FileText, Video, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, FolderTree
} from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';
import minhchungdrive from '../assets/minhchungdrive.png';
import minhchungdocs from '../assets/minhchungdocs.png';
import minhchungzoom from '../assets/minhchungzoom.png';

export default function Project4Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary, onNavigateNext }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void, onNavigateNext?: () => void }) {
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
                    Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-medium">
                    Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.
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

                {/* Section I: GIỚI THIỆU CHUNG */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      I. Giới thiệu chung
                    </span>
                  </div>

                  <div className="bg-white/10 border border-white/25 rounded-2xl p-6 md:p-8 shadow-sm">
                    <p className="text-[#3E4450] leading-relaxed text-justify text-sm sm:text-base mb-6 font-medium">
                      Trong dự án nhóm lần này với chủ đề <span className="font-extrabold text-[#3E4450] italic">"bài tập giữa kì"</span>, em đã tham gia với vai trò <span className="font-extrabold text-[#3E4450] italic">trưởng nhóm</span>. Để đảm bảo dự án vận hành trơn tru trong 1 tuần, nhóm em đã thống nhất sử dụng hệ sinh thái của Google và phần mềm Zoom để làm việc từ xa.
                    </p>

                    <h4 className="text-xs font-black text-[#3E4450] uppercase tracking-wider mb-4">Các công cụ được sử dụng tích cực:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Tool 1 */}
                      <div className="bg-white/25 rounded-xl p-4 border border-white/40 flex items-center gap-4">
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600">
                          <HardDrive className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-[#3E4450] text-sm">Lưu trữ & Quản lý</h5>
                          <p className="text-xs text-[#3E4450] font-semibold">Google Drive</p>
                        </div>
                      </div>

                      {/* Tool 2 */}
                      <div className="bg-white/25 rounded-xl p-4 border border-white/40 flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-600">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-[#3E4450] text-sm">Soạn thảo cộng tác</h5>
                          <p className="text-xs text-[#3E4450] font-semibold">Google Docs</p>
                        </div>
                      </div>

                      {/* Tool 3 */}
                      <div className="bg-white/25 rounded-xl p-4 border border-white/40 flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-600">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-[#3E4450] text-sm">Giao tiếp & Họp trực tuyến</h5>
                          <p className="text-xs text-[#3E4450] font-semibold">Zoom Meetings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section II: CHI TIẾT CÁC TÁC VỤ CÁ NHÂN VÀ MINH CHỨNG */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      II. Chi tiết tác vụ cá nhân và minh chứng
                    </span>
                  </div>

                  <div className="flex flex-col gap-8">
                    
                    {/* Task 1 */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20 flex items-center justify-center text-xs font-bold">1</span>
                          Quản lý tài liệu và nhiệm vụ trên Google Drive
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">📋 Tác vụ cá nhân:</span>
                            <p className="font-medium text-justify">
                              Em chịu trách nhiệm thiết lập cấu trúc thư mục làm việc cho phần việc cá nhân trong thư mục chung của nhóm. Em đã tạo các thư mục con để phân loại tài liệu thô, hình ảnh và các bản dự thảo.
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Phương pháp quản lý:</span>
                            <p className="font-medium text-justify">
                              Em sử dụng tính năng <span className="font-semibold italic text-[#3E4450]">"Gắn dấu sao" (Starred)</span> cho các file quan trọng để truy cập nhanh và dùng tính năng <span className="font-semibold italic text-[#3E4450]">"Chia sẻ"</span> để gửi tài liệu cho các bạn khác thẩm định.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchungdrive} 
                            alt="Minh chứng Google Drive" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng Google Drive</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task 2 */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-700 border border-blue-500/20 flex items-center justify-center text-xs font-bold">2</span>
                          Soạn thảo và đóng góp nội dung trên Google Docs
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">📋 Tác vụ cá nhân:</span>
                            <p className="font-medium text-justify">
                              Đây là công cụ chính em dùng để viết nội dung báo cáo chi tiết cho phần Thiết kế canva.
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Phương pháp thực hiện:</span>
                            <p className="font-medium text-justify">
                              Em đã sử dụng tính năng <span className="font-bold text-[#3E4450]">Comment (Nhận xét)</span> để thảo luận trực tiếp trên văn bản với các thành viên khác. Em cũng theo dõi <span className="font-bold text-[#3E4450]">Version History (Lịch sử phiên bản)</span> để kiểm tra lại các thay đổi của mình và đảm bảo không ghi đè lên nội dung của người khác.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchungdocs} 
                            alt="Minh chứng Google Docs" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng Google Docs</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col xl:flex-row gap-6 shadow-sm justify-between relative overflow-hidden group">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#3E4450] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-700 border border-purple-500/20 flex items-center justify-center text-xs font-bold">3</span>
                          Thảo luận và tương tác nhóm qua Zoom
                        </h3>
                        
                        <div className="space-y-4 mb-6 text-sm text-[#3E4450]">
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">📋 Tác vụ cá nhân:</span>
                            <p className="font-medium text-justify">
                              Em tham gia đầy đủ các buổi họp trực tuyến của nhóm trên Zoom để báo cáo tiến độ và giải quyết các xung đột về nội dung.
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-[#3E4450] text-xs uppercase tracking-wider block mb-1">⚙️ Phương pháp thực hiện:</span>
                            <p className="font-medium text-justify">
                              Em sử dụng tính năng <span className="font-bold text-[#3E4450]">Screen Share (Chia sẻ màn hình)</span> để trình bày bản thảo trên Google Docs cho cả nhóm cùng góp ý trực tiếp trong cuộc họp.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full xl:w-[480px] shrink-0">
                        <div className="w-full h-64 border border-[#3E4450]/20 bg-white/20 rounded-xl overflow-hidden shadow-md flex items-center justify-center relative group/img">
                          <img 
                            src={minhchungzoom} 
                            alt="Minh chứng Zoom Meeting" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-xs font-bold tracking-wider uppercase">Minh chứng Zoom Meeting</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Section III: PHÂN TÍCH HIỆU QUẢ VÀ THÁCH THỨC */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      III. Phân tích hiệu quả và thách thức
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Columns 1: Hiệu quả */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                      <div>
                        <h3 className="text-lg font-black text-emerald-800 flex items-center gap-2.5 mb-4">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          1. Hiệu quả của các công cụ
                        </h3>
                        <div className="space-y-4 text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          <div>
                            <span className="font-extrabold text-emerald-700 text-xs block mb-1">🟢 Google Drive & Docs:</span>
                            Sự kết hợp này giúp em làm việc <span className="font-bold text-[#3E4450]">"không giấy tờ"</span>. Việc mọi thay đổi được lưu tự động (<span className="italic">Auto-save</span>) giúp em hoàn toàn yên tâm không bị mất dữ liệu. Tính năng làm việc đồng thời (<span className="italic">Real-time</span>) trên Docs giúp nhóm em hoàn thành bài báo cáo nhanh gấp đôi so với cách gửi file Word truyền thống.
                          </div>
                          <div className="pt-2">
                            <span className="font-extrabold text-emerald-700 text-xs block mb-1">🟢 Zoom Meetings:</span>
                            Giúp em duy trì kết nối với nhóm dù mỗi người ở một nơi. Việc có thể nhìn thấy mặt và trao đổi trực tiếp giúp giảm thiểu những hiểu lầm khi chỉ nhắn tin qua văn bản.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Columns 2: Thách thức & Giải pháp */}
                    <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                      <div>
                        <h3 className="text-lg font-black text-amber-800 flex items-center gap-2.5 mb-4">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                          2. Thách thức và Cách giải quyết
                        </h3>
                        <div className="space-y-4 text-sm text-[#3E4450] font-medium leading-relaxed text-justify">
                          <div>
                            <span className="font-extrabold text-amber-700 text-xs block mb-1">🟡 Thách thức phát sinh:</span>
                            Khi nhiều người cùng sửa một file Google Docs trên Zoom, đôi khi đường truyền internet yếu khiến việc cập nhật bị trễ (<span className="italic">lag</span>), dẫn đến trùng lặp nội dung.
                          </div>
                          <div className="pt-2 border-t border-amber-500/10 flex gap-3">
                            <div className="text-amber-700 shrink-0 pt-0.5">
                              <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <span className="font-extrabold text-emerald-700 text-xs block mb-1">🟢 Giải pháp khắc phục:</span>
                              Em đã đề xuất nhóm phân chia rõ quyền hạn: trong lúc họp Zoom, chỉ một người được quyền gõ nội dung chính, các thành viên khác dùng tính năng Nhận xét để góp ý. Sau buổi họp, mỗi người mới tự về phần mình để hoàn thiện.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Section IV: KẾT LUẬN */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-[#3E4450]" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      IV. Kết luận
                    </span>
                  </div>

                  <div className="relative bg-gradient-to-br from-[#3E4450]/5 to-white/15 border-2 border-white rounded-2xl p-6 sm:p-8 shadow-md">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#3E4450]/5 rounded-bl-full pointer-events-none"></div>
                    <p className="text-sm sm:text-base text-[#3E4450] leading-relaxed text-justify font-semibold italic">
                      "Việc chỉ tập trung vào 3 công cụ phổ biến là Google Drive, Docs và Zoom giúp em không bị phân tâm bởi quá nhiều tính năng phức tạp mà vẫn đảm bảo hiệu quả công việc cao nhất. Em đã thành thạo kỹ năng cộng tác trực tuyến và quản lý tài liệu khoa học trên môi trường số."
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Bài 5</span>
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
