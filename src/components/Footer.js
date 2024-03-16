import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <p style={{ fontSize: '30px', color: 'white' }}><b>Anindita Sarkar</b></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anindita-sarkar-370876250/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/aninditasarkar85"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/__.sea_of_cereal.__/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/aninditasarkar2003"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright &copy; Anindita Sarkar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
