import { TenancyContract, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { TenantCard } from '@/pages/tenants/tenant-details';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Tenancy Contracts',
        href: route('tenancyContract.index'),
    },
    {
        title: 'View Contracts',
        href: '',
    },
];

export default function ViewContract({ tenancyContractData }: { tenancyContractData: TenancyContract }) {
    console.log(tenancyContractData);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tenancy Contract" />
            <TenantCard getTenantData={tenancyContractData.tenant} />
        </AppLayout>
    );
}
