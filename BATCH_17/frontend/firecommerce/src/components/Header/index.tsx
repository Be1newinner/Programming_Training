import MENU, { MenuItem } from "@/constants/Menus";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center px-4 border-gray-400"
      style={{
        borderWidth: 1,
      }}
    >
      <Image src="/images/logo.jpg" height={50} width={150} alt="Logo" />

      <ul className="flex gap-4">
        {MENU.map((item: MenuItem) => {
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.container}>
        <FiShoppingCart size={28} color="blue" />

        <button> Login </button>
        <button> Register </button>
      </div>
    </header>
  );
}
