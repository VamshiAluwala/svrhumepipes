import Link from "next/link";
import { Container } from "./Container";

type Item = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-ivory-100 border-b border-ivory-300">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 py-3 text-xs uppercase tracking-widest text-steel-700">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-brand-700">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-brand-700 transition">
                    {item.name}
                  </Link>
                )}
                {!isLast && <span className="text-brand-500">◆</span>}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
