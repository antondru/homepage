import { IconBaseProps } from "react-icons";
import { NavIconLink } from "./Navbar.styles";

type NavIconLinkProps = {
  icon: IconBaseProps
  href: string
  target: string
  rel: string
  title: string
};

export const NavMenuIconLink = ({ icon, href, target, rel, title } : NavIconLinkProps) => {
  return (
    <NavIconLink href={href} target={target} rel={rel} title={title}>
      {icon}
    </NavIconLink>
  );
};