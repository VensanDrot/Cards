import React, { useState } from "react";
import styles from "./index.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { AiOutlineSave } from "react-icons/ai";

const Card = () => {
  //elememts
  const Lorem =
    "HEE adipisicing elit. Sunt harum accusamus iure temporibus quas quasi voluptate quaerat quae, explicabo ducimus autem consectetur aliquam velit praesentium ut cupiditate dolore, similique rem!";
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [header, setHeader] = useState<string | undefined>(Lorem);
  const [body,setBody] = useState<string | undefined>(Lorem);
  const [oldHeader, setOldHeader] = useState<string | undefined>();
  const [oldBody, setOldBody] = useState<string | undefined>();

  //checker
  const checkHandler = () => {
    setCheck(!check);
  };

  //Start the edition proccess
  const editHandler = () => {
    setEdit(!edit);
    setOldBody(body);
    setOldHeader(header);
    if (check) {
      setCheck(!check);
    }
    if (edit) {
      setBody(oldBody);
      setHeader(oldHeader);
    }
  };

  //chose the icon
  const replacer = () => {
    return edit ? <ImCross /> : <BsPencilSquare />;
  };

  //header text change handle
  const headerHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeader(e.target.value);
  };

  //body text change handle
  const bodyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  //save changes
  const save = () => {
    setEdit(!edit);
  };

  return (
    <div className={`${check && styles.card_cont_active} ${styles.card_container} `}>
      <button className={`${styles.editor} ${styles.save}`} onClick={editHandler}>
        {replacer()}
      </button>
      <label>Header:</label>
      <textarea className='dis_input' onChange={headerHandler} value={header} readOnly={!edit}></textarea>
      <label>Body:</label>
      <textarea className='dis_input' onChange={bodyHandler} value={body} readOnly={!edit}></textarea>
      <div className={`${edit && styles.hidden} ${styles.card_but_container}`}>
        <label>Color Change: </label>
        <input type='checkbox' name='check' value='true' onChange={checkHandler} checked={edit ? false : check} />
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
