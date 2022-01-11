import { BlinkingLetter } from "./BlinkingLetter";
import { SectionHeader } from "./PageSection.styles";

type Props = {
  title: string,
  id: string,
  children?: JSX.Element // TODO
}
// TODO: Div eller section?
const PageSection: React.FC<Props> = ({ title, id, children } : Props): JSX.Element => {
  return (
    <section className="pageSection" id={id}>
      <div className="contentDiv">
        <SectionHeader><span style={{color: "#bca26c"}}>/</span>{title}<BlinkingLetter>/</BlinkingLetter></SectionHeader>
        {children}
      </div>
    </section>
  );
}

export default PageSection;