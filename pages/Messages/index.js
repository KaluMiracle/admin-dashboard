import Head from 'next/head'
import Image from 'next/image'
import styles from './messages.module.scss'
import { navItemKeys } from '../../layouts/navItems';
import BaseLayout from "../../layouts/baseLayout";

const Messages = () => {
    return(
        <BaseLayout active={navItemKeys.messages}>

        </BaseLayout>
    )
    
}
export default Messages