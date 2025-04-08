import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

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
        title: 'Create Tenants',
        href: route('tenant.create'),
    },
];

export default function CreateTenant() {
    const { data, setData, post, processing, errors, reset } = useForm({
        license_no: '',
        license_expiry: '',
        tenant_name: '',
        tenant_company_name: '',
        license_issuer: '',
        tel_no: '',
        fax_no: '',
        email: '',
        po_box: '',
        address: '',
        mobile_no: '',
        tenant_emirates_id_no: '',
        tenant_emirates_id_expiry_date: '',
        tenant_passport_no: '',
        tenant_passport_expiry_date: '',
        tenant_emirates_id_file: '',
        tenant_passport_file: '',
        tenant_trade_license_file: '',
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Tenant" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <Heading title="Add Tenant" description="Add a tenant details." />
                <Card>
                    <CardContent>
                        <form className="grid grid-cols-2 items-start gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="tenant_company_name">Company Name *</Label>
                                <Input
                                    id="tenant_company_name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.tenant_company_name}
                                    onChange={(e) => setData('tenant_company_name', e.target.value)}
                                    required
                                    placeholder="More Ideas General Trading LLC"
                                />
                                <InputError message={errors.tenant_company_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="tenant_name">Tenant Name *</Label>
                                <Input
                                    id="tenant_name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.tenant_name}
                                    onChange={(e) => setData('tenant_name', e.target.value)}
                                    required
                                    placeholder="Aniket Sharma"
                                />
                                <InputError message={errors.tenant_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="license_no">License No. *</Label>
                                <Input
                                    id="license_no"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.license_no}
                                    onChange={(e) => setData('license_no', e.target.value)}
                                    required
                                    placeholder="013133"
                                />
                                <InputError message={errors.license_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="license_expiry">License Expiry Date *</Label>
                                <Input
                                    id="license_expiry"
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.license_expiry}
                                    onChange={(e) => setData('license_expiry', e.target.value)}
                                    required
                                    placeholder="013133"
                                />
                                <InputError message={errors.license_expiry} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="license_issuer">License Issuer. *</Label>
                                <Input
                                    id="license_issuer"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.license_issuer}
                                    onChange={(e) => setData('license_issuer', e.target.value)}
                                    required
                                    placeholder="Dubai Economic Department"
                                />
                                <InputError message={errors.license_issuer} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="po_box">P.O. Box *</Label>
                                <Input
                                    id="po_box"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.po_box}
                                    onChange={(e) => setData('po_box', e.target.value)}
                                    required
                                    placeholder="123456"
                                />
                                <InputError message={errors.po_box} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    placeholder="ceo@test.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="tel_no">Tel. No. *</Label>
                                <Input
                                    id="tel_no"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.tel_no}
                                    onChange={(e) => setData('tel_no', e.target.value)}
                                    required
                                    placeholder="04-1234567"
                                />
                                <InputError message={errors.tel_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="mobile_no">Mobile No. *</Label>
                                <Input
                                    id="mobile_no"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.mobile_no}
                                    onChange={(e) => setData('mobile_no', e.target.value)}
                                    required
                                    placeholder="0521234567"
                                />
                                <InputError message={errors.mobile_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="fax_no">Fax No. *</Label>
                                <Input
                                    id="fax_no"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.fax_no}
                                    onChange={(e) => setData('fax_no', e.target.value)}
                                    required
                                    placeholder="0521234567"
                                />
                                <InputError message={errors.fax_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="address">Address *</Label>
                                <Input
                                    id="address"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    required
                                    placeholder="SBC Oud Metha, Dubai, UAE"
                                />
                                <InputError message={errors.address} />
                            </div>

                            

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Add Tenant</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
