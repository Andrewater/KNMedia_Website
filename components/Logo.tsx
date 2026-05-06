import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link className="brand-logo" href={href} aria-label="KN Media home">
      <Image
        src="/assets/img/kn-media-logo-removebg.png"
        width={832}
        height={146}
        priority
        alt="KN Media"
      />
    </Link>
  );
}
