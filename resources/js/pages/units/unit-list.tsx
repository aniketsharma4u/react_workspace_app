import Heading from '@/components/heading';
import { TablePagination } from '@/components/table-pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PaginationLink } from '@/components/ui/pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CirclePlus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Manage Units',
        href: route('units.index'),
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
    url: string;
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
    const paginationData = {
        next_page_url: unitsData.next_page_url,
        prev_page_url: unitsData.prev_page_url,
        links: unitsData.links,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Units" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <Heading title="Units" description="List of all units." />
                <div className="mb-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                        <span>Total Units:</span>
                        <span className="font-bold">{unitsData.total}</span>
                    </div>
                    <Button asChild variant="outline">
                        <Link className="flex items-center gap-1 font-bold" href={route('unit.create')}>
                            <CirclePlus size={15} /> Add Unit
                        </Link>
                    </Button>
                </div>
                <Card>
                    <CardContent>
                        <Table className="text-xs">
                            <TableHeader className="dark:bg-accent bg-gray-200">
                                <TableRow>
                                    <TableHead>Unit Type</TableHead>
                                    <TableHead>Unit No.</TableHead>
                                    <TableHead>Floor No.</TableHead>
                                    <TableHead>Unit Size(Sq.m)</TableHead>
                                    <TableHead>Min Amount</TableHead>
                                    <TableHead>Max Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {unitsData.data.length > 0 ? (
                                    unitsData.data.map((unit, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{unit.unit_type.unit_name}</TableCell>
                                            <TableCell>{unit.unit_no}</TableCell>
                                            <TableCell>{unit.floor_no}</TableCell>
                                            <TableCell>{unit.unit_size_sqm}</TableCell>
                                            <TableCell>{unit.unit_min_amount}</TableCell>
                                            <TableCell>{unit.unit_max_amount}</TableCell>
                                            <TableCell>{unit.status === 1 ? <Badge className='text-xs bg-green-700'>Available</Badge> : <Badge className='text-xs bg-red-700'>Booked</Badge>}</TableCell>
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
                        <TablePagination paginationData={paginationData} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
