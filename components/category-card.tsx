import { Category } from "@/interfaces";
import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

interface category {
    category: Category
}

export default function CategoryCard({category}: category ) {
  
    return (
        <Link className={styles.categoryLink} href={"/" + category.strCategory}>
        <div className={styles.innerDiv}>
            <Image 
                src={category.strCategoryThumb}
                alt={category.strCategory}
                width={150}
                height={100}
            />
            
            <h1>{category.strCategory}</h1>
        </div>
        </Link>
    )
} 