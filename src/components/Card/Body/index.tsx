import React, { FC } from "react";
import styles from "../index.module.css";

interface IProps {
  bodyHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  body: string | undefined;
  edit: boolean;
  check: boolean;
}

const Body: FC<IProps> = ({ bodyHandler, checkHandler, body, edit, check }) => {
  return (
    <>
      <label>Body:</label>
      <textarea className="dis_input" onChange={bodyHandler} value={body} readOnly={!edit}></textarea>
      <div className={`${edit && styles.hidden} ${styles.card_but_container}`}>
        <label>Color Change: </label>
        <input type="checkbox" name="check" value="true" onChange={checkHandler} checked={edit ? false : check} />
      </div>
    </>
  );
};

export default Body;
