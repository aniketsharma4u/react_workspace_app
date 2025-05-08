interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    const basePath = import.meta.env.APP_URL || ''; // Use REACT_APP_ prefix
    return <img src={`${basePath}/assets/img/logo.png`} className={className} alt="App Logo" />;
}