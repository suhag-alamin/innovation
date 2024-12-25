import { Container } from "react-bootstrap";

const InvestmentProcess = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-white">Investment Process</h2>
        <div className="d-flex flex-column gap-5">
          <p className="text-white">
            Innovat is a leading global fund manager with a singular investment
            process designed to identify and invest in disruptive innovation
            that has the potential to create long-term value for our clients.
            Our process focuses on researching, analyzing, and assessing
            companies that are developing new technologies, products, or
            services that have the potential to disrupt existing markets or
            create entirely new ones.
          </p>

          <div>
            <h3 className="mb-3 text-white">Research and Analysis</h3>
            <p className="text-white">
              We begin our process by researching and analyzing a wide range of
              industries and markets to identify areas of potential disruption.
              We look for companies that are developing innovative solutions to
              existing problems or creating entirely new products or services.
              We also look for companies that have strong management teams, a
              clear vision, and a competitive advantage in their respective
              markets.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-white">Assessment</h3>
            <p className="text-white">
              Once we have identified potential investments, we conduct an
              in-depth analysis of each company&apos;s financials, competitive
              landscape, and market opportunity. This includes evaluating the
              company&apos;s financial performance, competitive positioning,
              customer base, product roadmap, and other factors. We also
              consider the company&apos;s management team and their ability to
              execute on their vision.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-white">Due Diligence</h3>
            <p className="text-white">
              Once we have identified a potential investment opportunity, we
              conduct due diligence on the company&apos;s operations and
              financials. This includes reviewing the company&apos;s financial
              statements as well as conducting interviews with key personnel at
              the company. We also review any relevant legal documents such as
              contracts or agreements with customers or suppliers.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-white">Investment Decision</h3>
            <p className="text-white">
              Finally, we make an investment decision based on our analysis of
              the company&apos;s fundamentals as well as our assessment of its
              long-term prospects for success. Our goal is to invest in
              companies that have strong fundamentals and a clear path to
              success over the long term.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentProcess;
