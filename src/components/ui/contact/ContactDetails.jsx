import { LinkedIn2, Twitter2, Youtube2 } from "../../Image";

const ContactDetails = () => {
  return (
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
          Stay up-to-date with the latest news, insights, and developments from
          Innovat. Follow us on our social media channels to engage with our
          community, learn about our innovative projects, and get a closer look
          at the future of infrastructure and technology investments.
        </p>
        <ul>
          <li>
            <span>LinkedIn:</span> Join our professional network for industry
            updates and thought leadership.
          </li>
          <li>
            <span>Twitter:</span> Follow us for real-time news, trends, and
            updates in the world of innovation and investment.
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
  );
};

export default ContactDetails;
