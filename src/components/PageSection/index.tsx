import { ContentDiv, SectionHeader, BlinkingLetter } from "./PageSection.styles";

type Props = {
  title: string,
  id: string,
  children?: JSX.Element // TODO
}

const PageSection: React.FC<Props> = ({ title, id, children } : Props): JSX.Element => {
  return (
    <section className="pageSection" id={id}>
      <ContentDiv className="content">
        <SectionHeader>
          <span style={{ color: "#FD2155" }}>/</span>
          {title}
          <BlinkingLetter>.</BlinkingLetter>
        </SectionHeader>
        {children}
      </ContentDiv>
    </section>
  );
}

export default PageSection;