
import { Meals } from "@/interfaces";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";




export default async function TheCategory({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;


    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();

    const meals: Meals[] = data.meals;

   
    return (
        <main className={styles.main}>

            <h2>Choose a {category} recipe:</h2>
            {meals.map((meals, i) => (

                <Link className={styles.link} href={`/${category}/${meals.idMeal}`} key={meals.idMeal}>
                    <p key={i}>{meals.strMeal}</p>
                </Link>
            ))}

        </main>
    )
}