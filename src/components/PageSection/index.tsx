import { IconBaseProps } from "react-icons/lib";
import { VerticalLink, VerticalLinkContainer } from "../../pages/Pages.styles";
import { ContentDiv, Icon, SectionHeader, SectionHeaderContainer, StyledLetter } from "./PageSection.styles";

type Props = {
  icon: IconBaseProps
  scrollUpTo?: string,
  scrollDownTo?: string,
  title: string,
  id: string,
  lastSection: boolean,
  firstSection: boolean,
  children?: JSX.Element,
}

const PageSection: React.FC<Props> = ({ title, id, children, firstSection, lastSection, scrollUpTo, scrollDownTo, icon } : Props): JSX.Element => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="page-section" id={id}>
      {firstSection ? '' : 
      <VerticalLinkContainer className="vertical-link-container" upwards={true}>
        <VerticalLink className="vertical-link" onClick={() => scrollToElement(`${scrollUpTo}`)}>scroll <span style={{color: '#03fcad'}}>🡢</span></VerticalLink>
      </VerticalLinkContainer>
      }
      <ContentDiv className="content">
        <SectionHeaderContainer className="section-header-container">
          <SectionHeader className="section-header">
            {title}
            <StyledLetter>{" "}⇩</StyledLetter>
          </SectionHeader>
          <Icon className="icon">{icon}</Icon>
        </SectionHeaderContainer>
        {children}
      </ContentDiv>
      {lastSection ? '' : 
        <VerticalLinkContainer className="vertical-link-container" upwards={false}>
          <VerticalLink className="vertical-link" onClick={() => scrollToElement(`${scrollDownTo}`)}>scroll<span style={{color: '#03fcad'}}> 🡢</span></VerticalLink>
        </VerticalLinkContainer>
      }
    </section>
    
  );
}

export default PageSection;