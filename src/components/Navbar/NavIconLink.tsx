import { IconBaseProps } from "react-icons";
import styled from "styled-components";
import { NavIconLink } from "./Navbar.styles";

type NavIconLinkProps = {
  icon: IconBaseProps
  href: string
  target: string
  rel: string
};

export const NavMenuIconLink = ({ icon, href, target, rel } : NavIconLinkProps) => {
  return (
      <NavIconLink href={href} target={target} rel={rel}>
        {icon}
      </NavIconLink>
  );
};