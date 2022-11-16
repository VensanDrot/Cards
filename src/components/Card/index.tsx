import React, { useState } from "react";
import styles from "./index.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiOutlineSave } from "react-icons/ai";

const Card = () => {
  //elememts
  const Lorem =
    "HEE adipisicing elit. Sunt harum accusamus iure temporibus quas quasi voluptate quaerat quae, explicabo ducimus autem consectetur aliquam velit praesentium ut cupiditate dolore, similique rem!";
  const [check, SetCheck] = useState(false);
  const [edit, SetEdit] = useState(false);
  const [header, SetHeader] = useState<string | undefined>(Lorem);
  const [body, SetBody] = useState<string | undefined>(Lorem);
  const [Oldheader, SetOldHeader] = useState<string | undefined>();
  const [Oldbody, SetOldBody] = useState<string | undefined>();

  //checker
  const checkhandler = () => {
    SetCheck(!check);
  };

  //Start the edition proccess
  const edithandler = () => {
    SetEdit(!edit);
    SetOldBody(body);
    SetOldHeader(header);
    if (check) {
      SetCheck(!check);
    }
    if (edit) {
      console.log("here");
      SetBody(Oldbody);
      SetHeader(Oldheader);
    }
  };

  //chose the icon
  const replacer = () => {
    return edit ? <ImCross /> : <BsPencilSquare />;
  };

  //header text change handle
  const headerhandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    SetHeader(e.target.value);
  };

  //body text change handle
  const bodyhandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    SetBody(e.target.value);
  };

  //save changes
  const save = () => {
    SetEdit(!edit);
  };

  return (
    <div className={`${check && styles.card_cont_active} ${styles.card_container} `}>
      <button className={`${styles.editor} ${styles.save}`} onClick={edithandler}>
        {replacer()}
      </button>
      <label>Header:</label>
      <textarea className='dis_input' onChange={(e) => headerhandler(e)} value={header} readOnly={!edit}></textarea>
      <label>Body:</label>
      <textarea className='dis_input' onChange={(e) => bodyhandler(e)} value={body} readOnly={!edit}></textarea>
      <div className={`${edit ? styles.hidden : styles.smth} ${styles.card_but_container}`}>
        <label>Color Change: </label>
        <input type='checkbox' name='check' value='true' onChange={checkhandler} checked={edit ? false : check} />
      </div>

      <div className={`${!edit && styles.hidden} ${styles.card_but_container}`}>
        <button className={`${styles.save} ${styles.bigger}`} onClick={save}>
          <AiOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default Card;
