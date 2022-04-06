import Head from 'next/head'
import Image from 'next/image'
import styles from './analytics.module.scss'
import { useState, useEffect } from 'react';
import { navItemKeys } from '../../layouts/navItems';
import BaseLayout from "../../layouts/baseLayout";

const Analytics = () => {
    return(
        <BaseLayout active={navItemKeys.analytics}>
        
            
        </BaseLayout>
    )
    
}
export default Analytics
