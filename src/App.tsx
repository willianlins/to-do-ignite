import { Header } from './components/Header'
import { CreateToDo } from './components/CreateToDo'

// import { ClipboardText } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'
import { ToDo } from './components/ToDo'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <CreateToDo />
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

              <ToDo />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

