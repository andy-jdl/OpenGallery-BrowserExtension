import { ReactNode } from "react";

export interface SmartButtonProps {
    text: string;
    onClick: () => void;
    variant?: string
    loading?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}