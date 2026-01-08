
import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 glow-on-hover flex items-center justify-center text-center";
  
  const variants = {
    primary: "bg-[#D4AF37] text-white hover:bg-[#C5A028]",
    secondary: "bg-[#4B0082] text-white hover:bg-[#3A0066]",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
