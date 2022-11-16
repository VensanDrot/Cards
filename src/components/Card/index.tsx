import React from 'react'
import styles from './index.module.css'


const index = () => {
  return (
    <div className={styles.card_container}>
    <label>Header:</label>
    <textarea className='dis_input' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, iusto distinctio aliquam dolores tempore libero vero, fuga earum quod expedita saepe doloribus odio possimus nam perspiciatis, quam iste! Corporis, odio?</textarea>
    <label>Body:</label>
    <textarea className='dis_input' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aut voluptas labore reiciendis, neque a assumenda repudiandae quae eaque vitae consequatur minima deserunt exercitationem, reprehenderit maiores! Quidem, doloremque nemo! Porro.</textarea>
    </div>
  )
}

export default index