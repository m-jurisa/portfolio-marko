const Button = ({ name, isBeam = false, containerClass = '', variant = 'secondary' }) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button className={`btn ${variantClass} ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
