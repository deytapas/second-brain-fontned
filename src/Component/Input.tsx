interface inputProps {
    placeholder: string,
    reference?: any
}
export const Input = ({ placeholder, reference }: inputProps) => {
    return <div>
        <input ref={reference} type={"text"} placeholder={placeholder} className="m-2 px-4 py-2 border rounded-xl"></input>
    </div>
}