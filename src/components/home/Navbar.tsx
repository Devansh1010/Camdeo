'use client'
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "../toggle";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`fixed top-0 z-20 w-full h-20 transition-all duration-300
  ${
    scrolled
      ? "bg-white/90 dark:bg-black/10 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm"
      : "bg-white/35 dark:bg-black/35"
  }`}
>
      <div className="max-w-360 mx-auto h-full flex items-center justify-between px-8 lg:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="
    group
    flex items-end
    select-none
    leading-none
  "
        >
          <Image
            src='/Camdeo.png'
            alt='Camdeo Logo'
            height={200}
            width={200}
            className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {/* Nav Links */}
          <div
            className="flex items-center gap-6 text-base font-medium
            text-black dark:text-white"
          >
            <Link
              href="#services"
              className="transition-colors duration-200 hover:opacity-70"
            >
              Services
            </Link>

            <Link
              href="#about"
              className="transition-colors duration-200 hover:opacity-70"
            >
              About
            </Link>

            <Link
              href="#training"
              className="transition-colors duration-200 hover:opacity-70"
            >
              Training
            </Link>

            <Link
              href="#contact"
              className="transition-colors duration-200 hover:opacity-70"
            >
              Contact
            </Link>
          </div>

          {/* Enquire Button */}
          <Link href="#enquire-now">
            <Button
              variant='outline'
              className="px-8 py-4 rounded-2xl"
            >
              Enquire Now
            </Button>
          </Link>

          {/* Vertical Divider + Theme Toggle */}
          <div className="flex items-center gap-4">

            {/* Divider */}
            <div className="h-6 w-px bg-black/20 dark:bg-white/20" />

            {/* Theme Toggle */}
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant={"ghost"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          absolute top-20 left-0 w-full
          bg-white dark:bg-black
          border-b border-black/10 dark:border-white/10
          p-6 flex flex-col gap-6 md:hidden
        "
        >
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-black dark:text-white"
          >
            Services
          </Link>

          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-black dark:text-white"
          >
            About
          </Link>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-black dark:text-white"
          >
            Contact
          </Link>

          <Link href="#enquire-now">
            <Button
              variant='secondary'
              className="
            w-full py-4 rounded-full
            border border-black dark:border-white
            text-black dark:text-white
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition-all duration-300
          "
            >
              Enquire Now
            </Button>
          </Link>

          {/* Divider + Toggle */}
          <div className="flex items-center gap-4 pt-2">

            <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />

            <ModeToggle />

            <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar