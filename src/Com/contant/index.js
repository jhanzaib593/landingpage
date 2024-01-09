import { Col, Row } from "antd";
import "./index.css";
import icon1 from "../../Assets/icon/1.png";
import icon2 from "../../Assets/icon/2.png";
import icon3 from "../../Assets/icon/3.png";

const Contant = () => (
  <div div className="container p6">
    <h1>
      Top Language <span>to Learn</span>
    </h1>
    <Row>
      <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="main_c">
        <div className="c_text">
          <img alt="" src={icon1} width={80} height={80} />
          <div className="r_text">
            <h2>C++</h2>
            <p>General purpose</p>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="main_c">
        <div className="c_text">
          <img alt="" src={icon2} width={80} height={80} />
          <div className="r_text">
            <h2>PHP</h2>
            <p>General purpose</p>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="main_c">
        <div className="c_text">
          <img alt="" src={icon3} width={80} height={80} />
          <div className="r_text">
            <h2>CSS</h2>
            <p>General purpose</p>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
export default Contant;
