import BalanceChart from "../Components/charts/BalanceChart";
import CategoryPie from "../Components/charts/CategoryPie";
import DailyHeatmap from "../Components/charts/DailyHeatmap";
import MonthlyBarChart from "../Components/charts/MonthlyBarChart";
import { translations } from "../utils/translations";

export default function Dashboard({ transactions, language, setLanguage  }) {
  const t = translations[language];

  const totaleEntrate = transactions
    .filter((tr) => tr.type === "entrata")
    .reduce((sum, tr) => sum + tr.amount, 0);

  const totaleUscite = transactions
    .filter((tr) => tr.type === "uscita")
    .reduce((sum, tr) => sum + tr.amount, 0);

  const saldoAttuale = totaleEntrate - totaleUscite;
  const numTransazioni = transactions.length;

  const formatCurrency = (value) =>
    value.toLocaleString(language === "it" ? "it-IT" : "en-US", { style: "currency", currency: "EUR" });

  return (
    <div className="container-fluid px-4 dashboard">

      <div className="row row-cols-2 row-cols-md-4 justify-content-center g-3">
        <div className="col">
          <div className="card card-saldo">
            <div className="card-body">
              <h6 className="dashboard-card-p">{t.totalBalance}</h6>
              <h2 className="dashboard-card-title">{formatCurrency(saldoAttuale)}</h2>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-entrate">
            <div className="card-body">
              <h6 className="dashboard-card-p">{t.totalIncome}</h6>
              <h2 className="dashboard-card-title">{formatCurrency(totaleEntrate)}</h2>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-uscite">
            <div className="card-body">
              <h6 className="dashboard-card-p">{t.totalExpenses}</h6>
              <h2 className="dashboard-card-title">{formatCurrency(totaleUscite)}</h2>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-numero">
            <div className="card-body">
              <h6 className="dashboard-card-p">{t.transactionCount}</h6>
              <h2 className="dashboard-card-title">{numTransazioni}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 justify-content-center g-3 mt-5">
        <div className="col-md-8">
          <div className="card chart-card card-balance">
            <div className="card-body">
              <BalanceChart transactions={transactions} title={t.balanceChartTitle} description={t.balanceChartDescription}  language={language} setLanguage={setLanguage}/>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card chart-card card-pie">
            <div className="card-body">
              <CategoryPie transactions={transactions} title={t.categoryPie} description={t.categoryPieDescription}  language={language} setLanguage={setLanguage}/>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card chart-card card-bar">
            <div className="card-body">
              <MonthlyBarChart transactions={transactions} title={t.monthlyBarChartTitle} description={t.monthlyBarChartDescription}  language={language} setLanguage={setLanguage}/>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card chart-card card-heatmap">
            <div className="card-body">
              <DailyHeatmap transactions={transactions} title={t.dailyHeatmapTitle} description={t.dailyHeatmapDescription}  language={language} setLanguage={setLanguage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
