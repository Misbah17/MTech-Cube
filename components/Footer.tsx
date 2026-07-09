import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="container-cube grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:py-20">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="Mtech Cube" width={30} height={30} className="h-7 w-7" />
            <span className="font-display text-base font-semibold text-offwhite">
              MTECH CUBE
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
            Websites, apps, and digital systems that just keep working.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-gray-400 transition-colors hover:text-gold"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-3">
            <li>
              <Link href="/work" className="text-sm text-gray-400 hover:text-gold">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-gray-400 hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="mailto:hello@mtechcube.com" className="hover:text-gold">
                hello@mtechcube.com
              </a>
            </li>
            <li>+1 (415) 555-0182</li>
            <li>Remote-first · Global delivery</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-cube flex flex-col items-center justify-between gap-4 py-6 text-xs text-gray-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Mtech Cube. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
