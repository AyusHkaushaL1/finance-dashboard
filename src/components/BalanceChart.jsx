import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BalanceChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="mb-2">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;