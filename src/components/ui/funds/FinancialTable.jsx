import { useState } from "react";
import { fundsData } from "../../../lib/fundsData";
import { FileText } from "../../Image";

export default function FinancialTable() {
  const [activeTab, setActiveTab] = useState("overview");

  const activeFunds = fundsData.filter(
    (fund) => fund.category === "Active Funds"
  );
  const indexFunds = fundsData.filter(
    (fund) => fund.category === "Index Funds"
  );

  return (
    <div className="financial-table-container">
      <div className="financial-table-header">
        <h2>Exchange Traded / Mutual Funds</h2>
      </div>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === "performance" ? "active" : ""}`}
          onClick={() => setActiveTab("performance")}
        >
          Performance
        </button>
        <button
          className={`tab ${activeTab === "documents" ? "active" : ""}`}
          onClick={() => setActiveTab("documents")}
        >
          Documents
        </button>
      </div>

      <div className="table-responsive">
        <h3>Active Funds</h3>
        <table className="funds-table">
          <thead>
            <tr>
              <th>Active Funds</th>
              <th>Inception Date</th>
              <th>NAV</th>
              <th>Net Assets</th>
              <th>Yield</th>
              <th>Units Outstanding</th>
              <th>Expense Ratio</th>
              <th>Fund Type</th>
              <th>Fact Sheet</th>
              <th>Minimum $250k</th>
            </tr>
          </thead>
          <tbody>
            {activeFunds.map((fund) => (
              <tr key={fund.id}>
                <td className="fund-name">
                  <span>Innovat™ </span>
                  {fund.name}
                </td>
                <td>{fund.inspectionDate}</td>
                <td>{fund.nav}</td>
                <td>{fund.netAssets}</td>
                <td>{fund.yield}</td>
                <td>{fund.unitsOutstanding}</td>
                <td>{fund.expenseRatio}</td>
                <td>{fund.fundType}</td>
                <td>
                  <FileText />
                </td>
                <td>
                  <button className="invest-now-btn">Invest Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="index-funds">Index Funds</h3>
        <table className="funds-table">
          <tbody>
            {indexFunds.map((fund) => (
              <tr key={fund.id}>
                <td className="fund-name">
                  <span>Innovat™ </span>
                  {fund.name}
                </td>
                <td>{fund.inspectionDate}</td>
                <td>{fund.nav}</td>
                <td>{fund.netAssets}</td>
                <td>{fund.yield}</td>
                <td>{fund.unitsOutstanding}</td>
                <td>{fund.expenseRatio}</td>
                <td>{fund.fundType}</td>
                <td>
                  <FileText />
                </td>
                <td>
                  <button className="invest-now-btn">Invest Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
