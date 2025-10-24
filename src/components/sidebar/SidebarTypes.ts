import { Artwork } from "../../models";

export interface SidebarProps {
  favoritesList: Artwork[];
  currentAssetID?: string;
  onRemoveFavorite: (id: string) => void;
}

export interface SideBarContentProps extends SidebarProps {
  open: boolean;
}