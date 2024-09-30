import React from "react";
import Link from "next/link";
import { MessageCircleCode, UserRound, LucideIcon } from "lucide-react";
import ProjectsDropdown from "./ProjectsDropdown";
import BlurFade from "./ui/blur-fade";

interface NavItem {
  text: string;
  icon: LucideIcon;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { text: "SOBRE MI", icon: UserRound, href: "/sobre-mi" },
  {
    text: "HABLEMOS",
    icon: MessageCircleCode,
    href: "https://wa.me/59891633855?text=Hola%20Alfonso%2C%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20una%20posible%20colaboraci%C3%B3n%20o%20oportunidad%20de%20trabajo.",
  },
];

interface LogoProps {
  isMobile?: boolean;
  className?: string;
}

const Logo = ({ isMobile = false, className = "" }: LogoProps) => (
  <Link
    href={`${isMobile ? "/bio" : ""}`}
    className={`${isMobile ? "text-3xl text-gold" : "text-2xl"} ${className}`}
  >
    <span className="italic font-extralight">
      {isMobile ? "A." : "M. Alfonso "}
    </span>
    <span className="font-bold">{isMobile ? "R" : "Rodríguez"}</span>
  </Link>
);

interface NavItemProps {
  item: NavItem;
}

const NavItem = ({ item }: NavItemProps) => {
  const Icon = item.icon;

  return (
    <li>
      <Link
        href={item.href || "#"}
        className="flex items-center hover:text-gold transition-colors cursor-pointer p-2 rounded-md"
        target={item.href?.startsWith("http") ? "_blank" : undefined}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <span className="hidden sm:inline">{item.text}</span>
        <Icon className="sm:hidden" />
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <BlurFade delay={0.25} inView>
      <header className="bg-teal p-4 rounded-lg flex justify-between items-center mb-10">
        <Logo isMobile={false} className="hidden sm:block" />
        <Logo isMobile={true} className="sm:hidden" />
        <nav>
          <ul className="flex space-x-2 text-sm">
            <ProjectsDropdown />
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.text} item={item} />
            ))}
          </ul>
        </nav>
      </header>
    </BlurFade>
  );
};

export default Header;
