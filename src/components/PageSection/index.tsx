import { VerticalLink, VerticalLinkContainer } from "../../pages/Pages.styles";
import { ContentDiv, SectionHeader, StyledLetter } from "./PageSection.styles";

type Props = {
  scrollUpTo?: string,
  scrollDownTo?: string,
  title: string,
  id: string,
  lastSection: boolean,
  firstSection: boolean,
  children?: JSX.Element,
}

const PageSection: React.FC<Props> = ({ title, id, children, firstSection, lastSection, scrollUpTo, scrollDownTo } : Props): JSX.Element => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="page-section" id={id}>
      {firstSection ? '' : 
      <VerticalLinkContainer upwards={true}>
        <VerticalLink onClick={() => scrollToElement(`${scrollUpTo}`)}>scroll <span style={{color: '#03fcad'}}>🡢</span></VerticalLink>
      </VerticalLinkContainer>
      }
      <ContentDiv className="content">
        <SectionHeader>
          {title}
          <StyledLetter> ⇩</StyledLetter>
        </SectionHeader>
        {children}
      </ContentDiv>
      {lastSection ? '' : 
        <VerticalLinkContainer upwards={false}>
          <VerticalLink onClick={() => scrollToElement(`${scrollDownTo}`)}>scroll<span style={{color: '#03fcad'}}> 🡢</span></VerticalLink>
        </VerticalLinkContainer>
      }
    </section>
    
  );
}

export default PageSection;