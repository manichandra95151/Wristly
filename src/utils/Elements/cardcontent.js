const CardContent = ({ children, className }) => {
    return (
      <div className={`flex items-center p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default CardContent;
  