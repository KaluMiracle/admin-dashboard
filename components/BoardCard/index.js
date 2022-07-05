// import styles from '../views.module.scss'
import styles from './board-card.module.scss'
import { useEffect, useState } from "react"

const tagColors = {
    'low': "pink",
    "on track": "green",
    'medium': "blue",
    'at risk': "red",
    'high': "grey"
}
const BoardCard = ({
    title,
    tags,
    description,
    people,
}) => {
    const [checked, setChecked] = useState(false)
    useEffect(()=>{
        console.log('title', tags)
    })
    return(
        <div className={styles.card }>
            <div className={styles.section}>
                <div className={styles.checkbox}
                    onClick={()=>setChecked(!checked)} 
                    style={{
                        background: checked ? 'blue' : "transparent"
                    }}
                ></div>
                <h5>{title}</h5>
            </div>
            <div className={styles.section}>
                {
                    tags.map((tag, index)=>{
                        return (
                            <div 
                                key={index} 
                                className={styles.tag}
                                style={{
                                    background: tagColors[tag.toLowerCase()]
                                }}
                            >
                                {tag}
                            </div>
                        )
                    })
                }
            </div>
            
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default BoardCard;