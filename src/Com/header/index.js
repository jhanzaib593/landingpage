import { Button, Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import './index.css'

const Header = () => (
  <>
    <Row className="header">
      <Col className="h-logo" xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
        Ngoding
      </Col>
      <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className="header_nav">
        <Link>Courses</Link>
        <Link>Techdegree</Link>
        <Link>Teams</Link>
        <Link>Community</Link>
      </Col>
      <Col className="h_btn" xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
        <Button className="btn_si">Sign In</Button>
        <Button className="btn_re">Register Now</Button>
      </Col>
    </Row>
  </>
);
export default Header;
