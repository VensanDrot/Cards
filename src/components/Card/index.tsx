import React, { useState } from "react";
import styles from "./index.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiOutlineSave } from "react-icons/ai";

const Card = () => {
  const Lorem =
    "ipsum dolor sit amet consectetur adipisicing elit. Sunt harum accusamus iure temporibus quas quasi voluptate quaerat quae, explicabo ducimus autem consectetur aliquam velit praesentium ut cupiditate dolore, similique rem!";
  const [check, SetCheck] = useState(false);
  const [edit, SetEdit] = useState(false);
  const [header, SetHeader] = useState(Lorem);
  const [body, SetBody] = useState(Lorem);

  const checkhandler = () => {
    SetCheck(!check);
  };

  const edithandler = () => {
    SetEdit(!edit);
    if (check) {
      SetCheck(!check);
    }
  };

  const replacer = () => {
    return edit ? <ImCross /> : <BsPencilSquare />;
  };

  return (
    <div className={`${check && styles.card_cont_active} ${styles.card_container} `}>
      <button className={`${styles.editor} ${styles.save}`} onClick={edithandler}>
        {replacer()}
      </button>
      <label>Header:</label>
      <textarea className='dis_input' value={Lorem} readOnly={!edit}></textarea>
      <label>Body:</label>
      <textarea className='dis_input' value={Lorem} readOnly={!edit}></textarea>
      <div className={`${edit ? styles.hidden : styles.smth} ${styles.card_but_container}`}>
        <label>Color Change: </label>
        <input type='checkbox' name='check' value='true' onChange={checkhandler} checked={edit ? false : check} />
      </div>

      <div className={`${!edit && styles.hidden} ${styles.card_but_container}`}>
        <button className={styles.save} style={{ fontSize: "40px" }}>
          <AiOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default Card;
