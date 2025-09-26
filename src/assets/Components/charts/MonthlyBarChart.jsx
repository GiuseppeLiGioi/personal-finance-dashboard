import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function MonthlyBarChart({ transactions, title, description  }) {


  // Raggruppo le uscite per mese
  const monthlyData = transactions.reduce((acc, t) => {
    if (t.type === "uscita") {
      const month = new Date(t.date).toLocaleString("it-IT", { month: "short", year: "numeric" });
      const found = acc.find(item => item.month === month);
      if (found) {
        found.total += t.amount;
      } else {
        acc.push({ month, total: t.amount });
      }
    }
    return acc;
  }, []);

  return (
    <div className="card chart-card" style={{ backgroundColor: "#f0f4ff", borderRadius: "8px" }}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
      <BarChart width={200} height={325} data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} style={{ backgroundColor: "#f0f4ff", borderRadius: "8px" }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#dc3545" name="Uscite" />
      </BarChart>
    </div>
  );
}
