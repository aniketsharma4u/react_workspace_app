import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function getIsActive(itemHref: string, pageUrl: string): boolean {
    try {
        // Get the current hostname and pathname
        const { hostname, pathname: currentPath } = window.location;

        // Check if the app is running on localhost
        const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

        // Dynamically determine the base path for production
        // Extract the first segment of the path if NOT localhost
        const basePath = isLocalhost
            ? '' // No base path for localhost environment
            : `/${currentPath.split('/').filter(Boolean)[0]}`;

        // Normalize paths by removing the base path
        const hrefPath = new URL(itemHref, window.location.origin).pathname.replace(basePath, '').split('/').filter(Boolean);
        const pagePath = pageUrl.replace(basePath, '').split('/').filter(Boolean);

        // Check if the first segments of the paths match
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
                    const isActive = getIsActive(item.href, page.url);
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
