import { PlusCircle } from 'phosphor-react'

import styles from './CreateToDo.module.css'
import { ChangeEvent, useState } from 'react';

interface CreateToDoProps {
  createTaskToDo: (toDo: string) => void;
}


export function CreateToDo({ createTaskToDo }: CreateToDoProps) {
  const [toDo, setToDo] = useState('');

  function handleInputToDo(event: ChangeEvent<HTMLInputElement>) {
    setToDo(event.target.value);
  }

  function handleCreateToDo() {
    createTaskToDo(toDo);
    setToDo('');
  }

  const inputTaskEmpty = toDo.length <= 0;

  return (
    <div className={styles.wrapperCreate}>
        
      <input type='text' value={toDo} placeholder='Adicione uma nova tarefa' onChange={handleInputToDo} required/>
      <button type='button' onClick={handleCreateToDo} disabled={inputTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>

    </div>
  )
}
