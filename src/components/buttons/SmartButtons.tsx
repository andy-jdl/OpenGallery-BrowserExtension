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
            className={`${variant} focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2`}
            disabled={isDisabled} 
            onClick={onClick}
        >
            {icon && !loading && icon}
            {loading ? "Loading..." : text}
        </button>
    )
}