

export default function MenuButton(props: {label: string, onClick: () => void }) {
    return <button className="text-[#313647] bg-[#FFF8D4] p-4 m-2 pt-2 pb-2 text-center rounded-2xl text-1xl" onClick={props.onClick}>{props.label}</button>
}