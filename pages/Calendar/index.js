import Head from 'next/head'
import Image from 'next/image'
import styles from './calendar.module.scss'
import { navItemKeys } from '../../layouts/Arrays';
import BaseLayout from "../../layouts/baseLayout";
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import addIcon from '../../assets/icons/add-icon.svg'
import { customerList } from '../../layouts/Arrays';
import moment from 'moment';
import EventModal from '../../components/EventModal';

const people = []
for (let index = 0; index < 3; index++) {
    people.push(customerList[index]);
    
}

const eventsList= {
    'may': [{
        day: 1,
        event: ['meeting with ceo',]
    }],
    'jun': [
        {
            day: 2,
            event: ['meeting with ceo',]
        },
        {
            day: 7,
            event: ['htgt' ]
        },{
            day: 21,
            event: ['htgt'] 
        }
    ],
    'sep': [
        {
            day: 2,
            event: ['htgt'] 
        }
    ]
}




const Calendard = () => {

    const [mode, setMode] = useState('month')
    const [modal1Visible, setModal1Visible] = useState(false)
    const [selectedDate, setSelectedDate] = useState(moment(Date()))
    const [selectedDateMini, setSelectedDateMini] = useState(selectedDate)
    const [events, setEvents] = useState({...eventsList})
    let availDates = useMemo(()=>[], [])
    Object.values(events).forEach(element => {
        element.forEach(event => availDates = [...availDates,event.day])
    })


    const getEvent = useCallback((month, day) => {
        
        let data = []
       
        
        if (!availDates.find(i => i === day)) return data
        if  (events[month]) {
            const details = events[month].find(i => i.day === day)
            
            data = details ? details.event : data
        }
        return data
        
    },[availDates])


    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    const handleChange = (action)=> {
        let month = selectedDate.month()

        switch (action) {
            case 'add':
                // if (date.value.month() ===0){ month = 10}
                if (selectedDate.month() ===11){ month = -1}
                setSelectedDate(moment('1 ' + String(selectedDate._locale._months[month +1]) + ' 2022') );
                break;

            case 'substract':
                if (selectedDate.month() ===0) {month= 12}
                setSelectedDate(moment('1 ' + String(selectedDate._locale._months[month -1]) + ' 2022') )
                break;
        
            default:
                break;
        }
    }


    const CalenderHeader = ({
        date
    })=>{
        const [active, setActive] = useState(mode)
        const getString = (index)=> String(date.value._d).split(' ')[index]
        
        

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
        // console.log(moment('1 ' + String(date.value._locale._months[date.value.month() -1]) + ' 2022'))
        return(
            <div className={styles.calendar_header}>
                
                <div style={{
                    display: 'flex'
                }}>
                    <Radio text='day'/>
                    <Radio text='week'/>
                    <Radio text='month'/>
                    <Radio text='year'/>
                </div>
                

                <div className={styles.date_container}>
                    <p>{date.value._locale._months[date.value.month()]} {getString(2)} {getString(3)} </p>
                    <div className={styles.controls}>
                        <p onClick={()=> handleChange('substract')}>{'<'}</p>
                        <p onClick={()=> handleChange('add')}>{'>'}</p>
                    </div>
                </div>
                
        
            </div>
        )
    }


    const MiniCalendar = ({
        month
    })=>{
        return(
            <div className={styles.small_calendar_container }>
                <Calendar headerRender={(date)=>{
                        
                            
                            return <p className={styles.header_txt}>{String(date.value._d).split(' ')[1]} 2022</p>
                        }
                    
                    } 
                    onChange={(date)=>{setSelectedDate(date)}}
                    fullscreen={true} 
                    dateFullCellRender={(date)=>{
                        
                        
                        return(<>
                            <p className={styles.date} style={{
                                // color: (String(date) === String(selectedDate) ? 'blue' : null),
                                
                                background: (String(date) === String(selectedDate) ? '#dadaff' : null)
                            }}>{String(date._d.getDate())}</p>
                             
                            
                        </>)
                    }}
                onPanelChange={onPanelChange} value={month} />
            </div>
        )
    }

    useEffect(()=>{
        getEvent()
        console.log('rendering')
    }, [events])


    return(
        <BaseLayout active={navItemKeys.calendar} >
            
            <h1 className={styles.header}>Calendar</h1>
            <div className={styles.index}>
                
                <div className={styles.container_create}>
                    <div className={styles.button} onClick={()=> setModal1Visible(true)}>
                        <div className={styles.icon}><Image alt='' src={addIcon}/></div>
                        Create Schedule
                    </div>

                    <div className={styles.small_calendar_container + ' ' + styles.small_calendar}>
                        <Calendar 

                            value={selectedDate}
                            onChange={(date)=>{setSelectedDate(date)}}
                           className={styles.calendar} 


                            headerRender={(date)=>{
                                const getString = (index)=> String(date.value._d).split(' ')[index]
                                
                                return( <div className={styles.date_container}>
                                    <p> {getString(0)} {getString(1)} {getString(2)} {getString(3)}</p>
                                    <div className={styles.controls}>
                                        <p onClick={()=> handleChange('substract')}>{'<'}</p>
                                        <p onClick={()=> handleChange('add')}>{'>'}</p>
                                    </div>
                                </div>)
                            }}
                            // fullscreen={false} 
                            dateFullCellRender={(date)=>{
                                // console.log(date)
                                return(
                                <p className={styles.date} style={{
                                
                                        background: (String(date) === String(selectedDate) ? '#dadaff' : null)
                                    }}
                                
                                >{String(date._d.getDate())}</p>)
                            }}
                            // onPanelChange={onPanelChange} value={month} 
                        />
                    </div>

                    <div>

                        <h3>People</h3>

                        <div className={styles.button + ' ' + styles.search_button} >
                            Search for People
                        </div>

                        {
                            people.map((customer, index) => {
                                return(
                                    <div className={styles.customer_container} key={index}>
                                        <div className={styles.image_container}>
                                            <div><Image alt='' src={customer.image}/></div>
                                        </div>
                                        <div className={styles.details_container}>
                                            <h5>{customer.name}</h5>
                                            <p>{customer.email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className={styles.button + ' ' + styles.schedule_button }>
                        My Schedule
                    </div>
                

                    
                </div>



                <Calendar onPanelChange={onPanelChange} className={styles.calendar} 
                headerRender={(date)=><CalenderHeader date={date}/>}
                mode={mode}
                value={selectedDate}
                onChange={(date)=> setSelectedDate(date)}
                monthFullCellRender={(date)=>

                    
                    
                        <div className={styles.content}>
                            <MiniCalendar key={0} month={date}/>
                        </div>


                }

                dateCellRender={(date) => { 
                    
                    const getString = (index)=> String(date._d).split(' ')[index].toLowerCase()
                    
                    return getEvent(getString(1), date._d.getDate()).map( (event, index) => {
                        return <p  key={index} className={styles.event} style={{
                            background: (index % 2 === 0?  '#FF69B4' : '#3a36db' )
                        }}>{event}</p> 
                    })
                    
                    
                }}
                />

                {
                    modal1Visible ?
                        <EventModal
                            visible={modal1Visible}
                            setVisible={setModal1Visible}
                            date={selectedDate}
                            events={events}
                            setEvents={setEvents} /> 
                    : null
                }

                
                <br />
                <br />
                
                
                
            </div>

            


            


        </BaseLayout>
        
    )
    
}
export default Calendard