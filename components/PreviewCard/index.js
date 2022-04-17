import Image from 'next/image'
import logo from '../../assets/images/logo-j.png'
import downloadIcon from '../../assets/icons/download.svg'
import printIcon from '../../assets/icons/print.svg'
import deleteIcon from '../../assets/icons/delete-pink.svg'



import styles from './preview-card.module.scss'
import { useState } from 'react'



const PreviewCard = ({
    type = 'create',
    item = {},
    showInvoiceCard,
    setShowInvoiceCard
}) =>{
    
    const [items, setItems] = useState(item.items)
    


    return (
        <div className={styles.container_preview} style={{
            display: `${showInvoiceCard ? 'flex' : 'none'}`
        }}>
            <div className={styles.header}>
                <h5>Preview</h5>
                <div className={styles.icons}>
                    <div><Image src={downloadIcon} alt=''/></div>
                    <div><Image src={printIcon} alt=''/></div>
                </div>
            </div>

            <div className={styles.card}>

                <div className={styles.row}>
                    <div className={styles.image_container}>
                        <div><Image src={logo} alt=''/></div>
                    </div>
                    <div>
                        <p><span>@</span>your.mail@gmail.com</p>
                        <p><span>m</span> +386 989 271 3115</p>
                    </div>
                    
                </div>

                
                <div className={styles.row}>
                    
                    <h6>Recipient</h6>
                    <h5 className={styles.large}>Invoice</h5>
                </div>
                <div className={styles.row}>
                    <div>
                        <p className={styles.details}>{item.name}</p>
                        <p className={styles.details}>
                            4304 Liberty Avenue
                            92680 Tustin, CA
                            VAT no.: 12345678
                        </p>
                        

                    </div>

                    <div>
                        <p>invoice no</p>
                        <p className={styles.details}>{item.invoiceId}</p>
                    </div>
                    
                    
                </div>

                <div className={styles.row}>
                    <div>
                        <p><span>@</span>{item.email}</p>
                        <p><span>m</span> +386 989 271 3115</p>
                    </div>
                    <div>
                        <p>invoice date</p>
                        <p className={styles.details}>{item.date}</p>
                    </div>
                    
                </div>
            </div>
            
            
            {/* <div className={styles.table_container}>
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
                
            </div> */}
            
        </div>
        
    )
}
export default PreviewCard;