import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
  Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  const indexCoin = coinHistory?.data?.history;
  for (let i = 0; i < indexCoin?.length; i += 1) {
    coinPrice.push(indexCoin[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const options = {
    scales: {
      scales: {
        xAxis: {
          // The axis for this scale is determined from the first letter of the id as `'x'`
          // It is recommended to specify `position` and / or `axis` explicitly.
          type: 'time',
        }
      }
    },
  };

  // console.log(coinPrice);
  // console.log(coinTimestamp);
  // console.log(coinHistory?.data?.history?.length);
  // console.log(coinHistory?.data?.history);


  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <p>Line Chart masih error versi lama</p>

      <Line data={data}  />
    </>
  );
};

export default LineChart;
