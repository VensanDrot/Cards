import React, { FC } from "react";
import Card from "../Card";
import styles from "./index.module.css";

interface IProps {
  data: {
    body_text: string;
    header_text: string;
    id: number;
  }[];
}

const CardList: FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card_list}>
      {data.map((e) => {
        console.log(e.id);
        return <Card key={e.id} header_text={e.header_text} body_text={e.body_text} id={e.id} />;
      })}
    </div>
  );
};

export default CardList;
