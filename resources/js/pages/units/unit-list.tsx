import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Units',
        href: '/units-list',
    },
];

interface UnitType {
    unit_type_id: number;
    unit_name: string;
    unit_prefix: number;
    status: number;
    created_at: string;
    updated_at: string;
}

interface Unit {
    unit_id: number;
    unique_unit_id: string;
    unit_no: string;
    building_name: string;
    area: string;
    land_no: string;
    dm_no: string;
    dewa_premise_no: string;
    unit_subtype: string;
    floor_no: string;
    unit_size_sqm: string;
    unit_usage: string;
    makani_no: string;
    unit_type: UnitType;
    address: string;
    unit_min_amount: string;
    unit_max_amount: string;
    status: number;
    created_at: string;
    updated_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedUnitsResponse {
    current_page: number;
    data: Unit[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export default function UnitList({ unitsData }: { unitsData: PaginatedUnitsResponse }) {
    // console.log('unitsData', unitsData);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Units" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
