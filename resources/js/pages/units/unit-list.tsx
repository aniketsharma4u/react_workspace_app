import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { SectionCards } from '@/components/section-cards';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Units',
        href: '/units-list',
    },
];

export default function Unit_list() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Units List" />
            <div className="@container/main mb-10 flex h-full flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">
                        <ChartAreaInteractive />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
