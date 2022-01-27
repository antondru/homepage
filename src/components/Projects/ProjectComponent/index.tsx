import { Card, CardButton, CardContent, CardText, CardTitle } from "./ProjectComponent.styles";

type Props = {
  backgroundImage: string;
  title: string;
  text: string;
  href: string;
}

export const ProjectCard = ({ backgroundImage, title, text, href } : Props) => {
  return (
    <Card backgroundImage={backgroundImage} className="card">
      <CardContent className="card-content">
        <CardTitle className="card-title">{title}</CardTitle>
        <CardText className="card-text">{text}</CardText>
        <CardButton className="card-button" href={href}>Visit</CardButton>
      </CardContent>
    </Card>
  );
}