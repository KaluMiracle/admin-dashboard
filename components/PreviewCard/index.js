import Image from 'next/image'
import logo from '../../assets/images/logo-j.png'
import downloadIcon from '../../assets/icons/download.svg'
import printIcon from '../../assets/icons/print.svg'
import deleteIcon from '../../assets/icons/delete-pink.svg'



import styles from './preview-card.module.scss'
import { useState } from 'react'



const PreviewCard = ({
    item = {},
    showInvoiceCard,
    setShowInvoiceCard
}) =>{
    
    const [items, setItems] = useState(item.items)
    let subtotal = 0
    items.forEach(item => {
        
        subtotal += (item.rate * item.qty)
        // console.log(subtotal) 
    });

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
                        </p>
                        <p>VAT no.: 12345678</p>
                        

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
            
            
            <div className={styles.table_container}>
                
                <table>
                    <thead>
                        <tr style={{
                            border: 'none',
                            ...styles
                        }}>
                            
                            <th className={styles.name}>Description</th>
                            <th className={styles.qty}>QTY</th>
                            <th>Rate</th>
                            
                            <th style={{
                                justifyContent: 'flex-end',
                                width: '20%',
                            }}>Ammount</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((val, index) => {
                        return (
                        <tr key={val.id} >
                            
                            <td className={styles.name}>
                                
                                {val.name}
                            </td>
                            <td className={styles.qty}>
                                {val.qty}
                            </td>
                            <td >
                                {val.rate}
                            </td>
                            
                            <td className={styles.ammount}>{`${String(val.rate * val.qty)}.00 USD`}</td>
                            
                            
                        </tr>
                        )
                    })}
                        <tr>
                            <td className={styles.name}></td>
                            <td className={styles.blur}>subtotal</td>
                            <td></td>
                            <td className={styles.ammount}>{`${String(subtotal)}.00 USD`}</td>
                        </tr>
                        
                        <tr>
                            <td className={styles.name}></td>
                            <td className={styles.blur}>discount 5%</td>
                            <td></td>
                            <td className={styles.ammount}>{`${String(subtotal * 5/100)}.00 USD`}</td>
                        </tr>

                        <tr>
                            <td className={styles.name}></td>
                            <td>TOTAL</td>
                            <td></td>
                            <td  className={styles.ammount} style={{
                                color: '#3A36DB'
                            }}>{`${String(subtotal - (subtotal * 5/100))}.00 USD`}</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
                
            </div>

            <div className={styles.bank_details_container}>
                <p style={{
                    width: '100%'
                }}>Transfer the amount to the business account below. Please include invoice number on your check.</p>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        marginRight: '20px'
                    }}>BANK <span>FTSBUS33</span></p>
                    <p>IBAN <span>GB82-1111-2222-3333</span></p>
                </div>
                
            </div>

            <h6>NOTES</h6>
            <p>All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice. 
                Tax is not charged on the basis of paragraph 1 of Article 94 
                of the Value Added Tax Act (I am not liable for VAT).
            </p>
            <p>Thank you for you confidence in my work.</p>
            <p>Signiture</p>

            <div className={styles.footer}>
                <div>
                    <p>YOUR COMPANY</p>
                    <p>1331 Hart Ridge Road, 48436 Gaines, MI</p>
                </div>
                <div>
                    <p><span>@</span>your.mail@gmail.com</p>
                    <p><span>m</span> +386 989 271 3115</p>
                </div>
                <div style={{
                    width: '25%',
                }}>
                    <p style={{
                        fontSize: '8px',
                        lineHeight: '14px',
                        color: 'black'
                    }}>the company is registered in the business register under no. 87650000</p>
                </div>
            </div>
            
        </div>
        
    )
}
export default PreviewCard;