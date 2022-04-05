import Head from 'next/head'
import Image from 'next/image'
// import styles from './schedule.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys } from '../../layouts/navItems';

const Schedule = () => {
    return(
        <BaseLayout active={navItemKeys.schedule}>

        </BaseLayout>
    )
    
}
export default Schedule;