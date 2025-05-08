import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    const { props } = usePage<SharedData>();
    // console.log('AppLogoIcon data:', props.ziggy.url);
    const basePath = import.meta.env.VITE_ASSET_URL || props.ziggy.url; // Use REACT_APP_ prefix
    return <img src={`${basePath}/assets/img/logo.png`} className={className} alt="App Logo" />;
}
