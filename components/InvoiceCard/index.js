import Image from 'next/image'
import cameraIcon from '../../assets/icons/camera.svg'
import calendarIcon from '../../assets/icons/calendar-blue.svg'
import locationIcon from '../../assets/icons/location-blue.svg'
import deleteIcon from '../../assets/icons/delete-pink.svg'


import styles from './invoice-card.module.scss'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { InvoiceContext, action_types } from '../../pages/_app'
import { invoiceList } from '../../layouts/Arrays'

const InputContainer = ({
    label='',
    small= false,
    image,
    value='',
    setInvoice,
    invoice

}) => {


    const [inputValue, setInputValue] = useState(invoice[value]? invoice[value] : 'street')
    

    const saveChange = (e) => {
        console.log('handling')
        setInvoice({...invoice, [value]: inputValue})
    }

    useEffect(()=>{
    },[value])
    return(
        <div className={styles.input} style={{
            width: `${small? '45%' : '100%'}`
        }}>
            <label>
                {label}
                <div className={styles.input_box}>
                    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onMouseOut={saveChange}/>
                    {
                        image ? <div><Image src={image} alt= ''></Image></div> : ''

                    }

                </div>
            </label>
        </div>
    )
}
const InvoiceCard = ({
    type= 'create',
    index,
    showInvoiceCard,
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
        invoiceContext.invoiceDispatch({
            type: action_types.UPDATE_INVOICE,
            payload: {
                index: index,
                newInvoice: {...invoice, items: items}
            }
        })
        setCurrentInvoice({...invoice, items: items})


    }

    
    return (
        <div className={styles.container_invoice} >
            <h2>{type==='create' ? title.create : title.edit}</h2>
            <div className={styles.image_container}>
                <div><Image src={cameraIcon} alt=''/></div>
            </div>
            <form className={styles.container_inputs}>
              <InputContainer small={true} value={'invoiceId'} label='Invoice Id' setInvoice={setInvoice} invoice={invoice}/>
              <InputContainer small={true} value={'date'} label='Date' image={calendarIcon} setInvoice={setInvoice} invoice={invoice}/>
              <InputContainer small={false} value={'name'} label='Name' setInvoice={setInvoice} invoice={invoice}/>
              <InputContainer small={true} value={'email'} label='Email' setInvoice={setInvoice} invoice={invoice} />
              <InputContainer small={true} value={'street'} label='Address'image={locationIcon} setInvoice={setInvoice} invoice={invoice}/>
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
                <button onClick={()=> setShowInvoiceCard(!showInvoiceCard)} style={{
                    border: '1px solid #dcdfe2',
                    background: 'white',
                    color: '#3A36DB',
                }}>
                    Send Invoice
                </button>
                <button onClick={handleSave}>
                    {type === 'create' ? 'Create Invoice' : 'Save Changes'} 
                </button>
            </div>
            
        </div>
        
    )
}
export default InvoiceCard;