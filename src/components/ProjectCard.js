import { Col } from "react-bootstrap";
import web from "../assets/img/web.png";

export const ProjectCard = ({ title, description, imgUrl,webUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href= {webUrl}><img src={web} alt="" /></a>
        </div>
      </div>
    </Col>
  )
}
