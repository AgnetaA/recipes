import { Meal } from "@/interfaces";
import styles from "./page.module.css";
import Image from "next/image";


export default async function Recipe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log("params mealID: ", id);

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();

    const meal: Meal[] = data.meals;

    console.log(meal);

 
    return (
        <main className={styles.main}>


            {meal.map((meal) => (
                <article key={id}>
                    <h1 className={styles.mealHeader}>{meal.strMeal}</h1>

                    <div className={styles.mealMeta}>

                        <Image className={styles.mealImg}
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            width={400}
                            height={300}
                        />

                        <div className={styles.mealMetaText}>
                            <p><span>Cuisine: </span>{meal.strArea}</p>
                            <p><span>Category: </span>{meal.strCategory}</p>
                            <p><span>Tags: </span>{meal.strTags}</p>
                                           
                        </div>

                    </div>
                    <section className={styles.ingredients}>
                        <h3>Ingredients:</h3>
                            <ul>

                                <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                                <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                                <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                                <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                                <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                                <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                                <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                                <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                                <li>{meal.strMeasure9} {meal.strIngredient9}</li>
                                <li>{meal.strMeasure10} {meal.strIngredient10}</li>
                                <li>{meal.strMeasure11} {meal.strIngredient11}</li>
                                <li>{meal.strMeasure12} {meal.strIngredient12}</li>
                                <li>{meal.strMeasure13} {meal.strIngredient13}</li>
                                <li>{meal.strMeasure14} {meal.strIngredient14}</li>
                                <li>{meal.strMeasure15} {meal.strIngredient15}</li>
                                <li>{meal.strMeasure16} {meal.strIngredient16}</li>
                                <li>{meal.strMeasure17} {meal.strIngredient17}</li>
                                <li>{meal.strMeasure18} {meal.strIngredient18}</li>
                                <li>{meal.strMeasure19} {meal.strIngredient19}</li>
                                <li>{meal.strMeasure20} {meal.strIngredient20}</li>
                            </ul>
                           
                        </section>

                        <h3>Instructions:</h3>

                        <p className={styles.instructions}>{meal.strInstructions}</p>

                </article>

            ))}

        </main>
    )
}