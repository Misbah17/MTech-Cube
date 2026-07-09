"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/data";

const links = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 isolate z-[100] border-b border-line bg-black shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]">
      <nav className="container-cube relative z-[100] flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt="Mtech Cube"
            width={34}
            height={34}
            priority
            className="h-8 w-8"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-offwhite">
            MTECH CUBE
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-offwhite">
              Services
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-[110] w-[560px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#0F0F11] p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9)] ring-1 ring-black/50">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group rounded-xl p-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <p className="text-sm font-medium text-offwhite group-hover:text-gold">
                        {s.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {s.shortDescription}
                      </p>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="col-span-2 mt-1 rounded-xl border-t border-white/10 px-4 pt-3 text-xs font-medium text-gold hover:text-gold-light"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 transition-colors hover:text-offwhite"
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-gold-light hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-offwhite" strokeWidth={1.5} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[120] flex flex-col bg-black lg:hidden">
          <div className="container-cube flex h-20 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image src="/logo-icon.png" alt="Mtech Cube" width={30} height={30} className="h-7 w-7" />
              <span className="font-display text-lg font-semibold text-offwhite">
                MTECH CUBE
              </span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-offwhite" strokeWidth={1.5} />
            </button>
          </div>
          <div className="container-cube mt-6 flex flex-col gap-1">
            <p className="eyebrow mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg text-offwhite"
              >
                {s.name}
              </Link>
            ))}
            <div className="mt-4" />
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg text-offwhite"
              >
                {l.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-medium text-black"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
