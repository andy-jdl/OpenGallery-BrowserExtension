import { Artwork } from "../../models";
import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  favoritesList: Artwork[];
  currentAssetID?: string;
  onRemoveFavorite: (id: string) => void;
}

export interface SideBarContentProps extends SidebarProps {
  open: boolean;
}

export interface SideBarHeaderProps{
    path: string;
    fill: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface SideBarHeaderTitleProps {
  open: boolean;
}