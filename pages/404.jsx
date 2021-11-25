import Container from '../components/Container';

export default function Home() {
  return (
    <Container className="text-center">
      <h1 className="text-6xl font-bold text-primary text-opacity-90">
        404{' '}
        <span className="text-4xl font-light text-secondary text-opacity-90">
          |
        </span>{' '}
        Not found
      </h1>
    </Container>
  );
}
