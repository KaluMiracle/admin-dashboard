import Head from 'next/head'
import Image from 'next/image'
import styles from './settings.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";

const Calendar = () => {
    return(
        <BaseLayout active={navItemKeys.settings}>

        </BaseLayout>
    )
    
}
export default Calendar