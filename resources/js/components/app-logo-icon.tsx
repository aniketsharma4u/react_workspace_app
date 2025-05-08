import { publicPath } from '@/lib/utils';

interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    return <img src={publicPath('/assets/img/logo.png')} className={className} alt="App Logo" />;
}
