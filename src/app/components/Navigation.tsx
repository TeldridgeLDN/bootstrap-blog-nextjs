import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex space-x-8 text-gray-700">
      <Link href="/about" className="hover:text-gray-900">
        About
      </Link>
      <Link href="/work" className="hover:text-gray-900">
        Work
      </Link>
      <Link href="/" className="hover:text-gray-900">
        Garden
      </Link>
    </nav>
  );
};

export default Navigation;
