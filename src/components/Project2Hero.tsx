import { useState } from 'react';
import { ChevronRight, ArrowUpRight, FileText, Image as ImageIcon, FolderTree, Search, Sparkles, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';

export default function Project2Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary, onNavigateNext }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void, onNavigateNext?: () => void }) {
  const [activeTab, setActiveTab] = useState<'baocao' | 'bailam'>('baocao');
  const [selectedQuery, setSelectedQuery] = useState(1);
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
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 xl:mb-12">
                <div className="flex-1">
                  <h1 className="font-nunito font-black text-3xl sm:text-4xl md:text-5xl text-[#3E4450] mb-4 leading-tight tracking-tight">
                    Bài 2: Tìm kiếm và đánh giá thông tin học thuật
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-medium">
                    Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.
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

              {/* Body Section - Báo cáo */}
              <div className="flex-1 flex flex-col w-full relative">
                {activeTab === 'bailam' ? ( <>
                <div className="w-full mt-2 sm:mt-4 rounded-2xl border-2 border-white/50 shadow-xl bg-white/20 p-6 md:p-10 flex flex-col text-left overflow-y-auto">
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E4450] mb-2 text-center uppercase tracking-wide">Báo cáo tổng hợp và đánh giá nguồn tài liệu</h2>
                  <p className="text-center text-[#3E4450] font-semibold mb-8 text-sm sm:text-base">
                    Chủ đề: Nghiên cứu tính chất Quang học - Bán dẫn và ứng dụng trong Linh kiện Quang điện tử<br />
                    <span className="font-normal text-xs sm:text-sm md:text-base italic">(Thuộc chuyên ngành Vật lý Kỹ thuật, Trường Đại học Công nghệ - ĐHQGHN)</span>
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-[#3E4450] mt-4 sm:mt-6 mb-2 sm:mb-3">I. Mở đầu</h3>
                  <p className="text-[#3E4450] mb-3 leading-relaxed text-sm sm:text-base text-justify">
                    <strong>Vật lý Kỹ thuật (Engineering Physics)</strong> tại Trường Đại học Công nghệ - ĐHQGHN (UET) là ngành học mũi nhọn, kết hợp giữa nền tảng vật lý hiện đại và các công nghệ kỹ thuật tiên tiến. Một trong những hướng nghiên cứu và đào tạo cốt lõi của ngành là Quang học - Quang điện tử và Công nghệ Bán dẫn.
                  </p>
                  <p className="text-[#3E4450] mb-3 leading-relaxed text-sm sm:text-base text-justify">
                    Việc nghiên cứu tính chất quang học của vật liệu bán dẫn (sự hấp thụ, bức xạ, hiệu ứng quang điện...) là nền tảng để chế tạo các linh kiện quang điện tử (optoelectronic devices) như laser bán dẫn, diode phát quang (LED), pin mặt trời và các cảm biến quang học. Báo cáo này nhằm mục đích tìm kiếm, tổng hợp và đánh giá độ tin cậy của các nguồn tài liệu liên quan đến chủ đề "Quang học - Bán dẫn" để phục vụ cho việc học tập và nghiên cứu chuyên sâu tại UET.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-[#3E4450] mt-6 mb-3">II. Phương pháp thu thập thông tin</h3>
                  <p className="text-[#3E4450] mb-3 leading-relaxed text-sm sm:text-base">Quá trình tìm kiếm tài liệu được thực hiện một cách có hệ thống thông qua các kênh:</p>
                  <ul className="list-decimal pl-6 text-[#3E4450] mb-4 leading-relaxed space-y-2 text-sm sm:text-base">
                    <li><strong>Cơ sở dữ liệu học thuật:</strong> Google Scholar, ScienceDirect, Web of Science và IEEE Xplore.</li>
                    <li><strong>Tạp chí khoa học chuyên ngành:</strong> Nature Photonics, ACS Nano, Tạp chí Khoa học ĐHQGHN.</li>
                    <li><strong>Sách chuyên khảo:</strong> Các thư viện số và nhà xuất bản học thuật uy tín như Springer, John Wiley & Sons.</li>
                    <li><strong>Nguồn mở trên internet:</strong> Cổng thông tin chính thức của ĐHQGHN và Trường Đại học Công nghệ (UET) để lấy thông tin về khung chương trình và bối cảnh đào tạo thực tế.</li>
                  </ul>
                  <p className="text-[#3E4450] mb-3 leading-relaxed text-sm sm:text-base">
                    <strong>Từ khóa sử dụng (Keywords):</strong> <span className="italic">Optical properties of semiconductors, Semiconductor optoelectronics, 2D semiconductor materials, Quang điện tử bán dẫn, Vật lý kỹ thuật UET.</span>
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-[#3E4450] mt-6 mb-3">III. Đánh giá độ tin cậy của tài liệu</h3>
                  <p className="text-[#3E4450] mb-3 leading-relaxed text-sm sm:text-base">Độ tin cậy của mỗi tài liệu được đánh giá dựa trên 5 tiêu chí độc lập:</p>
                  <ul className="list-disc pl-6 text-[#3E4450] mb-6 leading-relaxed space-y-2 text-sm sm:text-base">
                    <li><strong>Tác giả (Author):</strong> Chuyên môn, học hàm/học vị, mức độ ảnh hưởng (h-index) trong ngành.</li>
                    <li><strong>Cơ quan xuất bản (Publisher):</strong> Uy tín của tạp chí (Q1/Q2), nhà xuất bản hoặc tổ chức.</li>
                    <li><strong>Phương pháp nghiên cứu (Methodology):</strong> Tính logic, thực nghiệm hoặc mô phỏng rõ ràng, có khả năng lặp lại.</li>
                    <li><strong>Trích dẫn (Citations):</strong> Số lượng trích dẫn cho thấy mức độ lan tỏa và công nhận của cộng đồng khoa học.</li>
                    <li><strong>Tính cập nhật (Recency):</strong> Năm xuất bản phù hợp với sự phát triển nhanh chóng của ngành vi mạch - bán dẫn.</li>
                  </ul>

                  <h4 className="text-base sm:text-lg font-bold text-[#3E4450] mb-4 text-center uppercase tracking-wide">Bảng tổng hợp và đánh giá các nguồn tài liệu</h4>
                  <div className="overflow-x-auto w-full mb-6 rounded-xl border border-white/40 shadow-sm custom-scrollbar">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[800px]">
                      <thead className="bg-[#3E4450]/10 text-[#3E4450]">
                        <tr>
                          <th className="border border-white/40 p-3 text-center w-12">STT</th>
                          <th className="border border-white/40 p-3 w-1/4">Tên tài liệu / Tác giả / Năm</th>
                          <th className="border border-white/40 p-3 text-center w-32">Loại tài liệu</th>
                          <th className="border border-white/40 p-3">Đánh giá theo 5 tiêu chí (Tác giả, Xuất bản, Phương pháp, Trích dẫn, Cập nhật)</th>
                          <th className="border border-white/40 p-3 text-center w-32">Độ tin cậy (Mức độ xếp hạng)</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#3E4450] bg-white/20">
                        <tr className="hover:bg-white/40 transition-colors">
                          <td className="border border-white/40 p-3 text-center font-bold">1</td>
                          <td className="border border-white/40 p-3">Photonics and optoelectronics of 2D semiconductor... (Mak & Shan, 2016)</td>
                          <td className="border border-white/40 p-3 text-center">Bài báo khoa học (Review)</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Chuyên gia hàng đầu từ ĐH Cornell. <strong>XB:</strong> Nature Photonics (Q1, uy tín đỉnh cao). <strong>PP:</strong> Tổng quan hệ thống xuất sắc. <strong>TD:</strong> Rất cao (&gt;5000). <strong>CN:</strong> Khá tốt.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-green-700">Rất Cao<br/>(5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors bg-white/5">
                          <td className="border border-white/40 p-3 text-center font-bold">2</td>
                          <td className="border border-white/40 p-3">Emerging device applications for semiconducting 2D... (Jariwala et al., 2014)</td>
                          <td className="border border-white/40 p-3 text-center">Bài báo khoa học</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Nhóm nghiên cứu ĐH Northwestern (Mỹ). <strong>XB:</strong> ACS Nano (Q1). <strong>PP:</strong> Đánh giá thực nghiệm vật liệu mới. <strong>TD:</strong> Rất cao. <strong>CN:</strong> Trung bình.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-green-700">Rất Cao<br/>(5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors">
                          <td className="border border-white/40 p-3 text-center font-bold">3</td>
                          <td className="border border-white/40 p-3">Tính chất quang của vật liệu bán dẫn cấu trúc nano... (Nguyen et al., 2021)</td>
                          <td className="border border-white/40 p-3 text-center">Bài báo khoa học (Nội địa)</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Các nhà nghiên cứu từ viện/trường thuộc ĐHQGHN. <strong>XB:</strong> Tạp chí Khoa học ĐHQGHN. <strong>PP:</strong> Thực nghiệm đo đạc quang phổ chuẩn xác. <strong>TD:</strong> Trung bình. <strong>CN:</strong> Tốt.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-blue-700">Cao<br/>(4/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors bg-white/5">
                          <td className="border border-white/40 p-3 text-center font-bold">4</td>
                          <td className="border border-white/40 p-3">Third generation photovoltaics: ultra-high efficiency... (Green, 2001)</td>
                          <td className="border border-white/40 p-3 text-center">Bài báo khoa học</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Martin Green (cha đẻ pin mặt trời hiện đại). <strong>XB:</strong> Progress in Photovoltaics. <strong>PP:</strong> Lý thuyết & thực nghiệm đột phá. <strong>TD:</strong> Cực cao. <strong>CN:</strong> Cũ, nhưng là bài nền tảng.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-blue-700">Cao<br/>(4.5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors">
                          <td className="border border-white/40 p-3 text-center font-bold">5</td>
                          <td className="border border-white/40 p-3">Single-layer MoS2: a new direct-gap semiconductor (Mak et al., 2010)</td>
                          <td className="border border-white/40 p-3 text-center">Bài báo khoa học</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Nhóm Mak. <strong>XB:</strong> Physical Review Letters. <strong>PP:</strong> Quang phổ phát quang (Photoluminescence) thực nghiệm. <strong>TD:</strong> &gt;10,000. <strong>CN:</strong> Cơ sở bản lề.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-green-700">Rất Cao<br/>(5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors bg-white/5">
                          <td className="border border-white/40 p-3 text-center font-bold">6</td>
                          <td className="border border-white/40 p-3">Physics of optoelectronic devices (Chuang, 1995/2012)</td>
                          <td className="border border-white/40 p-3 text-center">Sách chuyên khảo</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> S.L. Chuang (Giáo sư danh dự). <strong>XB:</strong> John Wiley & Sons. <strong>PP:</strong> Lý thuyết Toán - Lý chặt chẽ. <strong>TD:</strong> Hàng ngàn trích dẫn. <strong>CN:</strong> Sách kinh điển (có tái bản).</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-green-700">Rất Cao<br/>(5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors">
                          <td className="border border-white/40 p-3 text-center font-bold">7</td>
                          <td className="border border-white/40 p-3">Optical processes in semiconductors (Pankove, 1971)</td>
                          <td className="border border-white/40 p-3 text-center">Sách chuyên khảo</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> J.I. Pankove. <strong>XB:</strong> Courier Corporation/Prentice-Hall. <strong>PP:</strong> Cơ sở lượng tử và quang học. <strong>TD:</strong> Kinh điển. <strong>CN:</strong> Rất cũ, chỉ dùng làm nền tảng lý thuyết gốc.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-yellow-700">Trung bình - Cao<br/>(3.5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors bg-white/5">
                          <td className="border border-white/40 p-3 text-center font-bold">8</td>
                          <td className="border border-white/40 p-3">The blue laser diode: the complete story (Nakamura et al., 2013)</td>
                          <td className="border border-white/40 p-3 text-center">Sách / Monograph</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Shuji Nakamura (Giải Nobel Vật lý). <strong>XB:</strong> Springer. <strong>PP:</strong> Lịch sử & kỹ thuật chế tạo thực nghiệm GaN. <strong>TD:</strong> Rất cao. <strong>CN:</strong> Khá.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-green-700">Rất Cao<br/>(5/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors">
                          <td className="border border-white/40 p-3 text-center font-bold">9</td>
                          <td className="border border-white/40 p-3">Chương trình đào tạo ngành Vật lý Kỹ thuật (Trường ĐH Công nghệ, 2024)</td>
                          <td className="border border-white/40 p-3 text-center">Nguồn mở (Institutional)</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Ban đào tạo Khoa VLKT & CNNN. <strong>XB:</strong> Website chính thức UET-VNU. <strong>PP:</strong> Khung chuẩn kiểm định đầu ra. <strong>TD:</strong> Không xét. <strong>CN:</strong> Rất mới.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-blue-700">Cao<br/>(Thông tin gốc)<br/>(4/5)</td>
                        </tr>
                        <tr className="hover:bg-white/40 transition-colors bg-white/5">
                          <td className="border border-white/40 p-3 text-center font-bold">10</td>
                          <td className="border border-white/40 p-3">ĐHQGHN mở ngành đào tạo công nghệ bán dẫn (Cổng TTĐT ĐHQGHN, 2024)</td>
                          <td className="border border-white/40 p-3 text-center">Nguồn mở (News/Báo cáo)</td>
                          <td className="border border-white/40 p-3"><strong>TG:</strong> Ban truyền thông ĐHQGHN. <strong>XB:</strong> VNU Media. <strong>PP:</strong> Tin tức/Định hướng chính sách. <strong>TD:</strong> Không xét. <strong>CN:</strong> Rất mới, cập nhật bối cảnh xã hội.</td>
                          <td className="border border-white/40 p-3 text-center font-bold text-orange-700">Trung bình<br/>(Chỉ dùng tham khảo bối cảnh)<br/>(3/5)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#3E4450] mt-4 mb-3">IV. Kết luận</h3>
                  <p className="text-[#3E4450] mb-6 leading-relaxed text-sm sm:text-base text-justify">
                    Các tài liệu thu thập được phân bổ hợp lý từ các nền tảng lý thuyết cơ bản (sách của Pankove, Chuang) cho đến các bài báo nghiên cứu đỉnh cao về vật liệu bán dẫn tiên tiến (MoS2, vi mạch) và các tài liệu định hướng thực tế của Đại học Quốc gia Hà Nội. Đánh giá độ tin cậy cho thấy hệ thống tài liệu khoa học quốc tế (trên Nature, ACS) mang lại sự đảm bảo tuyệt đối về mặt chuyên môn thực nghiệm, trong khi các tài liệu từ VNU giúp gắn kết kiến thức vào thực tiễn đào tạo chuyên ngành Vật lý Kỹ thuật trong nước hiện nay.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-[#3E4450] mt-2 mb-3 border-t border-white/30 pt-6">V. Danh mục tài liệu tham khảo <span className="text-sm font-normal italic">(Định dạng Harvard)</span></h3>
                  <ul className="list-decimal pl-6 text-[#3E4450] space-y-3 leading-relaxed text-xs sm:text-sm mb-6">
                    <li>Chuang, S.L., 1995. <em>Physics of optoelectronic devices</em>. New York: John Wiley & Sons.</li>
                    <li>Cổng thông tin điện tử ĐHQGHN, 2024. <em>ĐHQGHN mở ngành đào tạo công nghệ bán dẫn</em> [Trực tuyến]. Có tại: <a href="https://vnu.edu.vn" className="text-blue-600 hover:underline">https://vnu.edu.vn</a> (Truy cập: Ngày 21 tháng 03 năm 2026).</li>
                    <li>Green, M.A., 2001. Third generation photovoltaics: ultra-high efficiency at low cost. <em>Progress in Photovoltaics: Research and Applications</em>, 9(2), pp.123-135.</li>
                    <li>Jariwala, D., Sangwan, V.K., Lauhon, L.J., Marks, T.J. and Hersam, M.C., 2014. Emerging device applications for semiconducting two-dimensional transition metal dichalcogenides. <em>ACS Nano</em>, 8(2), pp.1102-1120.</li>
                    <li>Khoa Vật lý Kỹ thuật và Công nghệ Nano, Trường ĐH Công nghệ, 2024. <em>Chương trình đào tạo ngành Vật lý Kỹ thuật</em> [Trực tuyến]. Có tại: <a href="https://uet.vnu.edu.vn" className="text-blue-600 hover:underline">https://uet.vnu.edu.vn</a> (Truy cập: Ngày 21 tháng 03 năm 2026).</li>
                    <li>Mak, K.F., Lee, C., Hone, J., Shan, J., and Heinz, T.F., 2010. Atomically thin MoS2: a new direct-gap semiconductor. <em>Physical Review Letters</em>, 105(13), p.136805.</li>
                    <li>Mak, K.F. and Shan, J., 2016. Photonics and optoelectronics of 2D semiconductor transition metal dichalcogenides. <em>Nature Photonics</em>, 10(4), pp.216-226.</li>
                    <li>Nakamura, S., Pearton, S. and Fasol, G., 2013. <em>The blue laser diode: the complete story</em>. Berlin: Springer Science & Business Media.</li>
                    <li>Nguyen, T.H., Tran, V.A., Le, H.M. and Pham, T.T., 2021. Tính chất quang của vật liệu bán dẫn cấu trúc nano ứng dụng trong cảm biến quang. <em>Tạp chí Khoa học ĐHQGHN: Khoa học Tự nhiên và Công nghệ</em>, 37(1), pp.45-55.</li>
                    <li>Pankove, J.I., 1971. <em>Optical processes in semiconductors</em>. New York: Courier Corporation.</li>
                  </ul>
                </div>
                              </> ) : (
                <div className="w-full mt-2 sm:mt-4 rounded-2xl border-2 border-white/50 shadow-xl bg-white/20 p-6 md:p-10 flex flex-col text-left overflow-y-auto">
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-amber-500 animate-pulse animate-duration-1000" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      Trình mô phỏng Tìm kiếm Học thuật nâng cao
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#3E4450] font-semibold leading-relaxed mb-6 text-justify">
                    Để thu thập dữ liệu uy tín cho bài báo cáo, em đã thực hành sử dụng các **toán tử tìm kiếm nâng cao (Advanced Search Operators)** trên Google Scholar, ScienceDirect và các cơ sở dữ liệu lớn. Hãy chọn một truy vấn nâng cao dưới đây để xem kết quả mô phỏng thực tế:
                  </p>

                  {/* Query Tabs/Buttons */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {[
                      { id: 1, label: 'Truy vấn 1 (AND + site:)', desc: 'Tìm tài liệu 2D bán dẫn trên ScienceDirect' },
                      { id: 2, label: 'Truy vấn 2 (OR + filetype:)', desc: 'Tìm file PDF tổng hợp Quang điện tử' },
                      { id: 3, label: 'Truy vấn 3 (author: + AND)', desc: 'Tìm sách giáo trình của Giáo sư Chuang' },
                    ].map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setSelectedQuery(q.id)}
                        className={`flex-1 min-w-[200px] text-left p-3.5 rounded-xl border-2 transition-all duration-300 ${
                          selectedQuery === q.id
                            ? 'bg-white/70 border-[#3E4450] shadow-md scale-[1.01]'
                            : 'bg-white/20 border-white/30 hover:bg-white/40 hover:border-white/50'
                        }`}
                      >
                        <h4 className="text-xs font-black text-[#3E4450] uppercase tracking-wider mb-1">{q.label}</h4>
                        <p className="text-[11px] sm:text-xs text-[#3E4450]/80 font-medium leading-tight">{q.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Mock Google Scholar Console */}
                  <div className="w-full bg-[#f8fafc]/90 border-2 border-white/80 rounded-2xl shadow-lg p-4 sm:p-6 mb-4 flex flex-col font-sans">
                    {/* Header: Mock Search Input Box */}
                    <div className="flex items-center gap-2.5 bg-white border-2 border-slate-200 rounded-full px-4 sm:px-6 py-2.5 shadow-sm max-w-4xl w-full mb-6 mx-auto group focus-within:border-sky-500 focus-within:shadow-md transition-all">
                      <Search className="w-5 h-5 text-slate-400 group-focus-within:text-sky-500" />
                      <input
                        type="text"
                        readOnly
                        value={
                          selectedQuery === 1
                            ? '"optical properties of semiconductors" AND "2D materials" site:sciencedirect.com'
                            : selectedQuery === 2
                            ? '"semiconductor optoelectronics" OR "quang điện tử bán dẫn" filetype:pdf'
                            : '"physics of optoelectronic devices" AND author:"Chuang"'
                        }
                        className="flex-grow bg-transparent border-none outline-none font-medium text-xs sm:text-sm text-slate-800"
                      />
                      <Globe className="w-4 h-4 text-slate-400" />
                    </div>

                    {/* Results Count Info */}
                    <div className="text-slate-500 text-xs mb-5 pl-2 font-medium">
                      Khoảng {selectedQuery === 1 ? '5,430' : selectedQuery === 2 ? '1,890' : '982'} kết quả học thuật được tìm thấy (0.04 giây)
                    </div>

                    {/* Scholar Results Container */}
                    <div className="space-y-6">
                      {selectedQuery === 1 && (
                        <>
                          {/* Result 1 */}
                          <div className="pl-2 pr-2 text-left">
                            <h3 className="text-base sm:text-lg text-sky-850 hover:text-sky-950 font-medium hover:underline cursor-pointer flex items-center gap-1.5 leading-snug">
                              <span>[HTML] Photonics and optoelectronics of 2D semiconductor transition metal dichalcogenides</span>
                              <ArrowUpRight className="w-4 h-4 text-sky-800 shrink-0" />
                            </h3>
                            <div className="text-emerald-700 text-xs font-medium my-1">
                              KF Mak, J Shan - Nature Photonics, 2016 - nature.com
                            </div>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                              Two-dimensional transition metal dichalcogenides (TMDs) have emerged as a highly attractive class of semiconductor materials for optoelectronic applications. We review the optical properties of monolayer and...
                            </p>
                            <div className="text-slate-400 text-xs mt-1.5 hover:text-slate-500 cursor-pointer">
                              Cited by 5,432 - Related articles - All 12 versions
                            </div>
                          </div>

                          {/* Result 2 */}
                          <div className="pl-2 pr-2 text-left border-t border-slate-200/60 pt-5">
                            <h3 className="text-base sm:text-lg text-sky-855 hover:text-sky-955 font-medium hover:underline cursor-pointer flex items-center gap-1.5 leading-snug">
                              <span>Single-layer MoS2: a new direct-gap semiconductor</span>
                              <ArrowUpRight className="w-4 h-4 text-sky-800 shrink-0" />
                            </h3>
                            <div className="text-emerald-700 text-xs font-medium my-1">
                              KF Mak, C Lee, J Hone, J Shan - Physical Review Letters, 2010 - journals.aps.org
                            </div>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                              We report that monolayer MoS2, unlike bulk MoS2, is a direct-gap semiconductor exhibiting a strong photoluminescence enhancement. This transition from indirect to direct gap arises from...
                            </p>
                            <div className="text-slate-400 text-xs mt-1.5 hover:text-slate-500 cursor-pointer">
                              Cited by 12,431 - Related articles - All 15 versions
                            </div>
                          </div>
                        </>
                      )}

                      {selectedQuery === 2 && (
                        <>
                          {/* Result 1 */}
                          <div className="pl-2 pr-2 text-left">
                            <h3 className="text-base sm:text-lg text-sky-850 hover:text-sky-955 font-medium hover:underline cursor-pointer flex items-center gap-1.5 leading-snug">
                              <span>[PDF] Emerging device applications for semiconducting 2D transition metal dichalcogenides</span>
                              <ArrowUpRight className="w-4 h-4 text-sky-800 shrink-0" />
                            </h3>
                            <div className="text-emerald-700 text-xs font-medium my-1">
                              D Jariwala, VK Sangwan, LJ Lauhon... - ACS Nano, 2014 - pubs.acs.org
                            </div>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                              Transition metal dichalcogenides (TMDs) exhibit unique electrical and optical properties that differ significantly from their bulk counterparts, making them suitable for electronic and semiconductor optoelectronics...
                            </p>
                            <div className="text-slate-400 text-xs mt-1.5 hover:text-slate-500 cursor-pointer">
                              Cited by 3,821 - Related articles - All 8 versions
                            </div>
                          </div>

                          {/* Result 2 */}
                          <div className="pl-2 pr-2 text-left border-t border-slate-200/60 pt-5">
                            <h3 className="text-base sm:text-lg text-sky-850 hover:text-sky-955 font-medium hover:underline cursor-pointer flex items-center gap-1.5 leading-snug">
                              <span>Tính chất quang của vật liệu bán dẫn cấu trúc nano ứng dụng trong cảm biến quang</span>
                              <ArrowUpRight className="w-4 h-4 text-sky-800 shrink-0" />
                            </h3>
                            <div className="text-emerald-700 text-xs font-medium my-1">
                              TH Nguyen, VA Tran, HM Le... - Tạp chí Khoa học ĐHQGHN, 2021 - js.vnu.edu.vn
                            </div>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                              Bài báo này tổng hợp tính chất quang (hấp thụ, bức xạ, quang phát quang) của vật liệu bán dẫn nano (chấm lượng tử, dây bán dẫn) phục vụ cho bối cảnh phát triển quang điện tử bán dẫn trong nước hiện nay...
                            </p>
                            <div className="text-slate-400 text-xs mt-1.5 hover:text-slate-500 cursor-pointer">
                              Cited by 45 - Related articles - All 4 versions
                            </div>
                          </div>
                        </>
                      )}

                      {selectedQuery === 3 && (
                        <>
                          {/* Result 1 */}
                          <div className="pl-2 pr-2 text-left">
                            <h3 className="text-base sm:text-lg text-sky-850 hover:text-sky-955 font-medium hover:underline cursor-pointer flex items-center gap-1.5 leading-snug">
                              <span>Physics of optoelectronic devices</span>
                              <ArrowUpRight className="w-4 h-4 text-sky-800 shrink-0" />
                            </h3>
                            <div className="text-emerald-700 text-xs font-medium my-1">
                              SL Chuang - 2012 - books.google.com
                            </div>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                              A comprehensive textbook covering the physics of semiconductor optoelectronics, optical properties, quantum mechanics, and electro-optical modulation. This book is widely recognized as a foundational work...
                            </p>
                            <div className="text-slate-400 text-xs mt-1.5 hover:text-slate-500 cursor-pointer">
                              Cited by 4,120 - Related articles - All 6 versions
                            </div>
                          </div>
                        </>
                      )}
                    </div>
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Bài 3</span>
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

