import styles from './Task.module.css'
import { Trash } from 'phosphor-react';

export function Task() {
    return (
        <div className={styles.task}>
            <button>Check</button>
            <span>Lore ipsom</span>
            <button className={styles.trash}>
                <Trash size={20}></Trash>
            </button>
        </div>
    )
}