import Image from 'next/image'
import cameraIcon from '../../assets/icons/camera.svg'
import calendarIcon from '../../assets/icons/calendar-blue.svg'
import locationIcon from '../../assets/icons/location-blue.svg'
import deleteIcon from '../../assets/icons/delete-pink.svg'



import styles from './invoice-card.module.scss'
import { useState } from 'react'


const InputContainer = ({
    label='',
    small= false,
    image,
    placeholder=''
}) => {

    return(
        <div className={styles.input} style={{
            width: `${small? '40%' : '100%'}`
        }}>
            <label>
                {label}
                <div className={styles.input_box}>
                    <input placeholder={placeholder}/>
                    {
                        image ? <div><Image src={image} alt= ''></Image></div> : ''

                    }

                </div>
            </label>
        </div>
    )
}
const InvoiceCard = ({
    type = 'create',
    item = {},
    showInvoiceCard,
    setShowInvoiceCard
}) =>{
    const title ={
        create: 'Create New Invoice',
        edit: 'Edit Invoice'
    }
    const [items, setItems] = useState(item.items)
    const deleteItem = (id) => {
        console.log('dd')
        // items =  ([...items.filter(i => i.invoiceId !== id)])
        setItems([...items.filter(i => i.id !== id)])
    }
    return (
        <div className={styles.container_invoice} style={{
            display: `${showInvoiceCard ? 'flex' : 'none'}`
        }}>
            <h2>{type==='create' ? title.create : title.edit}</h2>
            <div className={styles.image_container}>
                <div><Image src={cameraIcon} alt=''/></div>
            </div>
            <form className={styles.container_inputs}>
              <InputContainer small={true} placeholder={item.invoiceId} label='Invoice Id'/>
              <InputContainer small={true} placeholder={item.date} label='Date' image={calendarIcon}/>
              <InputContainer small={false} placeholder={item.name} label='Name'/>
              <InputContainer small={true} placeholder={item.email} label='Email' />
              <InputContainer small={true} placeholder={'street'} label='Address'image={locationIcon}/>
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
                <button>
                    {type === 'create' ? 'Create Invoice' : 'Save Changes'} 
                </button>
            </div>
            
        </div>
        
    )
}
export default InvoiceCard;