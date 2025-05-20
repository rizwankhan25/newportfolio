export default function Button({ 
  href, 
  children, 
  className = '', 
  target,
  rel,
  onClick,
  type = 'button'
}) {
  const buttonClasses = `
   inline-flex items-center justify-center gap-2
  px-6 py-3 border-2 border-blue-500 text-white-500
  font-semibold rounded-lg hover:bg-blue-500/10
  transition-all duration-300 transform hover:scale-105
  shadow
    ${className}
  `;

  const buttonContent = (
    <>
      {children}
      {href && (
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
} 