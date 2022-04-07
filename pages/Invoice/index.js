import Head from 'next/head'
import Image from 'next/image'
import styles from './invoice.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys, invoiceList, } from '../../layouts/Arrays';

import emailIcon from '../../assets/icons/email.svg'
import calendarIcon from '../../assets/icons/calendar-small.svg'

import addIcon from '../../assets/icons/add-icon.svg'




const Invoice = () => {

    const getColor = (status) => {
        switch (status) {
            case 'complete':
                return '#3A36DB';
                break;
            case 'pending':
                return ' #03A89E';
                break;
            case 'cancel':
                return '#FF69B4';
                break;
        
        
            default:
                return '#3A36DB';

                break;
        }
    }
    return(
        <BaseLayout active={navItemKeys.invoice}>
            <div className={styles.main}>
                <header>
                    <h2>Invoice</h2>
                    <div className={styles.header_container}>
                        <input placeholder='Search' type={'search'}/>
                        <button> 
                            <div style={{
                                marginRight: '10px',
                                ...styles
                            }}><Image src={addIcon} alt=''/></div>
                            Add New
                        </button>

                    </div>
                </header>
                <div className={styles.table_container}>
                    <table>
                        <thead>
                        <tr>
                            <th className={styles.tr_img}>Invoice id</th>
                            <th className={styles.tr_img}>Name</th>
                            <th className={styles.tr_img}>Email</th>
                            <th className={styles.tr_img}>Date</th>
                            <th style={{
                                width: '17%',
                                ...styles

                            }}>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {invoiceList.map((val, index) => {
                            return (
                            <tr key={val.invoiceId} style={{
                                background: `${(index + 1) % 2 === 0 ? 'inherit' : 'white'}`,
                                ...styles
                            }}>
                                <td className={styles.tr_img}>
                                    <input type={'checkbox'}/>

                                    #{val.invoiceId}
                                </td>
                                <td className={styles.tr_img}>
                                    <div className={styles.img}><Image src={val.image} alt='' quality={100}/></div>
                                    {val.name}
                                </td>
                                <td className={styles.tr_img} >
                                    <div className={`${styles.img} ${styles.img_small}`} style={{
                                        height: '10px',
                                        ...styles
                                    }}><Image src={emailIcon} alt='' quality={100}/></div>
                                    {val.email}
                                </td>
                                <td className={styles.tr_img}>
                                    <div className={`${styles.img} ${styles.img_small}`}><Image src={calendarIcon} alt='' quality={100}/></div>
                                    {val.date}
                                </td>
                                <td className={styles.status} style={{
                                    background: `${getColor(val.status)}`
                                }}>{val.status}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                        
                    </table>
                </div>

            </div>
            

        </BaseLayout>
    )
    
}
export default Invoice;
