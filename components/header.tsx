import Link from "next/link";
import styles from "../app/page.module.css";

export default function Header() {

    return (
        <header className={styles.header}>
            <h1 className={styles.headerh1}><Link className={styles.iconLink} href={`./`}>🥪</Link> Recipes from <a href="https://www.themealdb.com/">TheMealDB</a></h1>
       </header>
    )
}