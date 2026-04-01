import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const CategoryChart = ({ data }) => {
  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="mb-2">Spending</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name">
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;