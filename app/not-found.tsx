import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream-dark">
      <h1 className="mb-4 text-6xl font-bold text-navy">404</h1>
      <p className="mb-8 text-lg text-headline">Page not found</p>
      <Link
        href="/"
        className="rounded-lg bg-navy px-8 py-4 text-lg font-medium text-white transition hover:bg-navy-light"
      >
        Go Home
      </Link>
    </main>
  );
}
