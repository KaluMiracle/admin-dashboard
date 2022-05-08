import {Modal} from "antd"
import styles from './event-modal.module.scss'
import closeIcon from '../../assets/icons/close-icon-pink.svg'
import clock from '../../assets/icons/clock-pink.svg'
import peopleIcon from '../../assets/icons/people-icon.svg'
import locationIcon from '../../assets/icons/location-icon.svg'
import calendarIcon from '../../assets/icons/calendar-icon-pink.svg'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"


const EventModal = ({
    visible,
    setVisible,
    date = '',
    events,
    setEvents 
}) =>{
    const InputRef = useRef()
    
    useEffect(()=>{
    })
     const getString = (index)=> String(date._d).split(' ')[index]

    const handleSave= () => {
        
        if ( events[getString(1).toLowerCase()]){
           
            let arr = events[getString(1).toLowerCase()]
            let arrindex = 50
            
            arr.find((i , index) => { 
                arrindex = index; 
                return i.day === parseInt(getString(2)) 
            }) ?

                events[getString(1).toLowerCase()][arrindex].event.push(
                    InputRef.current.value
                )
                
                :

                events[getString(1).toLowerCase()].push({
                        day: parseInt(getString(2)),
                        event: [InputRef.current.value]
                })
            
            
        }else{
            events[getString(1).toLowerCase()] = [{
                day: parseInt(getString(2)),
                event: [InputRef.current.value]
            }]

        }
        
        setEvents({...events})

        setVisible(false)
    }
    return (


        <div className={styles.event_modal} >
            <div className={styles.event_modal_content}>
                <div className={styles.header}>
                    <h3>Create an Event</h3>
                    <div style={{
                        cursor: 'pointer'
                    }}><Image alt='close' src={closeIcon} /> </div>
                </div>

                <div className={styles.nav}>
                    <div className={styles.nav_item}>Event</div>
                    <div className={styles.nav_item}>Reminder</div>
                    <div className={styles.nav_item}>Task</div>
                    
                </div>
                <input ref={InputRef} placeholder="Add title"/>
                <div className={styles.details_container}>
                    <div className={styles.icon_container}>
                        <div><Image alt='' src={clock}/> </div>
                    </div>
                    <div className={styles.details}>
                        <p>{getString(0)} {getString(1)} {getString(2)}  12:00pm - 1:00pm</p>
                        <span>Time zone - Does not repeat</span>
                    
                    </div>
                </div>

                <h6>Find a Time</h6>

                <div className={styles.buttons_container}>
                    <div className={styles.button}>
                        <div><Image alt=" " src={peopleIcon}/></div>
                        <p>Add people</p>
                    </div>

                    <div className={styles.button + ' ' + styles.white}>
                        <div><Image alt=" " src={locationIcon}/></div>
                        <p>Add location</p>
                    </div>
                </div>

                <div className={styles.details_container}>
                    <div className={styles.icon_container}>
                        <div ><Image alt='' src={clock} /> </div>
                    </div>
                    <div className={styles.details}>
                        <p>john Deo</p>
                        <span>Busy - efault visibilty - notify 30 minutes before</span>
                    </div>
                </div>


                <div className={styles.footer + ' ' +  styles.buttons_container} > 
                    <div className={styles.button + ' ' + styles.white} onClick={()=>setVisible(false)}> 
                        <p>Close</p>
                    </div>

                    <div className={styles.button} onClick={handleSave}>
                        <p>Save</p>
                    </div>
                </div>
            </div>

        </div>

        
    )
}




export default EventModal;