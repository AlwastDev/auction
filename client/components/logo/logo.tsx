import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <Image priority src="/logo.png" alt="dobrolot" height="50" width="170" />
    </Link>
  );
};
