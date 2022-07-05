import Head from 'next/head'
import Image from 'next/image'
import styles from './schedule.module.scss'
import BaseLayout from "../../layouts/baseLayout";
import { navItemKeys, tasks } from '../../layouts/Arrays';
import { useEffect, useState } from 'react';
import addIcon from '../../assets/icons/add-icon.svg'
import ListView from '../../components/Views/ListView';
import BoardView from '../../components/Views/BoardView';
import TimelineView from '../../components/Views/TimelineView';


const RadioButton = ({
    mode ='', 
    handleModeChange,
    currentMode = 'mode'
}) => {
    return(
        <div className={styles.radio_button + " " + (currentMode === mode ? styles.radio_button_active : '')} onClick={()=>handleModeChange(mode)}>
            {mode}
        </div>
    )
}


const Schedule = () => {
    const modes = {
        list : 'list',
        board: 'board',
        timeline: 'timeline'
    }

    const [mode, setMode ] = useState(modes.board);
    const data = tasks 
    const handleModeChange = (newMode) =>{
        setMode(newMode)
    }

    

    const defaultRadioButtonProps = {
        
        currentMode : mode,
        handleModeChange: handleModeChange
    }

    const displayMode = (mode) =>{
        switch (mode) {
            case modes.list:
                return <ListView data={data}/>
                break;
            case modes.board:
                return <BoardView data={data}/>
                break;
            case modes.timeline:
                return <TimelineView data={data}/>
                break;
        
            default:
                return <BoardView text='imposible'/>
                break;
        }
    }
    useEffect(()=>{
        console.log('mode', mode)
    })

    return(
        <BaseLayout active={navItemKeys.schedule}>
            <div className={styles.index}>
                <div className={styles.header}>
                    <h2>Task Preview</h2>
                    <div>
                        <div className={styles.side_item}>
                            Filter
                        </div>
                        <div className={styles.side_item}>
                            <div style={{
                                height: '20px',
                                marginRight: '10px'
                                }}><Image src={addIcon} alt='' /></div>
                            Add Task
                        </div>
                    </div>
                </div>
                <div className={styles.header}>
                    <div >
                        <RadioButton mode= {modes.list} {...defaultRadioButtonProps}/>
                        <RadioButton mode= {modes.board} {...defaultRadioButtonProps}/>
                        <RadioButton mode= {modes.timeline}  {...defaultRadioButtonProps}/>
                        
                    </div>
                    <input placeholder='search' type={'search'}/>
                </div>

                <div className={styles.container}>
                    {
                        displayMode(mode)
                    }
                </div>
            </div>

        </BaseLayout>
    )
    
}
export default Schedule;