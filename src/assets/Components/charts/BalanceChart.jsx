import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function BalanceChart({ transactions }) {

  // Creo i dati cumulativi per il grafico
  const balanceData = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t, index, arr) => {
      const saldoCumulativo = arr
        .slice(0, index + 1)
        .reduce((sum, tr) => tr.type === "entrata" ? sum + tr.amount : sum - tr.amount, 0);
      return {
        date: t.date,
        balance: saldoCumulativo
      };
    });

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Andamento Saldo</h2>
      </div>
      <LineChart width={800} height={300} data={balanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#4e73df" />
      </LineChart>
    </div>
  );
}
