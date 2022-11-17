import React, { FC } from "react";
import styles from "../index.module.css";
import { AiOutlineSave } from "react-icons/ai";

interface IProps {
  replacer: any;
  editHandler: () => void;
  save: () => void;
  edit: boolean;
}

const Buttons: FC<IProps> = ({ replacer, editHandler, save, edit }) => {
  return (
    <>
      <button className={`${styles.editor} ${styles.save}`} onClick={editHandler}>
        {replacer()}
      </button>
      <div className={`${!edit && styles.hidden} ${styles.card_but_container}`}>
        <button className={`${styles.save} ${styles.bigger}`} onClick={save}>
          <AiOutlineSave />
        </button>
      </div>
    </>
  );
};

export default Buttons;
