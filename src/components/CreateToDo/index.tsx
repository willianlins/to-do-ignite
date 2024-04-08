import { PlusCircle } from 'phosphor-react'

import styles from './CreateToDo.module.css'

interface CreateToDoProps{
  createTaskToDo: () => void; 
}

export function CreateToDo({createTaskToDo}: CreateToDoProps) {

  function handleCreateToDo(){
    createTaskToDo();
  }
  return (
    <div className={styles.wrapperCreate}>

      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button type='button' onClick={handleCreateToDo}>
        Criar <PlusCircle size={20} />
      </button>

    </div>
  )
}