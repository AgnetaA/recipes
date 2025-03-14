"use client"
import SearchFunction from "@/components/search-function";
import SearchResults from "@/components/search-results";
import { useSearchParams } from "next/navigation";


export default function SearchResultsPage() {
    const searchParams = useSearchParams(); 
    const query = searchParams.get("query");
    
    return (
        <main>
            <SearchFunction />
            <p>Your Search: {query}</p>
            <SearchResults query={query}/>
        </main>     
    )
}