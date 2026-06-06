import React, {CSSProperties} from "react";
import "./Button.css"

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
    icon?: string;
    iconSize?: "fa-sm" | "fa-lg" | "fa-xl" | "fa-2x" | "fa-3x";
    style?:CSSProperties
}

export default function PrimaryButton(props: ButtonProps) {

    return (
        <div>
            <button style={props.style} className={props.icon ? "Button-icon" : "Button"} type={props.type} onClick={props.onClick}>
                <i className={`fa fa-${props.icon} ${props.iconSize}`}></i>
                {props.text}
            </button>
        </div>
    );

}