import MapPinIcon from '@heroicons/react/20/solid/MapPinIcon';
import { cx } from 'ui/lib';

import type { Region } from '../types';

interface Props {
  isActive: boolean;
  onClick: () => void;
  region: Region;
}

export function RegionCard({ isActive, region, onClick }: Props) {
  return (
    <button
      type="button"
      disabled={!region.available}
      onClick={onClick}
      className={cx([
        'disabled:text-muted-foreground flex w-full cursor-pointer items-center gap-4 rounded-md border p-4 disabled:cursor-not-allowed disabled:bg-neutral-100 dark:border-neutral-700 dark:disabled:bg-neutral-800',
        isActive ? 'border-sky-500 ring-1 ring-sky-500' : '',
      ])}
    >
      <MapPinIcon className="text-muted-foreground h-7 w-7 shrink-0" />
      <div className="font-medium">{region.name}</div>
    </button>
  );
}
