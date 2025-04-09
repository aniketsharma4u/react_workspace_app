import DetailsList from '@/components/details-list';
import Heading from '@/components/heading';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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

type TenantType = {
    tenant_id: number;
    unique_tenant_id: string;
    license_no: string;
    license_expiry: string; // You can change this to `Date` if you're parsing dates
    tenant_name: string;
    tenant_company_name: string;
    license_issuer: string;
    tel_no: string;
    fax_no: string;
    email: string;
    po_box: string;
    address: string;
    mobile_no: string;
    tenant_emirates_id_no: string;
    tenant_emirates_id_expiry_date: string; // Or `Date`
    tenant_passport_no: string;
    tenant_passport_expiry_date: string; // Or `Date`
    tenant_emirates_id_file: string;
    tenant_passport_file: string;
    tenant_trade_license_file: string;
    status: number;
    verify_status: number;
    created_at: string; // Or `Date`
    updated_at: string; // Or `Date`
    created_by: number;
    created_user: {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        created_at: string; // Or `Date`
        updated_at: string; // Or `Date`
        status: number;
        created_by: number;
    };
};

export default function TenantDetails({ getTenantData }: { getTenantData: TenantType }) {
    console.log(getTenantData);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Tenants" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <Heading title={getTenantData.tenant_name} description={getTenantData.tenant_company_name} />
                <Card>
                    <CardContent>
                        <div className="grid grid-cols-2">
                            <dl className="-my-3 divide-y divide-gray-200 text-xs *:even:bg-gray-50 dark:divide-gray-800 dark:*:even:bg-gray-900">
                                <DetailsList heading="Tenent ID" value={getTenantData.unique_tenant_id} />
                                <DetailsList heading="Tenant Name" value={getTenantData.tenant_name} />
                                <DetailsList heading="Company Name" value={getTenantData.tenant_company_name} />
                                <DetailsList heading="License No." value={getTenantData.license_no} />
                                <DetailsList heading="License Expiry Date" value={getTenantData.license_expiry} />
                                <DetailsList heading="License Issuer" value={getTenantData.license_issuer} />
                            </dl>
                            <dl className="-my-3 divide-y divide-gray-200 text-xs *:even:bg-gray-50 dark:divide-gray-800 dark:*:even:bg-gray-900">
                                <DetailsList heading="Email Address" value={getTenantData.email} />
                                <DetailsList heading="Tel. No" value={getTenantData.tel_no} />
                                <DetailsList heading="Mobile No." value={getTenantData.mobile_no} />
                                <DetailsList heading="Fax No." value={getTenantData.fax_no} />
                                <DetailsList heading="P.O. Box" value={getTenantData.po_box} />
                                <DetailsList heading="Address" value={getTenantData.address} />
                            </dl>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
