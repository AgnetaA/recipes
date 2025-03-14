
import { Meals } from "@/interfaces";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

interface searchResultsProps {
    query: string | null;
}

export default function SearchResults({ query }: searchResultsProps) {

    console.log("queryProp", query);
    const [meals, setMeals] = useState<Meals[]>([]);

    useEffect(() => {
        if (!query) return;
        const fetchMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                const data = await response.json();
                
                const meals: Meals[] = data.meals;

                setMeals(meals || []);
            }
            catch (error) {
                console.error("Error fetching meals: ", error);
            }
        };
        fetchMeals();
    }, [query]);

    // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`); 
    //Eller: const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);

    return (
        <div>
            <h3 className={styles.result}>Results:</h3>

            {meals.map((meals, i) => (     

                <Link className={styles.link} href={`/${query}/${meals.idMeal}`} key={i}>
                    <p>{meals.strMeal}</p>
                </Link>
                
            ))}

        </div>
    )
}