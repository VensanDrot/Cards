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
  return (
    <div className={styles.card_list}>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <Card header_text={e.header_text} body_text={e.body_text} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
