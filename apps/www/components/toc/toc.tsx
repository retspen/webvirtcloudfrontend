import { TocNavItem } from './toc-nav-item';
import type { Heading } from './types';

export function Toc({ headings }: { headings: Heading[] }) {
  return (
    <nav>
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        On this page
      </h5>
      <ul className="text-sm leading-6">
        {headings.map((heading) => (
          <TocNavItem key={heading.slug} heading={heading} />
        ))}
      </ul>
    </nav>
  );
}
