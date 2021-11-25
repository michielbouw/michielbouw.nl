const defaultContainerClassName = 'container mx-auto w-full flex';

function Container({ children, className, ...props }) {
  return (
    <div
      className={
        className
          ? `${defaultContainerClassName} ${className}`
          : defaultContainerClassName
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
