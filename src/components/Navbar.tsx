import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Store", href: "#" },
    { name: "Pro", href: "#" },
    { name: "Teams", href: "#" },
    { name: "Developers", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="w-full px-4 pt-4 sm:px-6 lg:px-8 relative z-50">
      <div className="mx-auto flex justify-center relative z-10">
        <div className="relative w-full h-[76px] max-w-[1204px] flex items-center justify-between px-6 rounded-2xl"
             style={{
               background: 'linear-gradient(177deg, rgba(17, 18, 20, 0.75) 5%, rgba(12, 13, 15, 0.90) 76%)',
               boxShadow: '0px 1px 1px 1px rgba(255, 255, 255, 0.15) inset',
               outline: '1px rgba(255, 255, 255, 0.06) solid',
               outlineOffset: '-1px',
               backdropFilter: 'blur(2.50px)'
             }}>
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white">
              Raycast
            </h1>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 py-3 rounded-md text-sm font-medium tracking-[0.2px] transition-colors hover:bg-white/10"
                style={{ color: '#9C9C9D' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="px-2 py-3 rounded-md text-sm font-medium tracking-[0.2px] transition-colors hover:bg-white/10"
              style={{ color: '#9C9C9D' }}
            >
              Log in
            </a>
            <div 
              className="min-h-9 px-3 py-2.5 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:opacity-90"
              style={{
                background: '#E6E6E6',
                boxShadow: '0px 1px 0.4px white inset'
              }}
            >
              <span className="text-sm font-medium leading-4 tracking-[0.2px]" style={{ color: '#2F3031' }}>
                Download
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2">
          <div className="mx-auto max-w-[1204px] rounded-2xl px-4 py-4"
               style={{
                 background: 'linear-gradient(177deg, rgba(17, 18, 20, 0.75) 5%, rgba(12, 13, 15, 0.90) 76%)',
                 boxShadow: '0px 1px 1px 1px rgba(255, 255, 255, 0.15) inset',
                 outline: '1px rgba(255, 255, 255, 0.06) solid',
                 outlineOffset: '-1px',
                 backdropFilter: 'blur(2.50px)'
               }}>
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium tracking-[0.2px] transition-colors hover:bg-white/10"
                  style={{ color: '#9C9C9D' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-white/20 pt-4">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium tracking-[0.2px] transition-colors hover:bg-white/10"
                style={{ color: '#9C9C9D' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </a>
              <div 
                className="w-full min-h-9 px-3 py-2.5 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:opacity-90"
                style={{
                  background: '#E6E6E6',
                  boxShadow: '0px 1px 0.4px white inset'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-sm font-medium leading-4 tracking-[0.2px]" style={{ color: '#2F3031' }}>
                  Download
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;