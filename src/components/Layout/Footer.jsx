import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import { LinkedIn, Logo, Telegram, Twitter } from "../Image";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer icontainer d-grid gap-4">
      <div className="">
        <div className="footer-area">
          <Row className="row">
            <Col md={3} lg={3}>
              <div className="footer-item text-center text-md-start">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <p className="copyright">© 2024 Innovat. All rights reserved.</p>
            </Col>
            <Col md={6} lg={5}>
              <div className="footer-weget">
                <div className="footer-item d-none d-lg-block">
                  <div className="footerLinks">
                    <div>
                      <ul>
                        <li>
                          <Link to="/">About Innovat</Link>
                        </li>
                        <li>
                          <Link to="/">Careers</Link>
                        </li>
                        <li>
                          <Link to="/">privacy policy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="middleRow">
                      <ul>
                        <li>
                          <Link to="/">Our Funds</Link>
                        </li>
                        <li>
                          <Link to="/">education</Link>
                        </li>
                        <li>
                          <Link to="/">Research center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-list-phone-show d-lg-none">
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/terms">Terms of Use</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/legal-disclaimer">Legal Disclaimer</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} lg={3}>
              <div className="footer-item connect-icon">
                <h6>Connect with us </h6>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <Telegram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">Disclaimer</p>
          <p className="fs-12 ">
            Any information or advice contained on this website is general in
            nature and has been prepared without taking into account your
            objectives, financial situation or needs. Before acting on any
            information or advice on this website, you should consider the
            appropriateness of it (and any relevant product) having regard to
            your circumstances and, if a current offer document is available,
            read the offer document before acquiring products named on this
            website. You should also seek independent financial advice prior to
            acquiring a financial product. All financial products involve risks.
            Past performance of any product described on this site is not a
            reliable indication of future performance. Innovat (UK) Limited
            (registration number 1950706) is licensed as an approved manager
            under the British Virgin Islands Investment Business (Approved
            Managers) Regulations 2012. Innovat (UK) Limited ACN 624 214 777
            holds a Corporate Authorized Representative authorization (CAR No.
            12932]e2we) from XYZ Wholesale Fund Services Pty Ltd (AFSL No. 528
            538) allowing it to provide General Product Advice.
          </p>
        </div>
        <p className="bottom-copyright ">
          © 2024 Innovat. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
