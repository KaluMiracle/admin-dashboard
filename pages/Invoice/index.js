import Head from 'next/head'
import Image from 'next/image'
import styles from './invoice.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys, invoiceList, } from '../../layouts/Arrays';

import emailIcon from '../../assets/icons/email.svg'
import calendarIcon from '../../assets/icons/calendar-small.svg'
import deleteIcon from '../../assets/icons/delete.svg'

import addIcon from '../../assets/icons/add-icon.svg'
import star from '../../assets/icons/star-green.svg'
import more from '../../assets/icons/more.svg'
import deletePink from '../../assets/icons/delete-pink.svg'
import edit from '../../assets/icons/edit.svg'


import { useContext, useState, useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import InvoiceCard from '../../components/InvoiceCard';
import PreviewCard from '../../components/PreviewCard';
import { InvoiceContext, action_types} from '../_app';






const Invoice = () => {

    const invoiceContext = useContext(InvoiceContext)
    
    const [listItems, setListItems] = useState(invoiceContext.invoiceList.items)
    const [checkedItems, setCheckedItems] = useState([])
    const [currentItem, setCurrentItem] = useState()
    const [showInvoiceCard, setShowInvoiceCard] = useState(false)
    const [invoiceCardProps, setInvoiceCardProps] = useState({})

    const [refresh, setRefresh] = useState(false)
    const rowRef = useRef()


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
    }
    const itemCheckHandler = (e, id) => {
        const {checked} = e.target;
        if(checked) setCheckedItems([...checkedItems, id])
        else setCheckedItems ([...checkedItems.filter(i => i !== id)])
        
    }

    // const doubleClickHandler = (id) => {
    //     console.log(rowRef.current.firstChild.children[0].checked)
        
    //     const {checked} = !rowRef.current.firstChild.children[0].checked;
    //     if(checked) setCheckedItems([...checkedItems, id])
    //     else setCheckedItems ([...checkedItems.filter(i => i !== id)])
    //     setRefresh(!refresh)
        
    // }

    const starHandler = (index) => {
        invoiceContext.invoiceDispatch({type: listItems[index].stared ? action_types.UNSTAR: action_types.STAR, payload: index})
        
    }

    const deleteItems = () => {
        
        checkedItems.forEach((item)=>{
            invoiceContext.invoiceDispatch({type: action_types.DELETE_INVOICE, payload: item})
        })
        setCheckedItems ([])
    }
    const deleteItem = (id) => {
        // listItems =  ([...listItems.filter(i => i.invoiceId !== id)])
        // setListItems(listItems)
        invoiceContext.invoiceDispatch({type: action_types.DELETE_INVOICE, payload: id})
        
    }
    const getBg = (status) => {
        switch (status) {
            case 'complete':
                return '#eeeefa';
                break;
            case 'pending':
                return ' #bbfcf8';
                break;
            case 'cancel':
                return '#fbeaf3';
                break;
        
        
            default:
                return '#3A36DB';

                break;
        }
    }

    const getColor = (status) => {
        switch (status) {
            case 'complete':
                return '#3A36DB';
                break;
            case 'pending':
                return '#03A89E';
                break;
            case 'cancel':
                return '#FF69B4';
                break;
        
        
            default:
                return '#03A89E';

                break;
        }
    }

    const handleEditClick =(invoice, index)=>{
        setCurrentItem(invoice)
        setInvoiceCardProps({
            ...invoiceCardProps, 
            type:'edit', 
            index: index, 
            currentInvoice: invoice,
            setCurrentInvoice: setCurrentItem
        })
        setShowInvoiceCard(!showInvoiceCard)
        console.log(invoice)
        
    }

    const handleCreateCLick =()=>{
        
        setInvoiceCardProps({
            ...invoiceCardProps, 
            type:'create', 
            index: invoiceList.length,
            setCurrentInvoice: setCurrentItem,
            currentInvoice: { 
                invoiceId: "", image: invoiceList[1].image, name: '', email: '', date: '', status: '', stared: true,items: []
            }
        })
        setShowInvoiceCard(!showInvoiceCard)
        
    }


    useEffect(()=>{
        setListItems(invoiceContext.invoiceList.items)
        
        console.log('layout')
    },[invoiceContext.invoiceList.items])

    
    return(


        <BaseLayout active={navItemKeys.invoice}>
            <div className={styles.main} style={{
                display: `${showInvoiceCard ? 'none' : 'flex'}`
            }}>
                <header>
                    <h2>Invoice List</h2>
                    <div className={styles.header_container}>
                        <input placeholder='Search' type={'search'}/>
                        <button onClick={handleCreateCLick}> 
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
                            <th className={styles.id}>Invoice id</th>
                            <th className={styles.tr_img}>Name</th>
                            <th className={`${styles.tr_img} ${styles.email}`}>Email</th>
                            <th className={styles.tr_img}>Date</th>
                            <th  style={{
                                    width: '15%',
                                    marginLeft: '30px',
                                ...styles

                            }}>Status</th>
                            <th style={{
                                    width: '10%',
                                    justifyContent: 'center'
                            }}><div onClick={deleteItems} style={{
                                width: '15px',
                                height: '20px',
                                position: 'relative',
                                ...styles
                            }}><Image src={deleteIcon} layout={'fill'} alt=''/></div></th>
                        </tr>
                        </thead>
                        <tbody>
                        {listItems.map((val, index) => {
                            return (
                            <tr ref={rowRef} key={index}  onDoubleClick={()=>handleEditClick(val, index)}>
                                <td className={styles.check_box}>
                                    <input checked={itemChecked(val.invoiceId)} type={'checkbox'} onChange={(e)=>itemCheckHandler(e, val.invoiceId)}/>
                                </td>
                                <td className={styles.id}>
                                    
                                    {val.invoiceId}
                                </td>
                                <td className={styles.tr_img}>
                                    <div className={styles.img}><Image src={val.image} alt='' quality={100}/></div>
                                    {val.name}
                                </td>
                                <td className={`${styles.tr_img} ${styles.email}`} >
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
                                    background: `${getBg(val.status)}`,
                                    color: `${getColor(val.status)}`,
                                }}>{val.status}</td>
                                <td style={{
                                    width: '10%',
                                    justifyContent: 'center',
                                }}>
                                    <div onClick={() => starHandler(index)} style={{
                                        opacity: `${val.stared ? 1 : 0.3}`
                                    }}><Image src={star} alt=''/></div>
                                    <div onClick={()=> setCurrentItem(val.invoiceId)}   onMouseEnter={()=> setCurrentItem(val.invoiceId)} style={{
                                        marginLeft: '30px',
                                        marginBottom: '5px',
                                        position:'sticky',
                                        zIndex:'4',
                                        ...styles
                                    }}><Image src={more} alt=''/></div>
                                    <div className={styles.box} style={{
                                        display: `${val.invoiceId === currentItem ? 'flex' : 'none'}`,
                                        ...styles
                                    }}>
                                        <div onClick={()=>{handleEditClick(val, index)}}>
                                            <div><Image src={edit} alt=''/></div>
                                            <p>edit</p>
                                        </div>
                                        <div onClick={()=>deleteItem(val.invoiceId)} style={{
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

            {showInvoiceCard ? 

                <div className={`${styles.main} ${styles.sub}`}>
                    <InvoiceCard  showInvoiceCard={showInvoiceCard} setShowInvoiceCard={setShowInvoiceCard}  {...invoiceCardProps}/>

                    <PreviewCard showInvoiceCard={showInvoiceCard} setShowInvoiceCard={setShowInvoiceCard} listItems={listItems} {...invoiceCardProps}/> 
                </div>

            :

            null}
            
            
            

        </BaseLayout>
    )
    
}
export default Invoice;
