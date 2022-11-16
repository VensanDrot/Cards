import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <Link href='/' className='btn btn-primary'>
        Main Page
      </Link>
      <Link href='Login' className='btn btn-primary'>
        Login Page
      </Link>
    </div>
  );
};

export default Nav;
