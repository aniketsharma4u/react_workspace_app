import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Fingerprint, Gauge, LayoutDashboard, LibraryBig, UserCog, UserRound, UsersRound, Wifi } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Gauge,
    },
    {
        title: 'Units',
        href: route('units.index'),
        icon: LayoutDashboard,
    },
    {
        title: 'Tenants',
        href: route('tenants.index'),
        icon: UsersRound,
    },
    {
        title: 'Tenancy Contracts',
        href: route('tenancyContract.index'),
        icon: LibraryBig,
    },
    {
        title: 'Amenities',
        href: '',
        icon: Wifi,
    },
    {
        title: 'MI Business Hub',
        href: '',
        icon: UserRound,
    },
    {
        title: 'COSEC',
        href: '',
        icon: Fingerprint,
    },
    {
        title: 'Admins',
        href: '',
        icon: UserCog,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
