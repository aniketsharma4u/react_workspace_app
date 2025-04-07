import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Manage Units',
        href: route('units.index'),
    },
    {
        title: 'Add Units',
        href: route('unit.create'),
    },
];

type AddUnitForm = {
    unit_type: number;
    unit_no: string;
    floor_no: number;
    unit_size_sqm: number | string;
    unit_min_amount: number | string;
    unit_max_amount: number | string;
};

type UnitType = {
    unit_type_id: number;
    unit_name: string;
    unit_prefix: string;
};

export default function CreateUnit({ unitTypes }: { unitTypes: UnitType[] }) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<AddUnitForm>>({
        unit_type: 0,
        unit_no: '',
        floor_no: 4,
        unit_size_sqm: '',
        unit_min_amount: '',
        unit_max_amount: '',
    });

    const [unitPrefix, setUnitPrefix] = useState(''); // State to store the prefix

    const handleUnitTypeChange = (value: string) => {
        const selectedUnitType = unitTypes.find((unitType) => unitType.unit_type_id === Number(value));
        const newPrefix = selectedUnitType?.unit_prefix || '';
        setUnitPrefix(newPrefix); // Update the prefix
        setData('unit_type', Number(value));
        setData('unit_no', newPrefix); // Reset the unit_no field with the new prefix
    };

    const handleUnitNoChange = (value: string) => {
        // Ensure the prefix is always present and cannot be removed
        if (!value.startsWith(unitPrefix)) {
            value = unitPrefix; // Reset to prefix if it's removed
        }
        setData('unit_no', value);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('unit.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Unit" />
            <div className="flex h-full flex-1 flex-col rounded-xl p-4">
                <Heading title="Add Unit" description="Add a unit." />
                <Card>
                    <CardContent>
                        <form className="grid grid-cols-2 items-start gap-6" onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <Label htmlFor="unit_type">Unit Type *</Label>
                                <Select onValueChange={handleUnitTypeChange} required>
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

                                <Input
                                    id="unit_no"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.unit_no}
                                    onChange={(e) => handleUnitNoChange(e.target.value)}
                                    required
                                    autoComplete="Unit No."
                                    placeholder={`${unitPrefix}1001`} // Show the prefix in the placeholder
                                />

                                <InputError message={errors.unit_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="floor_no">Floor No. *</Label>

                                <Input
                                    id="floor_no"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.floor_no}
                                    onChange={(e) => setData('floor_no', Number(e.target.value))}
                                    required
                                    placeholder="4"
                                />

                                <InputError message={errors.floor_no} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_size_sqm">Unit Size(Sq.m) *</Label>

                                <Input
                                    id="unit_size_sqm"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.unit_size_sqm}
                                    onChange={(e) => setData('unit_size_sqm', Number(e.target.value))}
                                    required
                                    autoComplete="unit_size_sqm"
                                    placeholder="222.1"
                                />

                                <InputError message={errors.unit_size_sqm} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_min_amount">Minimum Amount. *</Label>

                                <Input
                                    id="unit_min_amount"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.unit_min_amount}
                                    onChange={(e) => setData('unit_min_amount', Number(e.target.value))}
                                    required
                                    autoComplete="unit_min_amount"
                                    placeholder="222.1"
                                />

                                <InputError message={errors.unit_min_amount} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="unit_max_amount">Maximum Amount. *</Label>

                                <Input
                                    id="unit_max_amount"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.unit_max_amount}
                                    onChange={(e) => setData('unit_max_amount', Number(e.target.value))}
                                    required
                                    autoComplete="unit_max_amount"
                                    placeholder="222.1"
                                />

                                <InputError message={errors.unit_max_amount} />
                            </div>

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Add Unit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
