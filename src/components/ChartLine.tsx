import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';

interface ChartLine {
  // Убрать опциональность
  labels?: string[];
  color?: string;
  // Убрать опциональность
  data?: number[];
}

export const ChartLine: FC<ChartLine> = ({
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  color = '#7677E2',
}) => {
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#fff',
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5, 6, 7], // Передавать data из пропсов
        borderColor: color,
        backgroundColor: color,
        lineTension: 0.4,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
