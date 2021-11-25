function Quote({ children }) {
  return (
    <p className="text:l sm:text-xl md:text-3xl lg:text-5xl font-light sm:font-medium tracking-wide sm:tracking-wider text-primary text-right text-opacity-75 sm:text-opacity-90 md:text-opacity-95">
      {children}
    </p>
  );
}

export default Quote;
