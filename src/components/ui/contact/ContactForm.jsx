/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Check } from "../../Image";
import ContactDetails from "./ContactDetails";

const ContactForm = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    user_email: "",
    companyName: "",
    countryCode: "",
    contactNumber: "",
    enquiryStatus: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setIsLoading(false);
            setIsSuccess(true);
          },
          (error) => {
            console.log(error);
            alert("Something went wrong!  Try again later.");
            setIsLoading(false);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="icontainer">
      <div className="contact-section">
        {!isSuccess && !isLoading ? (
          <Row className="g-lg-5">
            <Col lg={6}>
              <ContactDetails />
            </Col>

            <Col lg={6}>
              <div className="enquiry-form">
                <h2>Submit an Enquiry</h2>
                <Form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Row className="gaps">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="label">First Name</Form.Label>
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
                      <Form.Group>
                        <Form.Label className="label">Last Name</Form.Label>
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

                  <Form.Group>
                    <Form.Label className="label">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="label">Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Row className="gaps">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label className="label">Country Code</Form.Label>
                        <Form.Select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          required
                        >
                          {/* <option value="">Country Code</option> */}
                          <option value="+61">AUS +61</option>
                          <option value="+44">UK +44</option>
                          <option value="+1">US +1</option>
                          {/* Add more country codes as needed */}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="label">
                          Contact Number
                        </Form.Label>
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

                  <Form.Group>
                    <Form.Label className="label">Investor Type</Form.Label>
                    <Form.Select
                      name="enquiryStatus"
                      value={formData.enquiryStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Investor Type</option>
                      <option value="investor">Individual Investor</option>
                      <option value="institutional">
                        Institutional Investor
                      </option>
                      <option value="advisor">Financial Advisor</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="label">Message</Form.Label>
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

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="btn-submit"
                      disabled={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Check />
            <h4 className="thank-you-text">
              Thank you, we have received your enquiry and will be in contact
              with you shortly.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
