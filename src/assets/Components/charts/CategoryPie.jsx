import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function CategoryPie({ transactions }) {

  const totaleEntrate = transactions
    .filter(t => t.type === "entrata")
    .reduce((sum, t) => sum + t.amount, 0);

  const totaleUscite = transactions
    .filter(t => t.type === "uscita")
    .reduce((sum, t) => sum + t.amount, 0);

  const pieData = [
    { name: "Entrate", value: totaleEntrate },
    { name: "Uscite", value: totaleUscite }
  ];

  const COLORS = ["#28a745", "#dc3545"]; // verde = entrate, rosso = uscite

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Entrate vs Uscite</h2>
        <p className="card-text">Distribuzione tra entrate e uscite per il periodo selezionato.</p>
      </div>
      <PieChart width={450} height={300}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
