import Head from 'next/head'
import Image from 'next/image'
import styles from './calendar.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

 
const Calendard = () => {

    const [mode, setMode] = useState('month')
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }


    const CalenderHeader = ({
        date
    })=>{
        const [active, setActive] = useState(mode)

        

        const Radio = ({
            text = ''
        })=>{




            const handleClick = ()=> {
                setActive(text);
                setMode(text);
                
            }

            const classname = ` ${ active === text ? 
                ` ${styles.header_button} ${styles.active}`  :
                   styles.header_button }`
                

            return (
                
                <div className={classname} onClick={handleClick}>
                    {text}
                </div>
            )
        }
        return(
            <div className={styles.calendar_header}>
                <h1>{String(date.value._d).split(' ')[1]}</h1>
                <Radio text='day'/>
                <Radio text='week'/>
                <Radio text='month'/>
                <Radio text='year'/>
                
                
            </div>
        )
    }
    //{String(month._d)}

    const MiniCalendar = ({
        month
    })=>{
        return(
            <div className={styles.site_calendar_demo_card}>
                <Calendar headerRender={(date)=>{
                        console.log(String(date.value._d).split(' ')[1])
                
                    return <p>{String(date.value._d).split(' ')[1]}</p>}} fullscreen={true} 
                    dateFullCellRender={(date)=>{
                        // console.log(String(date._d).split(' ')[0])
                        return(<p>{String(date._d.getDate())}</p>)
                    }}
                onPanelChange={onPanelChange} value={month} />
            </div>
        )
    }
    return(
        <BaseLayout active={navItemKeys.calendar} >
            <div className={styles.index}>
                <Calendar onPanelChange={onPanelChange} className={styles.calendar} 
                headerRender={(date)=><CalenderHeader date={date}/>}
                mode={mode}
                monthFullCellRender={(date)=>

                    
                    
                        <div className={styles.content}>
                            <MiniCalendar key={0} month={date}/>
                        </div>


                }
                />
                
            </div>

            


            


        </BaseLayout>
        
    )
    
}
export default Calendard