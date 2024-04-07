import { Trash } from 'phosphor-react'

import styles from './ToDo.module.css'

export function ToDo() {
  return (
    <div className={styles.contentListTodo}>
      <div>
        <input name='todo' type='checkbox' id='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui blanditiis quisquam sequi illum sint aliquid totam tenetur, sit numquam quam amet similique, asperiores adipisci, harum eius iusto accusamus fugit vel.' />
        <label htmlFor='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui blanditiis quisquam sequi illum sint aliquid totam tenetur, sit numquam quam amet similique, asperiores adipisci, harum eius iusto accusamus fugit vel.' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum id deleniti nobis molestiae dignissimos dolores! Deserunt earum inventore dolores quam consequuntur labore, unde alias similique veniam, molestiae exercitationem illum.</label>
      </div>
      {/* :<label className={styles.teste}  htmlFor='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui blanditiis quisquam sequi illum sint aliquid totam tenetur, sit numquam quam amet similique, asperiores adipisci, harum eius iusto accusamus fugit vel.' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui blanditiis quisquam sequi illum sint aliquid totam tenetur, sit numquam quam amet similique, asperiores adipisci, harum eius iusto accusamus fugit vel.</label> */}
      <Trash size={20} />
    </div>
  )
}