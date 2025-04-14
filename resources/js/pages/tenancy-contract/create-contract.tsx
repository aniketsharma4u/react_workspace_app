import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, TenantType, Unit, UnitType } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

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
        title: 'Create Contract',
        href: route('tenancyContract.create'),
    },
];

type AddUnitForm = {
    unit_type: number;
    unit_no: string;
    floor_no: string;
    unit_size_sqm: number | string;
    unit_min_amount: number | string;
    unit_max_amount: number | string;
};

export default function CreateContract({ tenantsData, unitTypes }: { tenantsData: TenantType[]; unitTypes: UnitType[] }) {
    const { data, setData, get, post, processing, errors, reset } = useForm<Required<AddUnitForm>>({
        unit_type: 0,
        unit_no: '',
        floor_no: 4,
        unit_size_sqm: '',
        unit_min_amount: '',
        unit_max_amount: '',
    });

    const [unitNumbers, setUnitNumbers] = useState<Unit[]>([]);

    const getUnitsNumbers = async (unitTypeId: string) => {
        try {
            const response = await axios.get(route('getUnitsByType'), {
                params: { unitTypeId },
            });
            setData('floor_no', '');
            setData('unit_size_sqm', '');
            setData('unit_min_amount', '');
            setData('unit_max_amount', '');
            if (response.data.length > 0) {
                setUnitNumbers(response.data);
            } else {
                setUnitNumbers([]);
            }
        } catch (error) {
            console.error('Error fetching unit numbers:', error);
        }
    };

    const fillUnitdetails = (value: string) => {
        const selectedUnit = unitNumbers.find((unit) => unit.unique_unit_id === value);
        if (selectedUnit) {
            setData('floor_no', selectedUnit.floor_no);
            setData('unit_size_sqm', selectedUnit.unit_size_sqm);
            setData('unit_min_amount', selectedUnit.unit_min_amount);
            setData('unit_max_amount', selectedUnit.unit_max_amount);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Contract" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <div className="mb-3">
                    <HeadingSmall title="Create Contract" description="Create a tenancy contract." />
                </div>
                <Card>
                    <CardContent>
                        <form className="grid grid-cols-2 items-start gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="unit_type">Unit Type *</Label>
                                <Select
                                    onValueChange={(value) => {
                                        setData('unit_type', Number(value));
                                        getUnitsNumbers(value); // Fetch unit numbers when unit type changes
                                    }}
                                >
                                    <SelectTrigger className="mt-1 w-full">
                                        <SelectValue placeholder="Select Unit Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {unitTypes.map((unitType, index) => (
                                                <SelectItem key={index} value={unitType.unit_type_id.toString()}>
                                                    {unitType.unit_name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.unit_type} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_no">Unit No. *</Label>
                                <Select
                                    onValueChange={(value) => {
                                        setData('unit_no', value);
                                        fillUnitdetails(value);
                                    }}
                                >
                                    <SelectTrigger className="mt-1 w-full">
                                        <SelectValue placeholder="Select Unit No." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {unitNumbers.map((unitNo, index) => (
                                                <SelectItem key={index} value={unitNo.unique_unit_id}>
                                                    {unitNo.unit_no}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.unit_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="floor_no">Floor No. *</Label>
                                <Input
                                    id="floor_no"
                                    type="text"
                                    className="bg-accent mt-1 block w-full"
                                    value={data.floor_no}
                                    readOnly
                                    placeholder="4"
                                />
                                <InputError message={errors.floor_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_size_sqm">Unit Size(Sq.m) *</Label>
                                <Input
                                    id="unit_size_sqm"
                                    type="text"
                                    className="bg-accent mt-1 block w-full"
                                    value={data.unit_size_sqm}
                                    readOnly
                                    placeholder="200.1"
                                />
                                <InputError message={errors.unit_size_sqm} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_min_amount">Minimum Amount. *</Label>
                                <Input
                                    id="unit_min_amount"
                                    type="text"
                                    className="bg-accent mt-1 block w-full"
                                    value={data.unit_min_amount}
                                    readOnly
                                    placeholder="5000.00"
                                />
                                <InputError message={errors.unit_min_amount} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_max_amount">Maximum Amount. *</Label>
                                <Input
                                    id="unit_max_amount"
                                    type="text"
                                    className="bg-accent mt-1 block w-full"
                                    value={data.unit_max_amount}
                                    readOnly
                                    placeholder="8000.00"
                                />
                                <InputError message={errors.unit_max_amount} />
                            </div>

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Submit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
