import { Asset } from "../models";

export interface FavoriteButtonProps {
    onFavorite:(asset: Asset) => void;
    asset: Asset;
}