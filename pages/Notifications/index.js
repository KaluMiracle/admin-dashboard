import Head from 'next/head'
import Image from 'next/image'
import styles from './notifications.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";

const Notifications = () => {
    return(
        <BaseLayout active={navItemKeys.notifications}>

        </BaseLayout>
    )
    
}
export default Notifications