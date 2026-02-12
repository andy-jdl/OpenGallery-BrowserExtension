import SmartButton from "./SmartButtons";
interface RefreshButtonProps {
    onRefresh: () => void;
}

export default function RefreshButton({onRefresh}: RefreshButtonProps) {

    function handleRefresh() {
        onRefresh();
    }

    return (
        <SmartButton variant="bg-[#ECEFF3] hover:bg-[#E1E6ED] text-[#2F3640] font-semibold py-2 px-4 border border-[#D6DCE3] rounded shadow" text="↻ Refresh" onClick={handleRefresh} />
    )
}