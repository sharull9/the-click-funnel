import { cn } from "../lib/utils";

export const Button = ({ text, icon: Icon, className }) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 bg-[#131313] hover:bg-gray-800`,
        className
      )}
    >
      {Icon && <Icon size={18} />}
      <span className="inherit">{text}</span>
    </button>
  );
};

export const Link = ({ to, text, icon: Icon, className = "", target = "" }) => {
  return (
    <a
      href={to}
      target={target}
      rel="noopener noreferrer"
      className={cn(
        `flex items-center justify-center gap-2 px-6 py-3 rounded-lg duration-300 bg-blue-700 hover:bg-blue-600 text-white hover:text-white transition-all`,
        className
      )}
    >
      {Icon && <Icon size={18} />}
      <span className="inherit">{text}</span>
    </a>
  );
};
