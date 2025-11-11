import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const SmoothScrollLink = ({ href, children, className }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for header
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
