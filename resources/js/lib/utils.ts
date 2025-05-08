import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function publicPath(path: string): string {
    return `${window.location.origin}/public/${path.replace(/^\/+/, '')}`;
}
