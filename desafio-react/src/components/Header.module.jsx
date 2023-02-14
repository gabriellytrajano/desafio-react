import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react';
import Logo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logotipo" />

            <form className={styles.taskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}></PlusCircle>
                </button>

            </form>
        </header>
    );
}