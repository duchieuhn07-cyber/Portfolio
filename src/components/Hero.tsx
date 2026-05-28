import Navbar from './Navbar';
import HeroBadge from './HeroBadge';
import BottomLeftCard from './BottomLeftCard';
import BottomRightCorner from './BottomRightCorner';
import { motion } from 'motion/react';

export default function Hero({ onNavigate, onNavigateSummary }: { onNavigate?: () => void, onNavigateSummary?: () => void }) {
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
          <Navbar onNavigate={onNavigate} onNavigateSummary={onNavigateSummary} />
          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-nunito font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3E4450] mb-4 tracking-tight leading-[1.1] text-center"
            >
              Nhập môn công nghệ số và <br /> ứng dụng trí tuệ nhân tạo
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 px-8 py-5 rounded-[1.5rem] bg-white/30 backdrop-blur-xl max-w-3xl mx-auto flex flex-col gap-3"
            >
              <p className="text-base md:text-lg text-[#3E4450] leading-relaxed font-medium text-left">
                Xin chào thầy cô và các bạn, em tên là Trần Đức Hiếu, sinh viên chuyên ngành Vật lý Kỹ thuật (MSSV: 25020933). Hôm nay em xin được phép trình bày portfolio của mình.
              </p>
              <p className="text-base md:text-lg text-[#3E4450] leading-relaxed font-medium text-left">
                Bằng một chút nền tảng tư duy logic từ môn vật lý cùng với các bài giảng của bộ môn đã giúp em tiếp cận công nghệ số theo hướng phân tích và vận dụng thực tiễn được vào đời sống hằng ngày. Qua đó em làm dự án portfolio này để có thể lưu lại quá trình học tập và các kỹ năng số đã xây dựng được khi học bộ môn <strong>"Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo"</strong>.
              </p>
            </motion.div>
          </div>
          <BottomLeftCard />
          <BottomRightCorner onClick={onNavigate} />
        </div>
      </section>
    </div>
  );
}
