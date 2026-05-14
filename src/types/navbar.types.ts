// Types
export interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface IconNavLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export interface MenuSectionProps {
  title: string;
  links: readonly {
    name: string;
    href: string;
    icon: React.ComponentType<{ size?: string | number; className?: string }>;
  }[];
  onLinkClick: () => void;
}
