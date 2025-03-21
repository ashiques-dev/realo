import React from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import X from "@/assets/social-x.svg";
import Instagram from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg";
const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <p className="font-medium">AI Startup Landing Page</p>
          </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 text-xs md:text-sm lg:flex-1 lg:justify-center">
            <Link
              href={"/"}
              className="text-white/70 hover:text-white transition "
            >
              Features{" "}
            </Link>
            <Link
              href={"/"}
              className="text-white/70 hover:text-white transition "
            >
              {" "}
              Developers
            </Link>
            <Link
              href={"/"}
              className="text-white/70 hover:text-white transition "
            >
              {" "}
              Company
            </Link>
            <Link
              href={"/"}
              className="text-white/70 hover:text-white transition "
            >
              {" "}
              Blog
            </Link>
            <Link
              href={"/"}
              className="text-white/70 hover:text-white transition "
            >
              {" "}
              Changelog
            </Link>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <X className="text-white/40 hover:text-white transition" />
            <Youtube className="text-white/40 hover:text-white transition" />
            <Instagram className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
