import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Takım', href: '#team' },
    { name: 'Etkinlikler', href: '#events' },
    { name: 'Sponsorlar', href: '#sponsors' },
    { name: 'İletişim', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Xtreme', href: '#xtreme' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-xl font-bold">I</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary">IEEE ESTU</h1>
              <p className="text-xs text-muted-foreground">Student Branch</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-[#00629B] transition-all duration-300 text-sm font-medium relative px-3 py-2 rounded-md hover:bg-accent group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00629B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg bg-accent hover:bg-muted flex items-center justify-center transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg bg-accent hover:bg-muted flex items-center justify-center transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent className="dark:bg-slate-950">
                <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>
                <SheetDescription className="sr-only">
                  IEEE ESTU web sitesinin ana navigasyon menüsü
                </SheetDescription>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3 ml-4 mt-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">I</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-primary">IEEE ESTU</h2>
                      <p className="text-xs text-muted-foreground">Student Branch</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sr-only"
                  >
                    Close Menu
                  </button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-[#00629B] transition-all duration-300 font-medium py-3 px-4 rounded-md hover:bg-accent border-l-4 border-transparent hover:border-[#00629B]"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}