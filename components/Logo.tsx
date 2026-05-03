import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link className="brand-logo" href={href} aria-label="KN Media home">
      <Image
        src="/assets/img/kn-media-wordmark.svg"
        width={560}
        height={112}
        priority
        alt="KN Media"
      />
    </Link>
  );
}
