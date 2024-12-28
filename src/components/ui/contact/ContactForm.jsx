import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LinkedIn2, Twitter2, Youtube2 } from "../../Image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    countryCode: "",
    contactNumber: "",
    enquiryStatus: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-section">
      <Container>
        <Row className="g-5">
          <Col lg={5}>
            <div className="company-info">
              <h2>Innovat (UK) Limited</h2>

              <div className="info-group">
                <h3>Address</h3>
                <p>123 Innovation Street</p>
                <p>Tech City, London EC1V 9NR</p>
                <p>United Kingdom</p>
              </div>

              <div className="info-group">
                <h3>Contact</h3>
                <p>Phone: +44 20 1234 5678</p>
                <p>Email: info@innovat-global.co.uk</p>
              </div>

              <div className="info-group last">
                <h3>Office Hours</h3>
                <p>Monday to Friday: 9:00 AM - 5:30 PM GMT</p>
                <p>Saturday & Sunday: Closed</p>
              </div>

              <div className="social-media">
                <h3>Connect with Us on Social Media</h3>
                <p>
                  Stay up-to-date with the latest news, insights, and
                  developments from Innovat. Follow us on our social media
                  channels to engage with our community, learn about our
                  innovative projects, and get a closer look at the future of
                  infrastructure and technology investments.
                </p>
                <ul>
                  <li>
                    <span>LinkedIn:</span> Join our professional network for
                    industry updates and thought leadership.
                  </li>
                  <li>
                    <span>Twitter:</span> Follow us for real-time news, trends,
                    and updates in the world of innovation and investment.
                  </li>
                  <li>
                    <span>YouTube:</span> Watch our latest videos, webinars, and
                    interviews on transformative technologies and investments.
                  </li>
                </ul>
                <p>
                  We’d love to hear from you—engage with us and be part of the
                  conversation shaping the future.
                </p>

                <div className="social-links">
                  <a href="#" aria-label="LinkedIn">
                    <LinkedIn2 />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter2 />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <Youtube2 />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="enquiry-form">
              <h2>Submit an Enquiry</h2>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Country Code</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+1">+1 (US/CA)</option>
                        {/* Add more country codes as needed */}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Contact Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Select
                    name="enquiryStatus"
                    value={formData.enquiryStatus}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Please Select Your Enquiry Status</option>
                    <option value="investor">Individual Investor</option>
                    <option value="institutional">
                      Institutional Investor
                    </option>
                    <option value="advisor">Financial Advisor</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-end">
                  <Button type="submit" className="btn-submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
