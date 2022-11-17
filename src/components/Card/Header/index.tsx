import React, { FC } from "react";

interface IProps {
  headerHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  header: string | undefined;
  edit: boolean;
}

const Header: FC<IProps> = ({ headerHandler, header, edit }) => {
  return (
    <>
      <label>Header:</label>
      <textarea className="dis_input" onChange={headerHandler} value={header} readOnly={!edit}></textarea>
    </>
  );
};

export default Header;
