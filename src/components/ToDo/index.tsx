import { Trash } from 'phosphor-react'

import styles from './ToDo.module.css'
import { ChangeEvent, useRef, useState } from 'react'

interface toDoProps {
  task: string,
  deleteTaskTodo: (name: string, checked: boolean) => void,
  onConcluedeTask: (active: boolean) => void
}

export function ToDo({ task, deleteTaskTodo,onConcluedeTask}: toDoProps) {
  const [border, setBorder ] = useState<boolean>(false)


  const inputTask = useRef<HTMLInputElement>(null)

  function handleDeleteTask(){
    const checked = inputTask.current?.checked || false
    deleteTaskTodo(task, checked)

  }

  function handleTaskChangeComplete(event: ChangeEvent<HTMLInputElement>){
    onConcluedeTask(event?.target?.checked)
    setBorder(event?.target?.checked)
  }

  return (
    // <div className={styles.contentListTodo}>
    <div className={`${styles.contentListTodo} ${border && styles.contentListTodoNoBorder}`}>
      <input ref={inputTask} name='todo' type='checkbox' id={task} onChange={handleTaskChangeComplete}/>
      <label className={styles.teste} htmlFor={task}  >{task}</label>
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
