// "use client";
import { Space, Form, Input } from "antd";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Calculator from "./Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.center}>
         <Calculator/>
      </div>

    </main>
  );
}
