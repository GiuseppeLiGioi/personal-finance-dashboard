import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={balanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cfd8dc" />
          <XAxis
            dataKey="date"
            tick={({ x, y, payload }) => (
              <text
                x={x - 10}        // sposta leggermente a sinistra
                y={y + 20}        // margine sotto il grafico
                textAnchor="middle"
                fontWeight="bold"
                fill="#1f2937"
              >
                {payload.value} 
              </text>
            )}
          />
          <YAxis tick={{ fontWeight: "bold", fill: "#1f2937" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px", border: "none" }}
            labelStyle={{ fontWeight: 700 }}
          />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#4e73df" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
