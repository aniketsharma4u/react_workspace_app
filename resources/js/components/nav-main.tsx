import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function getIsActive(itemHref: string, pageUrl: string, basePath: string): boolean {
    try {
        const hrefPath = new URL(itemHref, window.location.origin).pathname.replace(`/${basePath}`, '').split('/').filter(Boolean);
        const pagePath = pageUrl.replace(`/${basePath}`, '').split('/').filter(Boolean);
        return hrefPath[0] === pagePath[0];
    } catch (e) {
        console.error('Invalid URL:', itemHref);
        return false;
    }
}

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
                {items.map((item) => {
                    const isActive = getIsActive(item.href, page.url, 'react_workspace_app');
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive} tooltip={{ children: item.title }}>
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
