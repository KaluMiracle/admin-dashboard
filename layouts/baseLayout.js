import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import logo from '../assets/images/logo-small.svg'
import logoutIcon from '../assets/icons/logout.svg'
import profilePicture from '../assets/images/profile-photo.png'
import upgrade from '../assets/images/upgrade.png'
import {navItems} from './Arrays'
import styles from './base-layout.module.scss'
import { useState } from 'react'


const NavListItem = ({
    icon,
    title,
    showDetials,
    setShowDetials,
    active
}) => {
    
    return (
        <div className={styles.list_item + " " +  (active ? styles.list_item_active : '')}>
            <div className={styles.image_container}  onClick={() => setShowDetials(!showDetials)} style={{
                background: `${active ? '#eeeefa' : '#ffffff'}`,
                ...styles
            }}>
                <div><Image src={icon} alt=''/></div>
            </div>
            <Link href={`/${title}`}>
                <p style={{
                    display: `${showDetials?'flex': 'none'}`,
                    
                    ...styles
                }}>{title}</p>
            </Link>
            
        </div>
    )
}
const BaseLayout = ({
    active,
    children
}) => {
    const [showDetials, setShowDetials] = useState(true)

    return(
        <div className={styles.index}>
            <Head>
                <title>{navItems[active].title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.nav}>
                <div><Image src={logo} alt=''/></div>
                <h3>Easin</h3>
                <div>
                    {
                        navItems.map (item =>{
                            return(
                                <NavListItem 
                                    key = {item.key}
                                    icon={item.key === active ? item.iconClicked : item.icon} 
                                    title={item.title}
                                    active={item.key === active} 
                                    showDetials={showDetials} 
                                    setShowDetials={setShowDetials}
                                />
                            )
                        })
                    }
                </div>

                <div className={styles.image_container_upgrade} style={{
                    display: `${showDetials?'flex': 'none'}`
                }}><Image src={upgrade} alt='' quality={100}/></div>
                <Link href={'/'}>
                    <div className={styles.logout} style={{
                        flexDirection: `${showDetials ? 'row': 'column'}`,
                        ...styles
                    }}>
                        <div className={styles.image_container}><Image src={profilePicture} alt='' quality={100}/></div>
                        <div className={styles.box} style={{
                            display: `${showDetials?'flex': 'none'}`,
                            ...styles
                        }}>
                            <h4>Easin Arafat</h4>
                            <p>Free Account</p>
                        </div>
                        <div><Image src={logoutIcon} alt=''/></div>
                    </div>
                </Link>
                
            </nav>
            {children}
        </div>
    )


}

export default BaseLayout