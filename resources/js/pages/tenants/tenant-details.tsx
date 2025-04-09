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
                        <div className="flow-root">
                            <dl className="-my-3 divide-y divide-gray-200 text-sm *:even:bg-gray-50 dark:divide-gray-700 dark:*:even:bg-gray-800">
                                <DetailsList heading="Tenant Name" value={getTenantData.tenant_name} />
                            </dl>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
