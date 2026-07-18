import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
  icon: LucideIcon;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  icon: Icon,
  description = "We're crafting something special for you. This module is currently under development and will be available in the next release.",
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 py-12 relative overflow-hidden select-none">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center relative"
      >
        {/* Animated Icon Ring */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 mb-6"
        >
          <Icon className="w-10 h-10" />
          
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-violet-500/30 scale-110 animate-ping" style={{ animationDuration: '2s' }} />
        </motion.div>

        {/* Feature Tag */}
        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-violet-600 bg-violet-50 border border-violet-100">
          On The Roadmap
        </span>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 text-center">
          {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Coming Soon</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 text-center leading-relaxed">
          {description}
        </p>

        {/* Checklist of upcoming features */}
        <div className="w-full mt-8 bg-gray-50/50 border border-gray-100/50 rounded-2xl p-5 space-y-3.5">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">What's in the works:</h3>
          <div className="space-y-2.5">
            {[
              "Streamlined and responsive workflows",
              "Advanced reporting and data insights",
              "Seamless automation and notification system"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-8 w-full group bg-gray-900 hover:bg-black text-white text-sm font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-gray-900/10 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Dashboard
        </button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
