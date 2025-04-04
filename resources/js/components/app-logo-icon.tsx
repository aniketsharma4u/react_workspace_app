interface AppLogoIconProps {
    className?: string;
}

export default function AppLogoIcon({ className = 'w-[170px]' }: AppLogoIconProps) {
    return <img src="/assets/img/logo.png" className={className} alt="App Logo" />;
}
