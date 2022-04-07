import Head from 'next/head'
import Image from 'next/image'
import styles from './calendar.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";

const Calendar = () => {
    return(
        <BaseLayout active={navItemKeys.calendar}>

        </BaseLayout>
    )
    
}
export default Calendar