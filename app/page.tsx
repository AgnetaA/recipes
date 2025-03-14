
import styles from "./page.module.css";
import { Category } from "@/interfaces";
import CategoryCard from "@/components/category-card";
import SearchFunction from "@/components/search-function";


export default async function Home() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  const data = await response.json();

  const categories: Category[] = data.categories;

  return (
    <main className={styles.page}>
      <h2>Welcome to this collection of recipes</h2>
      <SearchFunction />

      <h3>Choose a category:</h3>

      <article className={styles.article}>
        {categories.map((category, i) => (
          <CategoryCard key={i} category={category}/>
        ))}
            
      </article>
     
    </main>
  );
}

