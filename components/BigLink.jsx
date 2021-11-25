function BigLink({ url, title, children }) {
  return (
    <a
      href={url}
      target="_blank"
      title={title}
      className="text-2xl uppercase font-bold tracking-tighter text-primary text-opacity-90 hover:text-opacity-100 mb-8"
    >
      {children}
    </a>
  );
}

export default BigLink;
