import { PieChart, Pie } from "recharts";

export default function CategoryPie() {
    const data = [
        { category: "Cibo", amount: 250 },
        { category: "Trasporti", amount: 120 },
        { category: "Divertimento", amount: 90 },
        { category: "Bollette", amount: 180 },
        { category: "Altro", amount: 60 }
    ];

    return (
        <>
            <h1 className="title-pages">ANDAMENTO SALDO</h1>
            <div className="container-fluid px-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Spese per Categoria</h2>
                        <p className="card-text">Distribuzione delle spese suddivise per categoria, per avere una visione immediata di dove vengono spesi i soldi.</p>
                    </div>
                    <PieChart width={600} height={300}>
                        <Pie data={data} dataKey={amount} fill="green"/>
                    </PieChart>
                </div>
            </div>
        </>
    )
}