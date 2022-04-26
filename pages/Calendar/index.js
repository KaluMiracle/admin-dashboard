import Head from 'next/head'
import Image from 'next/image'
import styles from './calendar.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";
import { Calendar } from 'antd';
import 'antd/dist/antd.css'; 
const Calendard = () => {
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    return(
        <BaseLayout active={navItemKeys.calendar}        >


            <Calendar onPanelChange={onPanelChange} 
                monthCellRender={()=>{
                <div className={styles.site_calendar_demo_card}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>}}
            />


            


        </BaseLayout>
    )
    
}
export default Calendard