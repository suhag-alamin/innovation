/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TermsConditions from "./pages/TermsConditions";

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
