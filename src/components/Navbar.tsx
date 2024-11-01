"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  type RouteColors = {
    [key: string]: string;
  };

  // Map routes to their corresponding colors
  const routeColors: RouteColors = {
    "/": "text-orange-200",
    "/mrs-deagles-cats": "text-neutral-200",
    "/anti-gizmo-propaganda": "text-stone-300",
    "/bad-inventions": "text-green-300",
  };

  // Define your nav links
  const navLinks = [
    { name: "Page", href: "/" },
    { name: "Mrs. Deagles Cats", href: "/mrs-deagles-cats" },
    { name: "Gizmo Bad", href: "/anti-gizmo-propaganda" },
    { name: "Inventions", href: "/bad-inventions" },
  ];

  return (
    <nav className="flex space-x-4 p-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            pathname === link.href
              ? routeColors[link.href] // Assign the color dynamically from the map
              : "text-yellow-700" // Default color for inactive links
          } hover:text-red-600`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
