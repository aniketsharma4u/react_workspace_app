import { TenancyContract, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            <Head title="View Tenants" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <Tabs defaultValue="tenant">
                    <TabsList className="flex items-center gap-3">
                        <TabsTrigger className="data-[state=active]:bg-sidebar-accent px-6 py-4 text-xs" value="tenant">
                            Contract Details
                        </TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-sidebar-accent px-6 py-4 text-xs" value="payments">
                            Payment Details
                        </TabsTrigger>
                        <TabsTrigger className="data-[state=active]:bg-sidebar-accent px-6 py-4 text-xs" value="generate_pdf">
                            Generate Contact PDF
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="tenant">
                        <TenantCard getTenantData={tenancyContractData.tenant} />
                    </TabsContent>
                    <TabsContent value="payments">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
