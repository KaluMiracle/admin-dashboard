import Head from 'next/head'
import Image from 'next/image'
import styles from './invoice.module.scss'
import { navItemKeys } from '../../layouts/navItems';
import BaseLayout from "../../layouts/baseLayout";

const Invoice = () => {
    return(
        <BaseLayout active={navItemKeys.invoice}>

        </BaseLayout>
    )
    
}
export default Invoice;