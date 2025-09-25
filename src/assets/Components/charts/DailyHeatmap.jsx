import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

export default function DailyHeatmap({ transactions }) {
  // Raggruppiamo le transazioni per giorno e calcoliamo il totale
  const dailyData = transactions.reduce((acc, t) => {
    const date = t.date; // YYYY-MM-DD
    const found = acc.find(item => item.date === date);
    if (found) {
      found.total += t.amount;
    } else {
      acc.push({ date, total: t.amount });
    }
    return acc;
  }, []);

  // Calcolo il massimo per scalare i colori
  const maxTotal = Math.max(...dailyData.map(d => d.total));

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Heatmap Giornaliera</h2>
        <p className="card-text">Totale delle transazioni per giorno. Colore più intenso = totale più alto.</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyData} layout="vertical">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="date" width={80} />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8">
            {dailyData.map((entry, index) => {
              // Colore proporzionale al totale
              const intensity = Math.floor((entry.total / maxTotal) * 255);
              const color = `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
