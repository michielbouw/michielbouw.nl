function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>Nav</div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        Michiel Bouw &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Layout;
