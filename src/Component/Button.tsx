import type { ReactElement } from "react";

interface buttonType {
    title: string,
    type: "primary" | "secondary" ,
    startIcan?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean 
}

const typeOfButton = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",
}

const defaultStyle = "flex px-4 py-2 rounded-md items-center font-light";

export const Button = (props: buttonType) => {
    return <button onClick={props.onClick} className={typeOfButton[props.type]+ " " + defaultStyle  + " " + `${props.fullWidth ? "w-full flex justify-center items-center" : ""} ${props.loading ? "opacity-45" : ""}`} disabled={props.loading}>
        <div className="pr-2">
            {props.startIcan}
        </div>
        {props.title}
    </button>
}