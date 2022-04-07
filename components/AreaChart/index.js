import { Area } from '@ant-design/plots';
import { useState, useEffect } from 'react';

const AreaChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(260) 0.93:rgba(58, 54, 219, 0.5)  0.0:rgba(255, 105, 180, 0.35)',
        // linear-gradient(89.96deg, rgba(58, 54, 219, 0.5) -0.98%, rgba(255, 105, 180, 0.35) 100%);
      };
    },

    animation: true,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  };

  return <Area {...config} />;
}

export default AreaChart;