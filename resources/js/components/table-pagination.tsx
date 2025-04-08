import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';

interface PaginationLink {
    url: string;
    label: string;
    active: boolean;
}

interface paginationDataType {
    links: PaginationLink[];
    next_page_url: string | null;
    prev_page_url: string | null;
}

export function TablePagination({ paginationData }: { paginationData: paginationDataType }) {
    return (
        <Pagination className="mt-4 justify-end">
            <PaginationContent>
                {paginationData.prev_page_url && (
                    <PaginationItem>
                        <PaginationPrevious href={paginationData.prev_page_url} />
                    </PaginationItem>
                )}

                {paginationData.links.slice(1, -1).map((link, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink isActive={link.active} href={link.url}>
                            {link.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem> */}
                {paginationData.next_page_url && (
                    <PaginationItem>
                        <PaginationNext href={paginationData.next_page_url} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}
