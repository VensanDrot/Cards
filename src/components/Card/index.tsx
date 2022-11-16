import React, {useState} from 'react'
import styles from './index.module.css'


const index = () => {
  const Lorem = "ipsum dolor sit amet consectetur adipisicing elit. Sunt harum accusamus iure temporibus quas quasi voluptate quaerat quae, explicabo ducimus autem consectetur aliquam velit praesentium ut cupiditate dolore, similique rem!"
  const [check, SetCheck] = useState(false);
  const checkhandler = () => {
    
    SetCheck(!check);
  }


  return (
    <div className={ `${!check? styles.smth  : styles.card_cont_active} ${styles.card_container} `} >
    <label>Header:</label>
    <textarea className='dis_input' id='header' defaultValue={Lorem}></textarea>
    <label>Body:</label>
    <textarea className='dis_input' id='body' defaultValue={Lorem}></textarea>
    <div className={styles.card_but_container}>
      <label>Color Change: </label>
      <input type="checkbox" name='check' value="true" onChange={() => checkhandler()} />
    </div>
  
    </div>

  )
}

export default index