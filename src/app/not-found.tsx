import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 bg-white">
      <Container className="max-w-xl text-center">
        <div className="text-8xl font-display font-bold text-brand-600">404</div>
        <h1 className="mt-4 text-3xl font-bold text-steel-900">Page not found</h1>
        <p className="mt-3 text-steel-700">
          The page you're looking for doesn't exist or has been moved. Head back home
          or browse our products.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link href="/" className="rounded-md bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 font-semibold">
            Go home
          </Link>
          <Link href="/products" className="rounded-md border border-steel-300 hover:border-brand-600 text-steel-800 px-5 py-3 font-semibold">
            View products
          </Link>
        </div>
      </Container>
    </section>
  );
}
