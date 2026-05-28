import { useState } from 'react';
import { 
  Sparkles, ChevronRight, ArrowUpRight, BookOpen, Lightbulb, 
  HelpCircle, Zap, UserCheck, Layout, Users, Copy, GitCommit 
} from 'lucide-react';
import { motion } from 'motion/react';
import BottomLeftCard from './BottomLeftCard';

const tasksData = [
  {
    id: 1,
    title: "Tác vụ 1: Tóm tắt bài đọc / tài liệu học thuật",
    subject: "Tác động của Biến đổi khí hậu đến Đa dạng sinh học",
    description: "Tóm tắt và trích xuất thông tin cốt lõi từ bài báo khoa học dài một cách hệ thống, khách quan.",
    promptBasic: "Tóm tắt bài viết sau: [Chèn văn bản]",
    promptImproved: "Hãy đọc bài báo học thuật dưới đây và tóm tắt nó lại thành một đoạn văn ngắn khoảng 150-200 từ. Hãy đảm bảo nêu bật được vấn đề chính và 3 kết luận quan trọng nhất của tác giả: [Chèn văn bản]",
    promptAdvanced: {
      role: "Hãy đóng vai một trợ lý nghiên cứu xuất sắc. Tôi sẽ cung cấp cho bạn một bài báo học thuật. Nhiệm vụ của bạn là đọc hiểu và trích xuất thông tin theo cấu trúc sau:",
      steps: [
        "TL;DR (Tóm tắt cốt lõi): 1 câu duy nhất khái quát toàn bộ bài.",
        "Phương pháp nghiên cứu: Tóm tắt ngắn gọn cách tác giả thực hiện nghiên cứu (2-3 dòng).",
        "Phát hiện chính: Sử dụng gạch đầu dòng (bullet points) để liệt kê 3-5 phát hiện quan trọng nhất.",
        "Hạn chế/Đề xuất: Bài viết có nêu ra hạn chế nào không?"
      ],
      notes: "Lưu ý: Sử dụng giọng văn học thuật, khách quan và tuyệt đối không thêm thắt thông tin ngoài văn bản.",
      footer: "Đây là văn bản: [Chèn văn bản]"
    }
  },
  {
    id: 2,
    title: "Tác vụ 2: Giải thích một khái niệm phức tạp",
    subject: "Công nghệ Blockchain",
    description: "Chuyển đổi kiến thức công nghệ trừu tượng thành cách giải thích dễ hiểu thông qua phép ẩn dụ gần gũi.",
    promptBasic: "Giải thích Blockchain là gì.",
    promptImproved: "Hãy giải thích khái niệm công nghệ Blockchain một cách dễ hiểu cho một người không học về công nghệ thông tin. Hãy dùng các ví dụ thực tế trong đời sống để minh họa cho cách hoạt động của nó.",
    promptAdvanced: {
      role: "Đóng vai một giáo viên khoa học xuất sắc có khả năng biến các chủ đề kỹ thuật khó khăn thành câu chuyện hấp dẫn. Hãy giải thích 'Công nghệ Blockchain' cho một học sinh trung học 15 tuổi.",
      steps: [
        "Bước 1: Mở đầu bằng một phép ẩn dụ gần gũi trong đời sống học đường (ví dụ: một cuốn sổ cái dùng chung của lớp mà ai cũng có thể xem nhưng không ai có thể tự ý bôi xóa).",
        "Bước 2: Dựa vào phép ẩn dụ đó, giải thích 3 đặc tính cốt lõi của Blockchain: Phi tập trung, Minh bạch, và Không thể thay đổi.",
        "Bước 3: Nêu 1 ví dụ thực tế về ứng dụng của nó (ngoài tiền điện tử)."
      ],
      notes: "Giữ giọng điệu thân thiện, hào hứng và giải thích ngay lập tức nếu phải dùng bất kỳ từ ngữ chuyên ngành nào."
    }
  },
  {
    id: 3,
    title: "Tác vụ 3: Tạo bộ câu hỏi ôn tập",
    subject: "Chiến tranh Thế giới thứ 2",
    description: "Thiết kế bộ câu hỏi trắc nghiệm đánh giá năng lực, kích thích tư duy sâu thay vì ghi nhớ máy móc.",
    promptBasic: "Tạo câu hỏi trắc nghiệm về Chiến tranh Thế giới thứ 2.",
    promptImproved: "Tạo một bài kiểm tra trắc nghiệm gồm 5 câu hỏi về nguyên nhân và các sự kiện chính của Chiến tranh Thế giới thứ 2. Mỗi câu hỏi cần có 4 đáp án (A, B, C, D). Vui lòng cung cấp đáp án đúng ở cuối bài.",
    promptAdvanced: {
      role: "Bạn là một chuyên gia thiết kế đề thi đánh giá năng lực, chuyên tạo ra các câu hỏi kiểm tra tư duy và sự hiểu biết sâu, không chỉ là ghi nhớ máy móc. Hãy tạo bộ 5 câu hỏi trắc nghiệm về 'Chiến tranh Thế giới thứ 2'.",
      steps: [
        "Phân bổ độ khó: 2 câu nhận biết, 2 câu phân tích, 1 câu suy luận.",
        "Cấu trúc: 4 lựa chọn (A, B, C, D), chỉ 1 đáp án đúng.",
        "Sau mỗi câu, phải có phần [Giải thích]: Nêu rõ lý do tại sao đáp án đó đúng và tại sao các lựa chọn còn lại sai để người học rút kinh nghiệm."
      ],
      footer: "Ví dụ về định dạng bạn cần làm theo:\nCâu hỏi: ...\nA. ... B. ... C. ... D. ...\nĐáp án đúng: ...\nGiải thích: Đáp án A đúng vì... Các đáp án B, C sai vì...\nBây giờ, hãy bắt đầu tạo 5 câu hỏi của bạn."
    }
  }
];

const principlesData = [
  {
    id: 1,
    title: "Chỉ định vai trò rõ ràng",
    technique: "Role Prompting",
    iconName: "UserCheck",
    colorClass: "hover:border-amber-500/50 hover:bg-amber-500/5",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    badgeColor: "bg-amber-500 text-white",
    desc: <>Bắt đầu bằng câu <span className="font-semibold text-amber-700 italic">"Hãy đóng vai..."</span> (một chuyên gia, một giáo viên mầm non, một nhà phê bình...). Điều này giúp AI tự động điều chỉnh vốn từ vựng và giọng văn cho phù hợp.</>
  },
  {
    id: 2,
    title: "Rõ ràng về định dạng đầu ra",
    technique: "Formatting",
    iconName: "Layout",
    colorClass: "hover:border-blue-500/50 hover:bg-blue-500/5",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    badgeColor: "bg-blue-500 text-white",
    desc: <>Đừng để AI tự quyết định cách trình bày. Hãy yêu cầu rõ: <span className="font-semibold text-blue-700 italic">"Trình bày dưới dạng bảng"</span>, <span className="font-semibold text-blue-700 italic">"Sử dụng gạch đầu dòng"</span>, <span className="font-semibold text-blue-700 italic">"In đậm các từ khóa"</span>, <span className="font-semibold text-blue-700 italic">"Cấu trúc gồm 3 phần..."</span>.</>
  },
  {
    id: 3,
    title: "Cung cấp Bối cảnh & Đối tượng",
    technique: "Context & Audience",
    iconName: "Users",
    colorClass: "hover:border-purple-500/50 hover:bg-purple-500/5",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    badgeColor: "bg-purple-500 text-white",
    desc: <><span className="font-semibold text-purple-700 italic">"Giải thích cho chuyên gia"</span> sẽ tạo ra kết quả hoàn toàn khác với <span className="font-semibold text-purple-700 italic">"Giải thích cho đứa trẻ 10 tuổi"</span>. Luôn cho AI biết nó đang tạo nội dung cho ai.</>
  },
  {
    id: 4,
    title: "Cung cấp Ví dụ",
    technique: "Few-shot Prompting",
    iconName: "Copy",
    colorClass: "hover:border-rose-500/50 hover:bg-rose-500/5",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    badgeColor: "bg-rose-500 text-white",
    desc: <>Nếu bạn muốn một định dạng khó hoặc một kiểu tư duy đặc thù, hãy cho AI xem <span className="font-semibold text-rose-700">1-2 ví dụ mẫu</span> trong chính prompt của bạn để AI làm theo.</>
  },
  {
    id: 5,
    title: "Chia nhỏ các bước",
    technique: "Chain-of-Thought",
    iconName: "GitCommit",
    colorClass: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    badgeColor: "bg-emerald-500 text-white",
    desc: <>Với các tác vụ phức tạp, thay vì bảo AI <span className="italic text-emerald-800">"làm đi"</span>, hãy bảo AI <span className="font-semibold text-emerald-700">"Hãy thực hiện qua Bước 1..., Bước 2..., Bước 3..."</span>. Điều này giảm tỷ lệ AI bịa đặt thông tin (<span className="italic">hallucination</span>) và tăng tính logic.</>
  }
];

export default function Project3Hero({ onBack, onNavigateHome, onNavigateProjects, onNavigateSummary, onNavigateNext }: { onBack: () => void, onNavigateHome?: () => void, onNavigateProjects?: () => void, onNavigateSummary?: () => void, onNavigateNext?: () => void }) {
  const [activeTab, setActiveTab] = useState<number>(1);

  const renderPrincipleIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-amber-600" />;
      case 'Layout': return <Layout className="w-6 h-6 text-blue-600" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-600" />;
      case 'Copy': return <Copy className="w-6 h-6 text-rose-600" />;
      case 'GitCommit': return <GitCommit className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

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
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-10 xl:mb-12">
                <div className="flex-1">
                  <h1 className="font-nunito font-black text-3xl sm:text-4xl md:text-5xl text-[#3E4450] mb-4 leading-tight tracking-tight">
                    Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập
                  </h1>
                  <p className="text-[#3E4450] opacity-80 italic text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-medium">
                    Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#3E4450]/20 mb-8 sm:mb-10"></div>

              {/* Body Section */}
              <div className="flex-1 flex flex-col w-full relative">
                
                {/* Section I Title */}
                <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                  <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                  <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                    I. Lựa chọn tác vụ & Xây dựng 3 phiên bản Prompt
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap gap-2 mb-8 bg-white/10 p-1.5 rounded-2xl border border-white/20 w-full sm:w-fit">
                  {tasksData.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => setActiveTab(task.id)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        activeTab === task.id
                          ? 'bg-[#3E4450] text-white shadow-lg shadow-[#3E4450]/20 scale-105'
                          : 'text-[#3E4450] hover:bg-white/20 hover:text-[#3E4450]'
                      }`}
                    >
                      {task.id === 1 && <BookOpen className="w-4 h-4" />}
                      {task.id === 2 && <Lightbulb className="w-4 h-4" />}
                      {task.id === 3 && <HelpCircle className="w-4 h-4" />}
                      <span>Tác vụ {task.id}</span>
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveTab(4)}
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 4
                        ? 'bg-[#3E4450] text-white shadow-lg shadow-[#3E4450]/20 scale-105'
                        : 'text-[#3E4450] hover:bg-white/20 hover:text-[#3E4450]'
                    }`}
                  >
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>So sánh đối chiếu</span>
                  </button>
                </div>

                {/* Content Area */}
                <div className="w-full">
                  {tasksData.map((task) => {
                    if (activeTab !== 4 && activeTab !== task.id) return null;
                    return (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`w-full mb-10 ${activeTab === 4 ? 'border-b border-white/20 pb-10 last:border-b-0 last:pb-0' : ''}`}
                      >
                        {/* Task Title Banner */}
                        <div className="bg-white/20 border border-white/30 rounded-2xl p-5 mb-6 shadow-sm">
                          <h2 className="text-lg sm:text-xl font-black text-[#3E4450] flex items-center gap-2.5">
                            <span className="w-7 h-7 rounded-lg bg-[#3E4450]/10 text-[#3E4450] flex items-center justify-center text-sm font-bold">
                              {task.id}
                            </span>
                            {task.title}
                          </h2>
                          <div className="mt-3 flex flex-wrap gap-2 items-center">
                            <span className="text-xs font-bold text-[#3E4450]/70 uppercase tracking-wider">Chủ đề áp dụng:</span>
                            <span className="px-3 py-1 rounded-full bg-white/40 border border-white/50 text-[#3E4450] text-xs sm:text-sm font-semibold italic">
                              "{task.subject}"
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#3E4450] mt-3 font-medium leading-relaxed italic">
                            💡 {task.description}
                          </p>
                        </div>

                        {/* Three levels cards grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          
                          {/* Level 1: Cơ bản */}
                          <div className="bg-white/10 hover:bg-white/15 transition-all border border-white/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
                            <div>
                              <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold bg-red-500/10 border border-red-500/20 text-red-700 px-2.5 py-1 rounded-full">
                                  Cơ bản (Lớp 1)
                                </span>
                                <span className="text-[10px] font-bold text-red-600/80">Hiệu quả thấp</span>
                              </div>
                              <h3 className="text-sm font-extrabold text-[#3E4450] mb-3">Prompt thô</h3>
                              <div className="bg-white/30 rounded-xl p-4 border border-white/40 text-xs sm:text-sm text-[#3E4450] font-mono whitespace-pre-wrap leading-relaxed select-all">
                                {task.promptBasic}
                              </div>
                            </div>
                            <div className="mt-5 pt-4 border-t border-white/20 text-xs text-[#3E4450]/70 flex items-center gap-1.5 font-medium">
                              ❌ Thiếu ngữ cảnh, vai trò và khuôn mẫu đầu ra mong muốn.
                            </div>
                          </div>

                          {/* Level 2: Cải tiến */}
                          <div className="bg-white/10 hover:bg-white/15 transition-all border border-white/20 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
                            <div>
                              <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-700 px-2.5 py-1 rounded-full">
                                  Cải tiến (Lớp 2)
                                </span>
                                <span className="text-[10px] font-bold text-blue-600/80">Hiệu quả khá</span>
                              </div>
                              <h3 className="text-sm font-extrabold text-[#3E4450] mb-3">Prompt định hướng</h3>
                              <div className="bg-white/30 rounded-xl p-4 border border-white/40 text-xs sm:text-sm text-[#3E4450] font-mono whitespace-pre-wrap leading-relaxed select-all">
                                {task.promptImproved}
                              </div>
                            </div>
                            <div className="mt-5 pt-4 border-t border-white/20 text-xs text-blue-700/80 flex items-center gap-1.5 font-medium">
                              ✔️ Đã bổ sung giới hạn (độ dài, ý chính), kết quả rõ ràng hơn.
                            </div>
                          </div>

                          {/* Level 3: Nâng cao */}
                          <div className="bg-gradient-to-br from-[#3E4450]/5 to-[#3E4450]/10 border-2 border-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md relative overflow-hidden group col-span-1 lg:col-span-1 min-h-[300px]">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                            <div>
                              <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-3 py-1 rounded-full shadow-sm shadow-amber-500/10">
                                  Nâng cao (Lớp 3)
                                </span>
                                <span className="text-[10px] font-black text-amber-600 animate-pulse tracking-wide">Hiệu quả vượt trội 🚀</span>
                              </div>
                              
                              <h3 className="text-sm font-black text-[#3E4450] mb-3 flex items-center gap-1.5">
                                👑 Kỹ thuật Prompt Phức hợp
                              </h3>
                              
                              <div className="bg-white/50 rounded-xl p-4 border border-white/60 text-xs text-[#3E4450] leading-relaxed shadow-inner">
                                <div className="font-semibold text-[#3E4450] mb-2 border-b border-[#3E4450]/10 pb-1.5">
                                  🎭 Role/Persona:
                                </div>
                                <p className="font-medium italic mb-3 text-[#3E4450]/90 bg-white/25 p-2 rounded-lg border border-white/30">
                                  "{task.promptAdvanced.role}"
                                </p>
                                
                                {task.promptAdvanced.steps && (
                                  <>
                                    <div className="font-semibold text-[#3E4450] mb-2">📋 Quy trình từng bước (Chain-of-Thought):</div>
                                    <ul className="list-disc pl-4 space-y-1.5 mb-3 font-medium">
                                      {task.promptAdvanced.steps.map((step, idx) => (
                                        <li key={idx} className="text-[#3E4450]">{step}</li>
                                      ))}
                                    </ul>
                                  </>
                                )}

                                {task.promptAdvanced.notes && (
                                  <p className="mt-2.5 p-2 bg-amber-500/5 border border-amber-500/10 text-[#3E4450] font-semibold rounded-lg italic text-[11px]">
                                    ⚠️ {task.promptAdvanced.notes}
                                  </p>
                                )}

                                {task.promptAdvanced.footer && (
                                  <p className="mt-2 text-[11px] font-mono text-[#3E4450]/70 border-t border-white/50 pt-2 whitespace-pre-wrap">
                                    {task.promptAdvanced.footer}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/30 text-xs text-amber-700 font-bold flex items-center gap-1.5">
                              ✨ Sử dụng Role Play + Ràng buộc chặt chẽ + Tư duy suy luận sâu sắc.
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Section II: Mô phỏng Thử nghiệm & Phân tích Kết quả */}
                <div className="mt-8 pt-8 border-t-2 border-white/20 w-full">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      II. Mô phỏng Thử nghiệm & Phân tích Kết quả
                    </span>
                  </div>

                  <p className="text-[#3E4450] text-sm sm:text-base font-semibold mb-6">
                    Khi bạn đưa 3 cấp độ Prompt này vào AI, đây là những gì thường xảy ra và lý do tại sao:
                  </p>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto w-full mb-10 rounded-2xl border border-white/40 shadow-xl bg-white/10 custom-scrollbar">
                    <table className="w-full text-sm text-left border-collapse min-w-[850px]">
                      <thead className="bg-[#3E4450]/15 text-[#3E4450] font-bold">
                        <tr>
                          <th className="border-b border-r border-white/30 p-4 text-center w-36">Cấp độ Prompt</th>
                          <th className="border-b border-r border-white/30 p-4 w-5/12">Đặc điểm của Kết quả (Output)</th>
                          <th className="border-b border-white/30 p-4 w-5/12">Phân tích lý do (Tại sao?)</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#3E4450] bg-white/5">
                        {/* Row 1: Cơ bản */}
                        <tr className="hover:bg-white/25 transition-colors border-b border-white/20">
                          <td className="border-r border-white/30 p-5 text-center font-black text-red-600 bg-red-500/5">
                            <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs inline-block">
                              Cơ bản
                            </span>
                          </td>
                          <td className="border-r border-white/30 p-5 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-2 font-medium">
                              <li>Ngắn, chung chung, đôi khi lạc đề.</li>
                              <li>Định dạng ngẫu nhiên (lúc thì gạch đầu dòng, lúc thì viết đoạn dài).</li>
                              <li>Văn phong máy móc.</li>
                            </ul>
                          </td>
                          <td className="p-5 leading-relaxed font-medium">
                            📌 AI phải "đoán" quá nhiều ý định của bạn (bạn muốn độ dài bao nhiêu? cho ai đọc?). Vì thiếu bối cảnh, AI chọn cách trả lời an toàn, trung bình nhất.
                          </td>
                        </tr>

                        {/* Row 2: Cải tiến */}
                        <tr className="hover:bg-white/25 transition-colors border-b border-white/20 bg-white/5">
                          <td className="border-r border-white/30 p-5 text-center font-black text-blue-600 bg-blue-500/5">
                            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs inline-block">
                              Cải tiến
                            </span>
                          </td>
                          <td className="border-r border-white/30 p-5 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-2 font-medium text-[#1e2e4e]">
                              <li>Khá tốt, dùng được ngay.</li>
                              <li>Cấu trúc rõ ràng hơn (VD: có đủ 4 đáp án, độ dài đúng 150 từ).</li>
                              <li>Thông tin trọng tâm hơn.</li>
                            </ul>
                          </td>
                          <td className="p-5 leading-relaxed font-medium">
                            📌 Bạn đã thiết lập giới hạn (<span className="italic">constraints</span>) rõ ràng (độ dài, định dạng, đối tượng cơ bản). AI không bị lan man và tập trung vào đúng yêu cầu cốt lõi.
                          </td>
                        </tr>

                        {/* Row 3: Nâng cao */}
                        <tr className="hover:bg-white/25 transition-colors bg-gradient-to-r from-amber-500/5 via-white/10 to-transparent">
                          <td className="border-r border-white/30 p-5 text-center font-black text-amber-600 bg-amber-500/5">
                            <span className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/20 text-xs inline-block animate-pulse">
                              Nâng cao
                            </span>
                          </td>
                          <td className="border-r border-white/30 p-5 leading-relaxed">
                            <ul className="list-disc pl-5 space-y-2 font-semibold text-[#3E4450]">
                              <li>Xuất sắc, mang tính cá nhân hóa cao.</li>
                              <li>Giọng văn tự nhiên, hấp dẫn (giả làm giáo viên, trợ lý).</li>
                              <li>Định dạng đẹp mắt, có chiều sâu (như phần "Giải thích" trong câu hỏi ôn tập).</li>
                            </ul>
                          </td>
                          <td className="p-5 leading-relaxed font-medium text-[#3E4450]/90">
                            📌 AI được kích hoạt các siêu tham số qua <span className="font-bold text-amber-700">Role Prompting</span> (định hình từ vựng/giọng điệu) và <span className="font-bold text-amber-700">Chain-of-Thought</span> (bắt AI tư duy từng bước). Các <span className="font-bold text-amber-700">Few-shot examples</span> (ví dụ mẫu) giúp AI bắt chước chính xác 100% định dạng bạn muốn.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards View */}
                  <div className="block md:hidden flex flex-col gap-6 mb-10">
                    {/* Card 1: Cơ bản */}
                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-700 text-xs font-bold">Cơ bản</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-2">Đặc điểm kết quả:</h4>
                        <ul className="list-disc pl-4 text-xs text-[#3E4450] space-y-1 font-semibold">
                          <li>Ngắn, chung chung, đôi khi lạc đề.</li>
                          <li>Định dạng ngẫu nhiên.</li>
                          <li>Văn phong máy móc.</li>
                        </ul>
                      </div>
                      <div className="pt-3 border-t border-red-500/10">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-1.5">Tại sao?</h4>
                        <p className="text-xs text-[#3E4450] font-medium leading-relaxed">
                          AI phải "đoán" quá nhiều ý định của bạn. Thiếu bối cảnh khiến AI chọn cách trả lời an toàn nhất.
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Cải tiến */}
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-700 text-xs font-bold">Cải tiến</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-2">Đặc điểm kết quả:</h4>
                        <ul className="list-disc pl-4 text-xs text-[#3E4450] space-y-1 font-semibold">
                          <li>Khá tốt, dùng được ngay.</li>
                          <li>Cấu trúc rõ ràng hơn, thông tin trọng tâm.</li>
                        </ul>
                      </div>
                      <div className="pt-3 border-t border-blue-500/10">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-1.5">Tại sao?</h4>
                        <p className="text-xs text-[#3E4450] font-medium leading-relaxed">
                          Thiết lập các giới hạn rõ ràng giúp AI tập trung vào đúng yêu cầu cốt lõi, không lan man.
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Nâng cao */}
                    <div className="bg-gradient-to-br from-amber-500/5 to-yellow-500/10 border-2 border-white rounded-2xl p-5 shadow-md">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 text-xs font-bold animate-pulse">Nâng cao</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-2">Đặc điểm kết quả:</h4>
                        <ul className="list-disc pl-4 text-xs text-[#3E4450] space-y-1 font-semibold">
                          <li>Xuất sắc, cá nhân hóa cực cao.</li>
                          <li>Văn phong tự nhiên, hấp dẫn, có chiều sâu.</li>
                        </ul>
                      </div>
                      <div className="pt-3 border-t border-amber-500/20">
                        <h4 className="text-xs font-bold text-[#3E4450] uppercase tracking-wider mb-1.5">Tại sao?</h4>
                        <p className="text-xs text-[#3E4450] font-medium leading-relaxed">
                          Nhờ Role Prompting, CoT (tư duy từng bước) và Few-shot (ví dụ mẫu) định hình đầu ra hoàn hảo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section III: 5 Nguyên tắc & Mẹo viết Prompt */}
                <div className="mt-8 pt-8 border-t-2 border-white/20 w-full">
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 w-fit">
                    <Sparkles className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-bold text-[#3E4450] uppercase tracking-wider">
                      III. 5 Nguyên tắc & Mẹo viết Prompt hiệu quả
                    </span>
                  </div>

                  <p className="text-[#3E4450] text-sm sm:text-base font-semibold mb-6">
                    Dựa trên phân tích trên, đây là "công thức" để bạn "hack" tư duy của các AI tạo sinh:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">
                    {principlesData.map((principle) => (
                      <motion.div
                        key={principle.id}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className={`relative overflow-hidden bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/30 flex flex-col justify-between shadow-xl transition-all duration-300 ${principle.colorClass}`}
                      >
                        {/* Glowing Background Accent */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

                        {/* Top Info */}
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 rounded-xl border ${principle.iconBg} flex items-center justify-center`}>
                              {renderPrincipleIcon(principle.iconName)}
                            </div>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${principle.badgeColor}`}>
                              {principle.id}
                            </span>
                          </div>

                          <h3 className="text-sm font-extrabold text-[#3E4450] mb-1 leading-tight">
                            {principle.title}
                          </h3>
                          <span className="text-[10px] font-bold text-[#3E4450]/60 block mb-3 uppercase tracking-wider">
                            ({principle.technique})
                          </span>

                          <p className="text-xs text-[#3E4450] leading-relaxed text-justify font-medium">
                            {principle.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
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
              <span className="text-[16px] md:text-[20px] font-bold text-[rgba(62,68,80,0.95)]">Bài 4</span>
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
