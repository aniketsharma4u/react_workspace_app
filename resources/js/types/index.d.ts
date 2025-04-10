import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface TenantType  {
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
    created_user?: User;
};

export interface TablePaginationLink {
    url: string;
    label: string;
    active: boolean;
}

export interface UnitType {
    unit_type_id: number;
    unit_name: string;
    unit_prefix: string;
    status: number;
    created_at: string;
    updated_at: string;
}

export interface Unit {
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

export interface TenancyContract {
    contract_id: number;
    unique_contract_no: string;
    unique_tenant_id: string;
    unique_unit_id: string;
    total_months: number;
    start_date: string;
    end_date: string;
    grace_start_date: string | null;
    grace_end_date: string | null;
    discount: string | null;
    security_deposit: string | null;
    contract_amount: string;
    annual_amount: string;
    actual_annual_amount: string | null;
    actual_contract_amount: string | null;
    shell_and_core: string;
    payment_count: number | null;
    contract_status: number;
    created_by: number;
    created_at: string;
    updated_at: string;
    tenant: TenantType;
    unit: Unit; // Replace with Unit type if available
}
