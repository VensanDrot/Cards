import React from "react";
import CardList from "../components/Cardlist";

const data = [
  {
    id: 1,
    header_text: "vensan",
    body_text: "lorem inspu",
  },
  {
    id: 2,
    header_text: "vensan",
    body_text: "lorem inspu",
  },
  {
    id: 3,
    header_text: "vensan",
    body_text: "lorem inspu",
  },
  {
    id: 4,
    header_text: "vensan",
    body_text: "lorem inspu",
  },
];

export default function Home() {
  return (
    <>
      <CardList data={data} />
    </>
  );
}
