import SmartButton from "./SmartButtons";
import { ExploreProps } from "../../types/ExploreProps";

export default function ExploreButton({related}: ExploreProps) {
    const baseUrl = "https://www.google.com/search?q=";

    function handleExplore() {
        window.open("url", "_blank");
    }

    return (
        <SmartButton variant='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' text="Explore" onClick={handleExplore} />
    );
}