import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 40 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group relative w-auto ${className}`} style={{ height: `${height}px` }}>
      <Image
        src="/images/logo.png"
        alt="Alpha Apex Logo"
        width={height * 4} // maintains approximate aspect ratio
        height={height}
        priority
        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  );
}
