import React, { useState, FC } from "react";
import styles from "./index.module.css";
import Header from "./Header";
import Body from "./Body";
import Buttons from "./Buttons";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";

interface IProps {
  header_text: string;
  body_text: string | undefined;
  id: number;
}

const Card: FC<IProps> = ({ header_text, body_text, id }) => {
  //elememts
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [header, setHeader] = useState<string | undefined>(header_text);
  const [body, setBody] = useState<string | undefined>(body_text);
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
    <div key={id} className={`${check && styles.card_cont_active} ${styles.card_container} `}>
      <Header headerHandler={headerHandler} header={header} edit={edit} />
      <Body bodyHandler={bodyHandler} checkHandler={checkHandler} body={body} edit={edit} check={check} />
      <Buttons replacer={replacer} editHandler={editHandler} save={save} edit={edit} />
    </div>
  );
};

export default Card;
