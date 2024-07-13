'use client';
import type { Route } from 'next'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    params.set('page', '1')
    /**
     * Next.js will generate a link definition in .next/types that contains information 
     * about all existing routes in your application, which TypeScript can then use to 
     * provide feedback in your editor about invalid links.
     * 
     * Currently, experimental support includes any string literal, including dynamic segments. 
     * For non-literal strings, you currently need to manually cast the href with as Route:
     * 
     * import type { Route } from 'next';
     */
    replace(`${pathname}?${params.toString()}` as Route)
    console.log(term)
  }, 300)


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-orange-600 peer-focus:text-orange-500" />
    </div>
  );
}
