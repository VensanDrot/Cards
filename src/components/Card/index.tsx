import React, { useState } from "react";
import styles from "./index.module.css";
import Header from "./Header";
import Body from "./Body";
import Buttons from "./Buttons";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import Head from "next/head";

const Card = () => {
  //elememts
  const Lorem =
    "HEE adipisicing elit. Sunt harum accusamus iure temporibus quas quasi voluptate quaerat quae, explicabo ducimus autem consectetur aliquam velit praesentium ut cupiditate dolore, similique rem!";
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [header, setHeader] = useState<string | undefined>(Lorem);
  const [body, setBody] = useState<string | undefined>(Lorem);
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
      <Header headerHandler={headerHandler} header={header} edit={edit} />
      <Body bodyHandler={bodyHandler} checkHandler={checkHandler} body={body} edit={edit} check={check} />
      <Buttons replacer={replacer} editHandler={editHandler} save={save} edit={edit} check={check} />
    </div>
  );
};

export default Card;
