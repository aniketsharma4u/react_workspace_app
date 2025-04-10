import { TablePagination } from '@/components/table-pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { TablePaginationLink, TenantType, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CirclePlus, FolderOpen } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Manage Tenants',
        href: route('tenants.index'),
    },
];

interface TenantsResponse {
    current_page: number;
    data: TenantType[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: TablePaginationLink[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export default function TenantList({ tenantsData }: { tenantsData: TenantsResponse }) {
    // console.log(tenantsData);
    const paginationData = {
        next_page_url: tenantsData.next_page_url,
        prev_page_url: tenantsData.prev_page_url,
        links: tenantsData.links,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Tenants" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <div className="mb-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                        <span>Total Tenants:</span>
                        <span className="font-bold">{tenantsData.total}</span>
                    </div>
                    <Button asChild variant="outline">
                        <Link prefetch className="flex items-center gap-1 font-bold" href={route('tenant.create')}>
                            <CirclePlus size={15} /> Add Tenant
                        </Link>
                    </Button>
                </div>
                <Card>
                    <CardContent>
                        <Table className="text-xs">
                            <TableHeader className="dark:bg-accent bg-gray-200">
                                <TableRow>
                                    <TableHead>Tenant</TableHead>
                                    <TableHead>Tenant ID</TableHead>
                                    <TableHead>License No.</TableHead>
                                    <TableHead>License Expiry Date</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Tel. No.</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tenantsData.data.length > 0 ? (
                                    tenantsData.data.map((tenant, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <span className="font-bold">{tenant.tenant_company_name}</span>
                                                <br />
                                                <span>{tenant.tenant_name}</span>
                                            </TableCell>
                                            <TableCell>{tenant.unique_tenant_id}</TableCell>
                                            <TableCell>{tenant.license_no}</TableCell>
                                            <TableCell>{tenant.license_expiry}</TableCell>
                                            <TableCell>{tenant.email}</TableCell>
                                            <TableCell>{tenant.tel_no}</TableCell>
                                            <TableCell>
                                                {tenant.status === 1 ? (
                                                    <Badge variant="active">Active</Badge>
                                                ) : (
                                                    <Badge variant="destructive">Inactive</Badge>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Link
                                                    prefetch="hover"
                                                    href={route('tenant.show', tenant.unique_tenant_id)}
                                                    className="flex items-center gap-1 hover:underline"
                                                >
                                                    <FolderOpen size={15} /> View
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={8} className="text-center text-sm">
                                            No tenants found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination paginationData={paginationData} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
