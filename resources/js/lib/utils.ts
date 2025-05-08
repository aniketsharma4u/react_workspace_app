import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function publicPath(): string {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
    const baseURL = `${window.location.origin}${basePath}`;
    return baseURL;
}
