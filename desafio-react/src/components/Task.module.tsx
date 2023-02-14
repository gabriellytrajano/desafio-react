import styles from './Task.module.css'
import { ITask } from '../App';
import { Trash, CheckCircle } from 'phosphor-react';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

    const isCompleted = true;
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ? <CheckCircle /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.trash} onClick={() => onDelete(task.id)}>
                <Trash size={20}></Trash>
            </button>
        </div>
    )
}