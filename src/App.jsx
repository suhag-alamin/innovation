/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TermsConditions from "./pages/TermsConditions";
import AboutInnovat from "./pages/AboutInnovat";
import Funds from "./pages/Funds";
import ExchangeTraded from "./pages/ExchangeTraded";
import Investments from "./pages/Investments";
import Funding from "./pages/Funding";
import Education from "./pages/Education";
import Research from "./pages/Research";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <div className="gradient-background"></div>
          <div className="content">
            <Routes>
              <Route
                index
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />

              <Route
                path="/about-innovat"
                element={
                  <Layout>
                    <AboutInnovat />
                  </Layout>
                }
              />
              <Route
                path="/funds"
                element={
                  <Layout>
                    <Funds />
                  </Layout>
                }
              />
              <Route
                path="/funding"
                element={
                  <Layout>
                    <Funding />
                  </Layout>
                }
              />
              <Route
                path="/exchange-traded"
                element={
                  <Layout>
                    <ExchangeTraded />
                  </Layout>
                }
              />
              <Route
                path="/investments"
                element={
                  <Layout>
                    <Investments />
                  </Layout>
                }
              />
              <Route
                path="/education"
                element={
                  <Layout>
                    <Education />
                  </Layout>
                }
              />
              <Route
                path="/research"
                element={
                  <Layout>
                    <Research />
                  </Layout>
                }
              />
              <Route
                path="/terms"
                element={
                  <Layout>
                    <Terms />
                  </Layout>
                }
              />
              <Route
                path="/terms-conditions"
                element={
                  <Layout>
                    <TermsConditions />
                  </Layout>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <Layout>
                    <PrivacyPolicy />
                  </Layout>
                }
              />
              <Route
                path="/legal-disclaimer"
                element={
                  <Layout>
                    <LegalDisclaimer />
                  </Layout>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
