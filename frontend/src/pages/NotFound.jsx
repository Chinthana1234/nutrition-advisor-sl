import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <p className="text-sm uppercase tracking-wide text-slate-300">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-slate-300">
        The nutrition plan you&apos;re looking for hasn&apos;t been cooked yet.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-white px-6 py-2 font-medium text-slate-900"
      >
        Go home
      </Link>
    </section>
  );
};

export default NotFound;

