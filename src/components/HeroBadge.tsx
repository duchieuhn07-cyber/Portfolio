import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-6 -mt-4 w-fit"
    >
      <Sparkles className="w-5 h-5 text-[rgba(62,68,80,0.8)]" />
      <span className="text-base font-medium text-[rgba(62,68,80,0.9)]">Trần Đức Hiếu - 25020933</span>
    </motion.div>
  );
}
