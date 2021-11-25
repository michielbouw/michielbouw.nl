import Container from '../components/Container';
import Nav from '../components/Nav';

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Nav />

      <main className="flex flex-1 flex-col items-center justify-center w-full">
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-background">
        <Container className="z-20">
          <p className="text-xs font-light text-gray-600">
            Michiel Bouw &copy; {new Date().getFullYear()}
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
