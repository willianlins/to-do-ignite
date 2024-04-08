import { Trash } from 'phosphor-react'

import styles from './ToDo.module.css'

interface toDoProps {
  task: string
}

export function ToDo({ task }: toDoProps) {
  return (
    <div className={styles.contentListTodo}>
      <input name='todo' type='checkbox' id={task} />
      <label className={styles.teste} htmlFor={task} >{task}</label>
      <button>
        <Trash size={20} />
      </button>
    </div>
  )
}