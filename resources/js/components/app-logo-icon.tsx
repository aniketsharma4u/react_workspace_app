interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    const basePath = process.env.APP_URL || '';
    return <img src={`${basePath}/assets/img/logo.png`} className={className} alt="App Logo" />;
}
