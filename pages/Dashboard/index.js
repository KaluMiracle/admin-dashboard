import Head from 'next/head'
import Image from 'next/image'
import salesIcon from '../../assets/icons/sales-products.svg'
import saveicon from '../../assets/icons/save-products.svg'
import jobsIcon from '../../assets/icons/job-application.svg'
import stockIcon from '../../assets/icons/stock-products.svg'
import { useState, useEffect } from 'react';

import styles from './dashboard.module.scss'
import { navItemKeys } from '../../layouts/navItems';
import BaseLayout from "../../layouts/baseLayout";
import { Area } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Sale',
      value: 27,
    },
    {
      type: 'Distribution',
      value: 25,
    },
    {
      type: 'Return',
      value: 18,
    },
    
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize:'15px'
        },
        content: '80%\nTransactions',
      },
    },
  };
  return <Pie {...config} />;
};


const DemoArea = () => {
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



const analyticsInfo = [
    {key: 1, icon: saveicon, ammount: 178, title: 'Save Products'},
    {key: 2, icon: stockIcon, ammount: 20, title: 'Stock Products'},
    {key: 3, icon: salesIcon, ammount: 190, title: 'Sales Products'},
    {key: 4, icon: jobsIcon, ammount: 12, title: 'Job Applications'},
]

const AnalyticsCard = ({
    icon,
    ammount,
    title,
}) => {
    return(
        <div className={styles.card_analytics}>
            <div><Image src={icon} alt=''/></div>
            <div className={styles.details}>
                <h2>{ammount}+</h2>
                <p>{title}</p>
            </div>
        </div>
    )

}
const Dashboard = () => {
    return(
        <BaseLayout active={navItemKeys.dashboard}>
            <main className={styles.main}>
                <header>
                    <h2>Dashboard</h2>
                    <div>
                        <select>
                            <option>10-06-2021</option>
                        </select>
                        <select>
                            <option>10-06-2021</option>
                        </select>
                    </div>
                </header>

                <div className={styles.cards_container}>
                    {analyticsInfo.map(item =>{
                        return (
                            <AnalyticsCard 
                                key={item.key}
                                icon={item.icon}
                                title={item.title}
                                ammount={item.ammount}
                            />
                        )
                    })}
                </div>
                <div className={styles.chart_container}>
                    <h2>Report</h2>
                    <div style={{
                        width: "100%",
                        height: '95%',
                        marginTop: '20px',
                    }}>
                        <DemoArea/>
                    </div>
                    
                </div>

                <div className={styles.chart_container} style={{
                    maxWidth: '500px',
                    ...styles
                }}>
                    <h2>Analytics</h2>
                    <DemoPie/>
                </div>
                
            </main>
        </BaseLayout>
    )
    
}
export default Dashboard