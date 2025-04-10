import DetailsList from '@/components/details-list';
import HeadingSmall from '@/components/heading-small';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { TenantType, type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { FileText } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Manage Tenants',
        href: route('tenants.index'),
    },
    {
        title: 'View Tenant Details',
        href: '',
    },
];

export default function TenantDetails({ getTenantData }: { getTenantData: TenantType }) {
    const { data, setData, post } = useForm({
        tenant_status: getTenantData.status,
    });
    const handleTenantStatusChange = (value: string) => {
        setData('tenant_status', Number(value));
        const updateTenantStatus = {
            value: Number(value),
            tableName: 'tenants',
            fieldName: 'status',
            whereCondition: {
                unique_tenant_id: getTenantData.unique_tenant_id,
            },
        };
        // console.log(updateTenantStatus);
        post(route('updateStatus', updateTenantStatus), {
            preserveScroll: true,
            onSuccess: () => {
                router.flush(route('tenant.show', { unique_tenant_id: getTenantData.unique_tenant_id }), {
                    method: 'get',
                });
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Tenants" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <div className="mb-3 flex items-center justify-between text-xs">
                    <HeadingSmall title={getTenantData.tenant_name} description={getTenantData.tenant_company_name} />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs">Status:</span>
                            <Select defaultValue={data.tenant_status.toString()} onValueChange={handleTenantStatusChange}>
                                <SelectTrigger
                                    className={`${data.tenant_status === 1 ? 'bg-green-600 text-white' : 'bg-red-600 text-white'} cursor-pointer`}
                                >
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="1">Active</SelectItem>
                                        <SelectItem value="0">Inactive</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardContent>
                        <div className="grid grid-cols-2">
                            <dl className="dark:divide-accent dark:*:even:bg-accent -my-3 divide-y divide-gray-200 text-xs *:even:bg-gray-100">
                                <DetailsList heading="Tenent ID" value={getTenantData.unique_tenant_id} />
                                <DetailsList heading="Tenant Name" value={getTenantData.tenant_name} />
                                <DetailsList heading="Company Name" value={getTenantData.tenant_company_name} />
                                <DetailsList heading="License No." value={getTenantData.license_no} />
                                <DetailsList heading="License Expiry Date" value={getTenantData.license_expiry} />
                                <DetailsList heading="License Issuer" value={getTenantData.license_issuer} />
                            </dl>
                            <dl className="dark:divide-accent dark:*:even:bg-accent -my-3 divide-y divide-gray-200 text-xs *:even:bg-gray-100">
                                <DetailsList heading="Email Address" value={getTenantData.email} />
                                <DetailsList heading="Tel. No" value={getTenantData.tel_no} />
                                <DetailsList heading="Mobile No." value={getTenantData.mobile_no} />
                                <DetailsList heading="Fax No." value={getTenantData.fax_no} />
                                <DetailsList heading="P.O. Box" value={getTenantData.po_box} />
                                <DetailsList heading="Address" value={getTenantData.address} />
                            </dl>
                        </div>

                        <Table className="mt-10 text-xs">
                            <TableHeader className="dark:bg-accent bg-gray-200">
                                <TableRow>
                                    <TableHead>Documents</TableHead>
                                    <TableHead>Number</TableHead>
                                    <TableHead>Expiry</TableHead>
                                    <TableHead>Link</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Emirates ID</TableCell>
                                    <TableCell>{getTenantData.tenant_emirates_id_no}</TableCell>
                                    <TableCell>{getTenantData.tenant_emirates_id_expiry_date}</TableCell>
                                    <TableCell>
                                        <a
                                            className="flex items-center gap-1 hover:underline"
                                            href={`/storage/uploads/${getTenantData.unique_tenant_id}/${getTenantData.tenant_emirates_id_file}`}
                                            target="_blank"
                                        >
                                            <FileText size={14} /> {getTenantData.tenant_emirates_id_file}
                                        </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Passport</TableCell>
                                    <TableCell>{getTenantData.tenant_passport_no}</TableCell>
                                    <TableCell>{getTenantData.tenant_passport_expiry_date}</TableCell>
                                    <TableCell>
                                        <a
                                            className="flex items-center gap-1 hover:underline"
                                            href={`/storage/uploads/${getTenantData.unique_tenant_id}/${getTenantData.tenant_passport_file}`}
                                            target="_blank"
                                        >
                                            <FileText size={14} /> {getTenantData.tenant_passport_file}
                                        </a>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Trade License</TableCell>
                                    <TableCell>{getTenantData.license_no}</TableCell>
                                    <TableCell>{getTenantData.license_expiry}</TableCell>
                                    <TableCell>
                                        <a
                                            className="flex items-center gap-1 hover:underline"
                                            href={`/storage/uploads/${getTenantData.unique_tenant_id}/${getTenantData.tenant_trade_license_file}`}
                                            target="_blank"
                                        >
                                            <FileText size={14} /> {getTenantData.tenant_trade_license_file}
                                        </a>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <div className="text-right">
                    <span className="text-xs">Created by: {getTenantData.created_user?.name} | </span>
                    <span className="text-xs">Created at: {getTenantData.created_at}</span>
                </div>
            </div>
        </AppLayout>
    );
}
