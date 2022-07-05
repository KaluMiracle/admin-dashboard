import {Modal} from "antd"
import styles from './add-customer-modal.module.scss'
import closeIcon from '../../assets/icons/close-icon-pink.svg'
import clock from '../../assets/icons/clock-pink.svg'
import peopleIcon from '../../assets/icons/people-icon.svg'
import locationIcon from '../../assets/icons/location-icon.svg'
import saveIcon from '../../assets/icons/download-icon.svg'
import invoiceImage1 from '../../assets/images/image1.png'
import cameraIcon from '../../assets/icons/camera.svg'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"


const AddCustomerModal = ({
    visible,
    setVisible,
    listItems,
    setListItems
}) =>{
    const newCustomer = {
        image: invoiceImage1, 
        firstname: '',
        lastname: '',
        name: '' ,
        email: '', 
        phoneNumber: '', 
        gender: '', 
        location: "", 
        occupation: ''
    }

    const customerProps = {
        image: "image", 
        firstname: 'firstname',
        lastname: 'lastname',
        name: "name", 
        email: 'email', 
        phoneNumber: 'phoneNumber', 
        gender: 'gender', 
        location: 'location', 
        occupation: 'occupation'
    }
    
    useEffect(()=>{
    })

    const handleChange = (e) => {
        const {name, value } = e.target
        newCustomer[name] = value
    }
    const handleSave= () => {
        setListItems([...listItems, newCustomer])
        setVisible(false)
        console.log('newcustomer', newCustomer)
        
    }
    return (
        <div className={styles.modal}>
            <form className={styles.modal_content}>
                <div className={styles.header}>
                    <h2>Add Customer</h2>
                    <div 
                        style={{
                            cursor: 'pointer'
                        }} 
                        onClick ={()=>
                            setVisible(false)
                        }
                    ><Image alt='close' src={closeIcon} /> </div>

                </div>
                

                <div className={styles.image_container}>
                    <div><Image src={cameraIcon} alt=''/></div>
                </div>

                <label>
                    Name
                    <input name={customerProps.name} placeholder="john" onChange={(e) =>handleChange(e)}/>
                </label>
                <label>
                    Occupation
                    <input name={customerProps.occupation} placeholder="lawyer" onChange={(e) =>handleChange(e)}/>
                </label>
                <label>
                    Email
                    <input name={customerProps.email} placeholder="example@gmail.com" onChange={(e) =>handleChange(e)}/>
                </label>
                <label>
                    Phone Number
                    <input name={customerProps.phoneNumber}  placeholder="08039393993" onChange={(e) =>handleChange(e)}/>
                </label>
                <label>
                    Gender
                    <input name={customerProps.gender} placeholder="male" onChange={(e) =>handleChange(e)}/>
                </label>
                <label>
                    Address
                    <input name={customerProps.location} placeholder="Address" onChange={(e) =>handleChange(e)}/>
                </label>

                

                <div className={styles.save_button} onClick={handleSave} > 
                    Add Customer
                </div>
            </form>

        </div>

        

        
    )
}




export default AddCustomerModal;