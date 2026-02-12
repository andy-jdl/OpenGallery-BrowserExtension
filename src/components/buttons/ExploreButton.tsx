import SmartButton from "./SmartButtons";

interface ExploreProps {
    url: string
}

export default function ExploreButton({url}:ExploreProps) {
    function handleExplore() {
        window.open(url, "_blank");
    }

    return (
        <SmartButton variant='bg-[#ECEFF3] hover:bg-[#E1E6ED] text-[#2F3640] font-semibold py-2 px-4 border border-[#D6DCE3] rounded shadow' text="🧭 Explore" onClick={handleExplore} />
    );
}