import styles from './Header.module.css'

import imgLogo from '../../assets/Logo.svg'

export function Header(){
  return (
    <header className={styles.containerHeader} >
      <img src={imgLogo} alt='logo escrito to-do'/>
    </header>
  )
}


