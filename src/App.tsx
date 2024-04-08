import { Header } from './components/Header'
import { CreateToDo } from './components/CreateToDo'

// import { ClipboardText } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'
import { ToDo } from './components/ToDo'
import { useState } from 'react'

const taskTodo = [
  'Criar uma list To do, desafio rocketseat',
  'Adicionar uma nova tarefa',
  'Marcar e desmarcar uma tarefa como concluída',
  'Remover uma tarefa da listagem',
  'Mostrar o progresso de conclusão das tarefas'
]

export function App() {
  const [tasks, setTasks] = useState<string[]>(taskTodo);

  function createTaskToDo() {
    console.log('testes')
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <CreateToDo createTaskToDo={createTaskToDo} />
          <div className={styles.containerList}>
            <div className={styles.containerListInfo}>
              <span className={styles.containerListInfoTasks}>Tarefas criadas <strong>5</strong></span>
              <span className={styles.containerListInfoFinished}>Concluídas<strong>2 de 5</strong></span>
            </div>
            <div className={styles.containerListsToDo}>

              {/* <div className={styles.containerListsTodoEmpty}>
                <ClipboardText size={56} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie Tarefas e organize seus itens a fazer</p>
              </div>
               */}

              {
                tasks.map(task => {
                  return (
                    <ToDo task={task} />
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

