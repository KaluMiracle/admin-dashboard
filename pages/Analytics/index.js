import Head from 'next/head'
import Image from 'next/image'
import styles from './analytics.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys, customerList, } from '../../layouts/Arrays';

import addIcon from '../../assets/icons/add-icon.svg'
import more from '../../assets/icons/more.svg'
import deletePink from '../../assets/icons/delete-pink.svg'
import edit from '../../assets/icons/edit.svg'
import defaultImage from '../../assets/images/image-large.png'
import locationIcon from '../../assets/icons/location.svg'
import callIcon from '../../assets/icons/call.svg'
import messageIcon from '../../assets/icons/message-grey.svg'
import AddCustomerModal from '../../components/AddCustomerModal';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';





const Analytics = () => {
     const [listItems, setListItems] = useState(customerList)
    const [currentItem, setCurrentItem] = useState(listItems[0])
    const [showAddModal, setShowAddModal] = useState(false)

    
    const deleteItem = (id) => {
        listItems =  ([...listItems.filter(i => i.id !== id)])
        setListItems(listItems)
    }
    const getBg = (status) => {
        switch (status) {
            case 'Male':
                return ' #bbfcf8';
                break;
            case 'Female':
                return '#fbeaf3';
                break;
        
        
            default:
                return '#3A36DB';

                break;
        }
    }

    const getColor = (status) => {
        switch (status) {
            case 'Male':
                return '#03A89E';
                break;
            case 'Female':
                return '#FF69B4';
                break;
        
        
            default:
                return '#03A89E';

                break;
        }
    }
    
    return(
        <BaseLayout active={navItemKeys.analytics}>
            <div className={styles.main}>
                <header>
                    <h2>Customer List</h2>
                    <div className={styles.header_container}>
                        <button onClick={()=> setShowAddModal(true)}> 
                            <div style={{
                                marginRight: '10px',
                                ...styles
                            }}><Image src={addIcon} alt=''/></div>
                            Add Customer
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
                            <th className={styles.tr_img}>Name</th>
                            <th className={`${styles.tr_img}`}>Email</th>
                            <th className={styles.tr_img}>Phone Number</th>
                            <th  style={{
                                    width: '13%',
                                ...styles

                            }}>Gender</th>
                            <th style={{
                                    width: '5%',
                            }}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {listItems.map((val, index) => {
                            return (
                            <tr key={index}  onClick={()=>setCurrentItem(val)}  >
                                
                                <td className={styles.tr_img}>
                                    <div className={styles.img}><Image src={val.image} alt='' quality={100}/></div>
                                    {val.name}
                                </td>
                                <td className={`${styles.tr_img}`} >
                                    {val.email}
                                </td>
                                <td className={styles.tr_img}>
                                    {val.phoneNumber}
                                </td>
                                <td className={styles.gender} style={{
                                    background: `${getBg(val.gender)}`,
                                    color: `${getColor(val.gender)}`,
                                }}>{val.gender}</td>
                                <td style={{
                                    width: '5%',
                                }}>
                                    
                                    <div 
                                    // onClick={()=> setCurrentItem(val)}   onMouseEnter={()=> setCurrentItem(val.id)}
                                    ><Image src={more} alt=''/></div>
                                    <div className={styles.box} style={{
                                        // display: `${val.id === currentItem.id ? 'flex' : 'none'}`,
                                        ...styles
                                    }}>
                                        <div>
                                            <div><Image src={edit} alt=''/></div>
                                            <p>edit</p>
                                        </div>
                                        <div onClick={()=>deleteItem(val.id)}  style={{
                                                background: '#fbeaf3',
                                                ...styles
                                        }}>
                                            <div><Image src={deletePink} alt=''/></div>
                                            <p>delete</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                        
                    </table>

                    
                </div>
                

            </div>
            {
                showAddModal ?
                    <AddCustomerModal 
                        visible={showAddModal} 
                        setVisible={setShowAddModal} 
                        listItems={listItems} 
                        setListItems={setListItems}
                    /> 
                :
                    <div  className={styles.container_side}>
                        <div className={`${styles .name_container} ${styles.border}`}>
                            <div className={styles.image}>
                                <div><Image src={defaultImage} alt= '' layout='fill' quality={100}/></div>
                            </div>
                            <h2>{currentItem.name}</h2>
                            <p>{currentItem.occupation}</p>
                        </div>
                        <h2>Contact Info</h2>
                        <div className={`${styles.container_detail} ${styles.border}`}>
                            <div><Image src={messageIcon} alt=''/></div>
                            <h2>{currentItem.email}</h2>
                        </div>
                        <div className={`${styles.container_detail} ${styles.border}`}>
                            <div><Image src={callIcon} alt=''/></div>
                            <h2>{currentItem.phoneNumber}</h2>
                        </div>
                        <div className={styles.container_detail}>
                            <div><Image src={locationIcon} alt=''/></div>
                            <h2>2239 Hog Camp Road Schaumburg</h2>
                        </div>

                    </div>
            }

            

        </BaseLayout>
    )
    
}
export default Analytics;
