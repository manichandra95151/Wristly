const Button = ({ children, className, variant = "solid", size = "md", ...props }) => {
    const baseStyles = "rounded p-2 flex items-center";
    const variantStyles = variant === "outline" ? "border border-gray-300" : "bg-blue-600 text-white";
    const sizeStyles = size === "icon" ? "p-1" : "p-2";
  
    return (
      <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  