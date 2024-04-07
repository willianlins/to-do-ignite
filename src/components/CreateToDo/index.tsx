import { PlusCircle } from 'phosphor-react'

import styles from './CreateToDo.module.css'

export function CreateToDo() {
  return (
    <div className={styles.wrapperCreate}>

      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar <PlusCircle size={20}/>
      </button>

    </div>
  )
}