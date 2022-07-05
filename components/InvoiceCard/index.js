import Image from 'next/image'
import cameraIcon from '../../assets/icons/camera.svg'
import calendarIcon from '../../assets/icons/calendar-blue.svg'
import locationIcon from '../../assets/icons/location-blue.svg'
import deleteIcon from '../../assets/icons/delete-pink.svg'
import moment from 'moment'

import styles from './invoice-card.module.scss'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { InvoiceContext, action_types } from '../../pages/_app'
import { invoiceList } from '../../layouts/Arrays'
import invoiceImage3 from '../../assets/images/image3.png'
const InputContainer = ({
    label='',
    small= false,
    image,
    value='',
    setInvoice,
    invoice,
    type: current

}) => {

    // invoice.date = moment(invoice.date)

    const type = value === 'date'? 'date' : 'text'

    if (current==='create'){
        invoice.date = moment(Date.now)
    }else{
        invoice.date == moment(invoice[value])
    }
    
    // const [inputValue, setInputValue] = useState(invoice[value])
    const [inputValue, setInputValue] = useState(invoice[value])

    // if (type==='date') {
    //     setInputValue(moment(inputValue))
    // }
    const saveChange = (e) => {
        console.log('handling')
        setInvoice({...invoice, [value]: inputValue})
    }

    useEffect(()=>{
        console.log(value, inputValue)
    },[value])
    return(
        <div className={styles.input} style={{
            width: `${small? '45%' : '100%'}`
        }}>
            <label>
                {label}
                <div className={styles.input_box}>
                    <input value={inputValue }  type={type} onChange={(e)=>setInputValue(e.target.value)} onMouseOut={saveChange}/>
                    {
                        image ? <div><Image src={image} alt= ''></Image></div> : ''

                    }

                </div>
            </label>
        </div>
    )
}
const InvoiceCard = ({
   
    index,
    setShowInvoiceCard,
    currentInvoice,
    setCurrentInvoice,
}) =>{

    const invoiceContext = useContext(InvoiceContext)
    

    const title ={
        create: 'Create New Invoice',
        edit: 'Edit Invoice'
    }
    const [invoice, setInvoice] = useState(currentInvoice)

    const [items, setItems] = useState(invoice.items)


    const deleteItem = (id) => {
        setItems([...items.filter(i => i.id !== id)])

    }

    


    const handleSave= ()=>{
        const props = {
            type: action_types.UPDATE_INVOICE,
            payload: {
                index: index,
                newInvoice: {...invoice, items: items}
            }
        }
        console.log(props.payload.newInvoice)
        if (type.current === 'create')   {
            invoiceContext.invoiceDispatch({...props, type: action_types.CREATE_INVOICE})
            console.log('create', invoice)
            setCurrentInvoice(props.payload.newInvoice)
            // setShowInvoiceCard(!showInvoiceCard)
            return
        }
        invoiceContext.invoiceDispatch(props)
        setCurrentInvoice(props.payload.newInvoice)
    }


    const type = useRef()
    useEffect(()=>{

        console.log('ee', invoiceContext.invoiceList.items[index])
        type.current = invoiceContext.invoiceList.items[index] ? 'edit' : 'create'
    })
    

    const defaultInputContainerProps ={
        setInvoice,
        invoice,
        type: type.current
    }
    
    return (
        <div className={styles.container_invoice} >
            <h2>{type.current==='create' ? title.create : title.edit}</h2>
            <div className={styles.image_container}>
                <div><Image src={cameraIcon} alt=''/></div>
            </div>
            <form className={styles.container_inputs}>
              <InputContainer small={true} value={'invoiceId'} label='Invoice Id' {...defaultInputContainerProps}/>
              <InputContainer small={true} value={'date'} label='Date' 
                // image={calendarIcon} 
                {...defaultInputContainerProps}/>
              <InputContainer small={false} value={'name'} label='Name' {...defaultInputContainerProps}/>
              <InputContainer small={true} value={'email'} label='Email'{...defaultInputContainerProps} />
              <InputContainer small={true} value={'street'} label='Address'image={locationIcon} {...defaultInputContainerProps}/>
            </form>
            <div className={styles.table_container}>
                <h3>Product Description</h3>
                <button style={{
                    width: '30px',
                    height: '30px',
                    fontSize: '20px'
                }}>
                    +
                </button>
                <table>
                    <thead>
                        <tr style={{
                            border: 'none',
                            ...styles
                        }}>
                            
                            <th>Product Name</th>
                            <th>Rate</th>
                            <th className={styles.qty}>QTY</th>
                            <th style={{
                                justifyContent: 'flex-end',
                            }}>Ammount</th>
                            <th className={styles.delete}></th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((val, index) => {
                        return (
                        <tr key={val.id} >
                            
                            <td className={styles.name}>
                                
                                {val.name}
                            </td>
                            <td >
                                {val.rate}
                            </td>
                            <td className={styles.qty}>
                                {val.qty}
                            </td>
                            <td className={styles.ammount}>{val.rate * val.qty}</td>
                            <td  className={styles.delete}>
                                <div onClick={()=>deleteItem(val.id)} ><Image src={deleteIcon} alt='' /></div>
                            </td>
                            
                        </tr>
                        )
                    })}
                    </tbody>
                    
                </table>
                <button 
                    onClick={()=> setShowInvoiceCard(false)} 
                    style={{
                    border: '1px solid #dcdfe2',
                    background: 'white',
                    color: '#3A36DB',
                }}>
                    Send Invoice
                </button>
                <button onClick={handleSave}>
                    {type.current === 'create' ? 'Create Invoice' : 'Save Changes'} 
                </button>
            </div>
            
        </div>
        
    )
}
export default InvoiceCard;