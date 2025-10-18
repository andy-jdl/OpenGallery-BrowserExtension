import { Artwork } from "../models";

export interface FavoriteButtonProps {
    onFavorite:(asset: string) => void;
    asset: string;
}