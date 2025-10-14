import SmartButton from "./SmartButtons";
import { RefreshButtonProps } from "../../types/RefreshProps";

export default function RefreshButton({onRefresh}: RefreshButtonProps) {

    function handleRefresh() {
        onRefresh();
    }

    return (
        <SmartButton variant="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" text="Refresh" onClick={handleRefresh} />
    )
}