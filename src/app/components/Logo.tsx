import lightLogo from "../../imports/Light-logo.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src={lightLogo}
      alt="MTECH IT Solutions"
      width={400}
      height={120}
      className={`${className} dark:invert object-contain`}
    />
  );
}
