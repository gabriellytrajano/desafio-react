import { Task } from './task.module.jsx'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.purpleText}>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.list}>
                <Task></Task>
                <Task></Task>
            </div>
        </section>
    )
}