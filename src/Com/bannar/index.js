import { Col, Row } from "antd";
import "./index.css";
import img from "../../Assets/img/pic.png";

const Bannar = () => (
  <>
    <Row className="b_main">
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="b_top">
        <p className="b-tex">THE NEW ERA HAS BEEN STARTED</p>
        <h1 className="b_tmain">
          Bright Your Future With Learn New Technology From All Experts
        </h1>
        <p className="tex_b">
          Find all the instructions you need to get an entry-level job in tech,
          even if you've never coded. Not a beginner? Test out of subjects
        </p>

        <div className="text">
          <button className="b_btnt">Start Free Trial</button>
          <p className="b_btn">
            Or Subscribe Just
            <span>
              $19.00/<sub>month</sub>
            </span>
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="b_img">
        <img alt="" src={img} width={600} height={400} />
      </Col>
    </Row>
    <div className="b_img_tex">
      <h4>Jhanzaib</h4>
      <p>Senior C# Teacher</p>
    </div>
  </>
);
export default Bannar;
