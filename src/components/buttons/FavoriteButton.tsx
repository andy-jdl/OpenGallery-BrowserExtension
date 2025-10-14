import SmartButton from "./SmartButtons";
import { FavoriteButtonProps } from "../../types/FavoriteProps";

export default function FavoriteButton({onFavorite, asset}:FavoriteButtonProps) {
    function handleRefresh() {
        onFavorite(asset);
    }

    return (
        <SmartButton variant="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" text="Favorite" onClick={handleRefresh} />
    )
}