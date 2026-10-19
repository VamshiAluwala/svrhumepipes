import Link from "next/link";
import { Container } from "./Container";
import { ChevronIcon } from "./Icons";

type Item = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-ivory-100 border-b border-ivory-300">
      <Container>
        <ol className="flex flex-nowrap overflow-x-auto whitespace-nowrap items-center gap-2 py-3 text-sm text-steel-600">
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
                {!isLast && <ChevronIcon className="h-3.5 w-3.5 text-steel-400" />}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
