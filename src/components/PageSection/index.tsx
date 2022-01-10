import { BlinkingLetter } from "./BlinkingLetter";

type Props = {
  title: string,
  id: string,
  children?: JSX.Element // TODO
}
// TODO: Div eller section?
const PageSection: React.FC<Props> = ({ title, id, children } : Props): JSX.Element => {
  return (
    <section className="pageSection" id={id}>
      <h1><span style={{color: "#bca26c"}}>/</span>{title}<BlinkingLetter>/</BlinkingLetter></h1>
      {children}
    </section>
  );
}

export default PageSection;