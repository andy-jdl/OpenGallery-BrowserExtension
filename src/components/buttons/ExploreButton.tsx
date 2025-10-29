import SmartButton from "./SmartButtons";

interface ExploreProps {
    url: string
}

export default function ExploreButton({url}:ExploreProps) {
    function handleExplore() {
        window.open(url, "_blank");
    }

    return (
        <SmartButton variant='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' text="Explore" onClick={handleExplore} />
    );
}