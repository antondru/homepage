import { VerticalText } from "../../pages/Pages.styles";
import { ContentDiv, SectionHeader, BlinkingLetter, StyledLetter } from "./PageSection.styles";

type Props = {
  title: string,
  id: string,
  lastSection: boolean,
  firstSection: boolean,
  children?: JSX.Element 
}

const PageSection: React.FC<Props> = ({ title, id, children, firstSection, lastSection } : Props): JSX.Element => {
  return (
    <section className="page-section" id={id}>
      {firstSection ? '' : <VerticalText style={{paddingBottom: '15px'}}><span style={{color: '#03fcad'}}>🡠 </span>up</VerticalText>}
      <ContentDiv className="content">
        <SectionHeader>
          <StyledLetter>/</StyledLetter>
          {title}
          <BlinkingLetter>.</BlinkingLetter>
        </SectionHeader>
        {children}
      </ContentDiv>
      {lastSection ? '' : <VerticalText style={{paddingTop: '35px'}}>down<span style={{color: '#03fcad'}}> 🡢</span></VerticalText>}
    </section>
    
  );
}

export default PageSection;