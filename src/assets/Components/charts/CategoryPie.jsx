import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function CategoryPie({ transactions, title, description  }) {


  
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
    <div className="card chart-card" style={{ backgroundColor: "#f0f4ff", borderRadius: "8px" }}>
      <div className="card-body">
       <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
      <PieChart width={450} height={325} style={{ backgroundColor: "#f0f4ff", borderRadius: "8px" }}>
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
