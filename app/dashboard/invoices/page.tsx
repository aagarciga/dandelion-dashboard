import { fetchInvoicesPages } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts"
import { CreateInvoice } from "@/app/ui/invoices/buttons"
import Pagination from "@/app/ui/invoices/pagination";
import Table from "@/app/ui/invoices/table";
import Search from "@/app/ui/search"
import { InvoiceSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || ""
  const curentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchInvoicesPages(query)
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2x1`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + curentPage} fallback={<InvoiceSkeleton />}>
        <Table query={query} currentPage={curentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}