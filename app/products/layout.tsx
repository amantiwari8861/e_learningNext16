import type { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Product Module</h1>
        <p className="text-sm text-gray-500">
          Browse products and view detailed information
        </p>
      </header>

      <main>{children}</main>

      <footer className="border-t mt-10 pt-4 text-sm text-gray-400">
        © 2026 Product Service
      </footer>
    </div>
  );
}
