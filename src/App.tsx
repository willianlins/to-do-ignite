import { Header } from './components/Header'
import { CreateToDo } from './components/CreateToDo'

import { ClipboardText } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'
import { ToDo } from './components/ToDo'
import { useState } from 'react'

// const taskTodo = [
//   'Criar uma list To do, desafio rocketseat',
//   'Adicionar uma nova tarefa',
//   'Marcar e desmarcar uma tarefa como concluída',
//   'Remover uma tarefa da listagem',
//   'Mostrar o progresso de conclusão das tarefas'

// ]

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskCompleted, setTaskCompleted] = useState(0);

  function createTaskToDo(toDo: string) {
    setTasks(task => [...task, toDo])
  }

  function deleteTaskTodo(task: string, checked: boolean) {
    const removeTask = tasks.filter(taskName => {
      return taskName != task;
    })

    setTasks(removeTask);


   checked && setTaskCompleted(completed => completed -1)
  }

  function onConcluedeTask(active: boolean) {
    active ? setTaskCompleted(complete => complete + 1) : setTaskCompleted(complete => complete - 1)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <CreateToDo createTaskToDo={createTaskToDo} />
          <div className={styles.containerList}>
            <div className={styles.containerListInfo}>
              <span className={styles.containerListInfoTasks}>Tarefas criadas <strong>{tasks.length}</strong></span>
              <span className={styles.containerListInfoFinished}>Concluídas<strong>{taskCompleted} de {tasks.length}</strong></span>
            </div>
            <div className={styles.containerListsToDo}>
              {
                tasks.length <= 0 ?
                  <div className={styles.containerListsTodoEmpty}>
                    <ClipboardText size={56} />
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie Tarefas e organize seus itens a fazer</p>
                  </div>
                  :
                  tasks.map(task => {
                    return (
                      <ToDo
                        key={task}
                        task={task}
                        deleteTaskTodo={deleteTaskTodo}
                        onConcluedeTask={onConcluedeTask}
                      />
                    )
                  })
              }
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

