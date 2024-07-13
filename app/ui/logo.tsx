import { AtSymbolIcon } from '@heroicons/react/24/solid';
import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <AtSymbolIcon className="h-12 w-12" />
      <p className="text-[44px]">Dandelion</p>
    </div>
  );
}
