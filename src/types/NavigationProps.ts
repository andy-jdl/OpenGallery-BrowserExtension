import { ReactNode } from "react";

export interface NavigationButtonProps {
    text: string;
    icon?: ReactNode;
    route: string;
}