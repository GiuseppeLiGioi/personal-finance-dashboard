import BalanceChart from "../Components/charts/BalanceChart"
import CategoryPie from "../Components/charts/CategoryPie"
import DailyHeatmap from "../Components/charts/DailyHeatmap"
import MonthlyBarChart from "../Components/charts/MonthlyBarChart"

export default function Dashboard({ transactions, setTransactions }) {
    const totaleEntrate = transactions
        .filter((t) => t.type === "entrata")
        .reduce((sum, t) => sum + t.amount, 0)

    const totaleUscite = transactions
        .filter((t) => t.type === "uscita")
        .reduce((sum, t) => sum + t.amount, 0)

    const saldoAttuale = totaleEntrate - totaleUscite
    const numTransazioni = transactions.length

    const formatCurrency = (value) =>
        value.toLocaleString("it-IT", { style: "currency", currency: "EUR" })

    return (
        <div className="container-fluid px-4 dashboard">

            {/* ====== Metriche ====== */}
            <div className="row row-cols-2 row-cols-md-4 justify-content-center g-3">
                <div className="col">
                    <div className="card card-saldo">
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Saldo Attuale</h6>
                            <h2 className="dashboard-card-title">{formatCurrency(saldoAttuale)}</h2>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-entrate">
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Totale Entrate</h6>
                            <h2 className="dashboard-card-title">{formatCurrency(totaleEntrate)}</h2>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-uscite">
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Totale Uscite</h6>
                            <h2 className="dashboard-card-title">{formatCurrency(totaleUscite)}</h2>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-numero">
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Numero Transazioni</h6>
                            <h2 className="dashboard-card-title">{numTransazioni}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== Grafici ====== */}
            <div className="row row-cols-1 row-cols-md-2 justify-content-center g-3">
                <div className="col-md-8 mt-5">
                    <div className="card card-balance card-chart">
                        <div className="card-body">
                            <BalanceChart transactions={transactions} />
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="card card-pie card-chart">
                        <div className="card-body">
                            <CategoryPie transactions={transactions} />
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mt-5">
                    <div className="card card-bar card-chart">
                        <div className="card-body">
                            <MonthlyBarChart transactions={transactions} />
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="card card-heatmap card-chart">
                        <div className="card-body">
                            <DailyHeatmap transactions={transactions} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
