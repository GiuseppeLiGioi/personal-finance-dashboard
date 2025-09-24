import { LineChart, Line } from "recharts"

export default function BalanceChart() {
    const data = [
        { date: "2023-01-01", balance: 200 },
        { date: "2023-02-01", balance: 500 },
        { date: "2023-03-01", balance: 300 }
    ]

    return (
        <>

            <h1 className="title-pages">ANDAMENTO SALDO</h1>
            <div className="container-fluid px-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Titolo Grafico</h2>
                        <p className="card-text">Descrizione Grafico...</p>
                    </div>
                    <LineChart width={600} height={300} data={data}>
                        <Line dataKey={balance}/>
                    </LineChart>
                </div>
            </div>
        </>
    )
}