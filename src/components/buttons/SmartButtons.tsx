import React, { JSX } from "react";
import { SmartButtonProps } from "../../types/SmartButtonProps";

export default function SmartButton({
    text, 
    onClick, 
    variant, 
    loading, 
    disabled,
    icon
} : SmartButtonProps): JSX.Element | null {

    if (!text) return null;

    const isDisabled = disabled || loading;

    return (
        <button 
            style={{opacity: isDisabled ? 0.5 : 1}} 
            className={variant} 
            disabled={isDisabled} 
            onClick={onClick}
        >
            {icon && !loading && icon}
            {loading ? "Loading..." : text}
        </button>
    )
}