import HeadingSmall from '@/components/heading-small';
import { TablePagination } from '@/components/table-pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { TablePaginationLink, TenancyContract, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CirclePlus, FolderOpen } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Tenancy Contracts',
        href: route('tenancyContract.index'),
    },
];

export interface TenancyContractResponse {
    current_page: number;
    data: TenancyContract[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: TablePaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export default function ContractList({ tenancyContractData }: { tenancyContractData: TenancyContractResponse }) {
    console.log(tenancyContractData);
    const paginationData = {
        next_page_url: tenancyContractData.next_page_url,
        prev_page_url: tenancyContractData.prev_page_url,
        links: tenancyContractData.links,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tenancy Contracts" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <div className="mb-3">
                    <HeadingSmall title="Tenancy Contracts" description="List of all tenancy contracts." />
                </div>
                <div className="mb-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                        <span>Total Contracts:</span>
                        <span className="font-bold">{tenancyContractData.total}</span>
                    </div>
                    <Button asChild variant="outline">
                        <Link prefetch className="flex items-center gap-1 font-bold" href={route('tenancyContract.create')}>
                            <CirclePlus size={15} /> Create Contract
                        </Link>
                    </Button>
                </div>
                <Card>
                    <CardContent>
                        <Table className="text-xs">
                            <TableHeader className="dark:bg-accent bg-gray-200">
                                <TableRow>
                                    <TableHead>Tenant</TableHead>
                                    <TableHead>Contract ID</TableHead>
                                    <TableHead>Start Date</TableHead>
                                    <TableHead>End Date</TableHead>
                                    <TableHead>Unit</TableHead>
                                    <TableHead>Created Time</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tenancyContractData.data.length > 0 ? (
                                    tenancyContractData.data.map((tenancyContract, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="flex flex-col gap-1">
                                                <span className="font-bold">{tenancyContract.tenant.tenant_name}</span>
                                                <span>{tenancyContract.tenant.tenant_company_name}</span>
                                            </TableCell>
                                            <TableCell>{tenancyContract.unique_contract_no}</TableCell>
                                            <TableCell>{tenancyContract.start_date}</TableCell>
                                            <TableCell>{tenancyContract.end_date}</TableCell>
                                            <TableCell>
                                                <span>{tenancyContract.unit.unit_type.unit_name}</span>
                                                <br />
                                                <span>{tenancyContract.unit.unit_no}</span>
                                            </TableCell>
                                            <TableCell>{tenancyContract.created_at}</TableCell>
                                            <TableCell>
                                                {tenancyContract.contract_status === 1 ? (
                                                    <Badge variant="active">Active</Badge>
                                                ) : (
                                                    <Badge variant="destructive">Inactive</Badge>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Link
                                                    prefetch="hover"
                                                    href={route('tenancyContract.show', tenancyContract.unique_contract_no)}
                                                    className="flex items-center gap-1 transition duration-100 ease-in-out hover:scale-110 hover:underline"
                                                >
                                                    <FolderOpen size={15} /> View
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center text-sm">
                                            No units found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        {tenancyContractData.data.length > 0 && <TablePagination paginationData={paginationData} />}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
