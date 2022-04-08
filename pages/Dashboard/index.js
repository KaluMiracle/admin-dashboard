import Head from 'next/head'
import Image from 'next/image'
import star from '../../assets/icons/star.svg'

import { useState, useEffect } from 'react';
import styles from './dashboard.module.scss'
import { navItemKeys, topSellingProducts, analyticsInfo, recentOrders  } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";
import AreaChart from '../../components/AreaChart';
import PieChart from '../../components/PieChart';
import ProductCard from '../../components/ProductCard';


const AnalyticsCard = ({
    icon,
    ammount,
    title,
}) => {
    return(
        <div className={styles.card_analytics}>
            <div className={styles.img_analytics}><Image src={icon} alt=''/></div>
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
                    <div className={styles.header_container}>
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
                                {...item}
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
                        <AreaChart/>
                    </div>
                    
                </div>

                <div className={styles.chart_container} style={{
                    maxWidth: '500px',
                    ...styles
                }}>
                    <h2>Analytics</h2>
                    <PieChart/>
                </div>
                <div className={styles.chart_container} style={{
                    ...styles
                }}>
                    <h2>Recent Orders</h2>
                    <div className={styles.table_container}>
                        <table>
                        <thead>
                            <tr>
                            <th>Trackin no</th>
                            <th className={styles.name}>Product Name</th>
                            <th>Price</th>
                            <th style={{
                                width: '15%',
                                ...styles

                            }}>Total Order</th>
                            <th>Total Ammount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((val, index) => {
                            return (
                                <tr key={val.trackingNo} style={{
                                background: `${(index + 1) % 2 === 0 ? '#F1F4FA' : 'white'}`,
                                ...styles
                                }}>
                                <td>{val.trackingNo}</td>
                                <td className={styles.name}>
                                    <div className={styles.name_image}><Image src={val.image} alt='' quality={100}/></div>
                                    {val.name}
                                </td>
                                <td>${val.price}</td>
                                <td className={styles.total_order}>{val.totalOrder}</td>
                                <td>${val.price * val.totalOrder}</td>
                                </tr>
                            )
                            })}
                        </tbody>
                        
                        </table>
                    </div>
                    
                </div>
                <div className={styles.chart_container} style={{
                    maxWidth: '500px',
                    ...styles
                }}>
                    <h2>Top Selling Products</h2>
                    <div style={{
                      height: '90%',
                      overflow: 'scroll',
                      ...styles
                    }}>
                      {topSellingProducts.map(item =>{
                        return (
                            <ProductCard
                                key={item.key} 
                                {...item}
                            />
                        )
                    })}
                    </div>
                    
                </div>

            </main>

        </BaseLayout>
    )
    
}
export default Dashboard