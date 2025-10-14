import { ReactNode } from "react";

export interface NavigationButtonProps {
    text: string;
    icon?: ReactNode; // up down left right icon
    route: string;
}