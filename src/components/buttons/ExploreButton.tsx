import SmartButton from "./SmartButtons";
import { ExploreProps } from "../../types/ExploreProps";

export default function ExploreButton({title, location}: ExploreProps) {
    const baseUrl = "https://www.google.com/search?q=";

    function handleExplore() {
        if (!title || !location) {
            console.warn("Missing title or location for Google search");
            return;
        }

        const query = `${title} ${location}`;
        const encodedQuery = encodeURIComponent(query);
        const url = `${baseUrl}${encodedQuery}`;
        window.open(url, "_blank");
    }

    return (
        <SmartButton variant='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' text="Explore" onClick={handleExplore} />
    );
}