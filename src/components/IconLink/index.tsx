import React from "react";
import { IconBaseProps } from "react-icons/lib";
import { DescriptionText, IconDiv, StyledIconLink } from './IconLink.styles'

type Props = {
    icon: IconBaseProps
    href: string
    target: string
    rel: string
    desc: string
};

const IconLink = ({ icon, href, target, rel, desc } : Props) => {
    return (
      <IconDiv className="icon">
        <StyledIconLink href={href} target={target} rel={rel}>
          {icon}
        </StyledIconLink>
        <DescriptionText>
          {desc}
        </DescriptionText>
      </IconDiv>
    );
};

export default IconLink;