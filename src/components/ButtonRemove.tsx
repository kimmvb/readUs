import remove from "../icons/remove.svg";

interface Props {
    addFunction: () => void
}

export const ButtonRemove: React.FC<Props> = ({ addFunction }) => {
    return (
        <button className="text-soft-gray flex flex-row gap-x-2 items-center justify-between rounded-md py-1 px-4 drop-shadow-lg text-sm hover:bg-[#A3CAE7] bg-mustard" onClick={addFunction}>
            Remover de Mis libros
            <img src={remove} alt="Basura ícono"></img>
        </button>
    )
}