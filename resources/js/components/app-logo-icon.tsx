import { publicPath } from '@/lib/utils';

interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    const basePath = import.meta.env.VITE_ASSET_URL || publicPath; // Use REACT_APP_ prefix
    return <img src={`${basePath}/assets/img/logo.png`} className={className} alt="App Logo" />;
}
