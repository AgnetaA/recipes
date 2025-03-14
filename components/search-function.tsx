"use client";

import styles from "../app/page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";


export default function SearchFunction() {

    const router = useRouter();

    const[searchQuery, setSearchQuery] = useState<string>('');

    const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (event.key === "Enter" && searchQuery.length > 0) {
            
            router.push(`/search?query=${searchQuery}`);
        }
        else if (event.key === "Enter") {
            alert("the search can not be empty");
        }
    }
   
    return (
        <div className={styles.searchArea}>
            <h3>Search for recipes:</h3>

            <form>
                <input placeholder="Search..." type="text" id="search" name="search" aria-label="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeydown}/>
                                                                                   
            </form>

        </div>
    )
}