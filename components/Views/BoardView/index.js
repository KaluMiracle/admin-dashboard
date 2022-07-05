import { useEffect } from 'react';
import BoardCard from '../../BoardCard';
import styles from '../views.module.scss'

const Section = ({
    tasks,
    section
}) => {
    return(
        <div className={styles.section}>
            <h5 className={styles.section_title}>{section}</h5>
            {
                tasks.map((task, index)=>
                    
                    <BoardCard
                        key={index}
                        {...task}
                    />
                )
            }
        </div>
    )
}
const BoardView = ({
    data
}) => {
    useEffect(()=>{
        console.log('data', data)
    })
    return(
        <div className={styles.boardview}>
            <Section
                section={'Todo'}
                tasks={data.todo}
            />
            <Section
                section={'In Progress'}
                tasks={data.inProgress}
            />
            <Section
                section={'In Review'}
                tasks={data.inReview}
            />
            <Section
                section={'Done'}
                tasks={data.done}
            />
            
            
            
        </div>
    )
}

export default BoardView;