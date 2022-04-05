import Head from 'next/head'
import Image from 'next/image'
import salesIcon from '../../assets/icons/sales-products.svg'
import saveicon from '../../assets/icons/save-products.svg'
import jobsIcon from '../../assets/icons/job-application.svg'
import stockIcon from '../../assets/icons/stock-products.svg'

import styles from './dashboard.module.scss'
import { navItemKeys } from '../../layouts/navItems';
import BaseLayout from "../../layouts/baseLayout";

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
                
            </main>
        </BaseLayout>
    )
    
}
export default Dashboard