import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react';
import Logo from '../assets/Logo.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}
export function Header({onAddTask}: Props) {

    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logotipo" />

            <form className={styles.taskForm} onSubmit={handleSubmit}>
                <input
                    placeholder="Adicione uma nova tarefa" 
                    onChange={onChangeTitle}
                    value={title}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}></PlusCircle>
                </button>

            </form>
        </header>
    );
}