import SmartButton from "./SmartButtons";
import { Artwork } from "../../models/Artwork";

interface FavoriteButtonProps {
    onFavorite:(asset: Artwork) => void;
    asset: Artwork;
}

export default function FavoriteButton({onFavorite, asset}:FavoriteButtonProps) {
    function handleRefresh() {
        onFavorite(asset);
    }

    return (
        <SmartButton variant="bg-[#ECEFF3] hover:bg-[#E1E6ED] text-[#2F3640] font-semibold py-2 px-4 border border-[#D6DCE3] rounded shadow" text="❤ Favorite" onClick={handleRefresh} />
    )
}