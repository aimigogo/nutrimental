import {useEffect} from "react";


export const useOrbitKeyframes = () => {
    useEffect(() => {
        const id = "fruit-loader-keyframes";
        if (document.getElementById(id)) return;

        const style = document.createElement("style");
        style.id = id;
        style.textContent = `
      @keyframes fl-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes counter-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(-360deg); }
      }
    `;
        document.head.appendChild(style);
    }, []);
}