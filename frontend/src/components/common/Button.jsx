import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C85A32]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-[#C85A32] hover:bg-[#E06B41] text-white shadow-lg shadow-[#C85A32]/25 hover:shadow-[#C85A32]/40 border border-[#C85A32]/30',
    secondary: 'bg-[#F5F2EB] hover:bg-white text-[#0E0F12] shadow-md hover:shadow-xl font-semibold',
    outline: 'border border-white/20 hover:border-white/60 bg-transparent text-[#E5E2DC] hover:bg-white/5',
    gold: 'bg-[#D4A359] hover:bg-[#E5B869] text-[#0E0F12] font-semibold shadow-lg shadow-[#D4A359]/20',
    glass: 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white shadow-lg',
    ghost: 'bg-transparent text-[#E5E2DC] hover:text-white hover:bg-white/5'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </motion.button>
  );
}
