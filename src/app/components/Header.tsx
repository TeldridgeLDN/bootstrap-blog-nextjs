// src/components/Header.tsx
import Navigation from './Navigation'; // Assuming you have a Navigation component

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          {/* Logo on the left side */}
          Logo
        </div>
        {/* Navigation on the right side */}
        <Navigation />
      </div>
    </header>
  );
}
