import { Artwork } from "../models";

export interface FavoriteButtonProps {
    onFavorite:(asset: Artwork) => void;
    asset: Artwork;
}