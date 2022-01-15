import { ContentDiv, SectionHeader, BlinkingLetter } from "./PageSection.styles";

type Props = {
  title: string,
  id: string,
  children?: JSX.Element // TODO
}

const PageSection: React.FC<Props> = ({ title, id, children } : Props): JSX.Element => {
  return (
    <section className="page-section" id={id}>
      <ContentDiv className="content">
        <SectionHeader>
          <span style={{ color: "#03fcad" }}>/</span>
          {title}
          <BlinkingLetter>.</BlinkingLetter>
        </SectionHeader>
        {children}
      </ContentDiv>
    </section>
  );
}

export default PageSection;