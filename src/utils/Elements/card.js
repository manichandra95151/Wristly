const Card = ({ children, className }) => {
    return (
      <div className={`overflow-hidden bg-white shadow rounded-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  