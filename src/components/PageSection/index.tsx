import { VerticalLink } from "../../pages/Pages.styles";
import { ContentDiv, SectionHeader, BlinkingLetter, StyledLetter } from "./PageSection.styles";

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
        <VerticalLink onClick={() => scrollToElement(`${scrollUpTo}`)} style={{paddingBottom: '15px'}}><span style={{color: '#03fcad'}}>🡠 </span>scroll</VerticalLink>
      }
      <ContentDiv className="content">
        <SectionHeader>
          <StyledLetter>/</StyledLetter>
          {title}
          <BlinkingLetter>.</BlinkingLetter>
        </SectionHeader>
        {children}
      </ContentDiv>
      {lastSection ? '' : 
        <VerticalLink onClick={() => scrollToElement(`${scrollDownTo}`)} style={{paddingTop: '35px'}}>scroll<span style={{color: '#03fcad'}}> 🡢</span></VerticalLink>
      }
    </section>
    
  );
}

export default PageSection;