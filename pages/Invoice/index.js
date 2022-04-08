import Head from 'next/head'
import Image from 'next/image'
import styles from './invoice.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys, invoiceList, } from '../../layouts/Arrays';

import emailIcon from '../../assets/icons/email.svg'
import calendarIcon from '../../assets/icons/calendar-small.svg'

import addIcon from '../../assets/icons/add-icon.svg'
import { useState } from 'react';
import { useLayoutEffect } from 'react';





const Invoice = () => {
    const [checkedItems, setCheckedItems] = useState([])
    const [listItems, setListItems] = useState(invoiceList)

    const itemChecked = (id) =>  Boolean(checkedItems.find(i => i === id))

    const checkAllHandler = (e) =>{
        const {checked} = e.target;

        const idArr = []
        invoiceList.map(item =>{
            idArr = [...idArr, item.invoiceId]
            return (idArr)
        })
        if(checked) setCheckedItems([...idArr])
        else setCheckedItems ([])
        console.log(checkedItems)
    }
    const itemCheckHandler = (e, id) => {
        const {checked} = e.target;
        if(checked) setCheckedItems([...checkedItems, id])
        else setCheckedItems ([...checkedItems.filter(i => i !== id)])
        
    }

    const deleteItems = () => {
        checkedItems.forEach(checkedItem => {
            listItems.forEach(item => {
               if (item.invoiceId === checkedItem) {
                    listItems =  ([...listItems.filter(i => i != item)])
                    checkedItems = ([...checkedItems.filter(i => i != checkedItem)])
                }

            })
        }) 
        setCheckedItems (checkedItems)
        setListItems(listItems)
    }
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

    // useLayoutEffect (()=>{
    //     setListItems(listItems)
    // }, [listItems])
    return(
        <BaseLayout active={navItemKeys.invoice}>
            <div className={styles.main}>
                <header>
                    <h2>Invoice</h2>
                    <div className={styles.header_container}>
                        <input placeholder='Search' type={'search'}/>
                        <button onClick={deleteItems}> 
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
                        <tr style={{
                            background: 'inherit',
                            ...styles
                        }}>
                            <th className={styles.check_box} >
                                <input type={'checkbox'} checked={checkedItems.length !== 0 && listItems.length !== 0 }  onChange={checkAllHandler}/>

                            </th>
                            <th className={styles.tr_img}>Invoice id</th>
                            <th className={styles.tr_img}>Name</th>
                            <th className={styles.tr_img}>Email</th>
                            <th className={styles.tr_img}>Date</th>
                            <th style={{
                                width: '21%',
                                ...styles

                            }}>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listItems.map((val, index) => {
                            return (
                            <tr key={val.invoiceId}>
                                <td className={styles.check_box}>
                                    <input checked={itemChecked(val.invoiceId)} type={'checkbox'} onChange={(e)=>itemCheckHandler(e, val.invoiceId)}/>
                                </td>
                                <td className={styles.tr_img}>
                                    
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
