import { IconBaseProps } from "react-icons/lib";
import { DescriptionText, IconDiv, StyledIconLink } from './IconLink.styles'

type Props = {
    icon: IconBaseProps
    href: string
    target: string
    rel: string
    desc: string
    title: string
};

const IconLink = ({ icon, href, target, rel, desc, title } : Props) => {
    return (
      <IconDiv className="icon">
        <StyledIconLink href={href} target={target} rel={rel} title={title}>
          {icon}
        </StyledIconLink>
        <DescriptionText>
          {desc}
        </DescriptionText>
      </IconDiv>
    );
};

export default IconLink;