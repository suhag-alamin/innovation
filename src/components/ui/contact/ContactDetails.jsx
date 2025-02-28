import { LinkedIn2, Twitter2, Youtube2 } from "../../Image";

const ContactDetails = () => {
  return (
    <div className="company-info">
      <h2>Innovation Limited</h2>

      <div className="info-group">
        <h3>Address:</h3>
        <p>63-66 Hatton Garden</p>
        <p>Fifth Floor, Suite 23</p>
        <p>London, United Kingdom EC1N 8LE</p>
      </div>

      <div className="info-group">
        <h3>Contact:</h3>
        <p>Mobile: +61 424 996 833</p>
        <p>Direct: +61 2 8258 8181</p>
      </div>
      <div className="info-group">
        <h3>Email:</h3>
        <p>General: general@innovation.com</p>
        <p>Investors: investors@innovation.com</p>
        <p>Media: media@innovation.com</p>
      </div>

      <div className="info-group last">
        <h3>Business Hours:</h3>
        <p>Monday - Friday: 9:00 AM - 5:30 PM GMT</p>
        <p>Saturday & Sunday: Closed</p>
      </div>
      <p className="mt-2">
        We look forward to connecting with you and exploring how we can work
        together to shape the future of infrastructure and innovation.
      </p>

      <div className="social-media">
        <h3>Connect with Us on Social Media</h3>
        <p>
          Stay up-to-date with the latest news, insights, and developments from
          innovation. Follow us on our social media channels to engage with our
          community, learn about our innovative projects, and get a closer look
          at the future of infrastructure and technology investments.
        </p>
        <ul className="social-list">
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
