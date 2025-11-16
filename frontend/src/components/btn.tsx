type BtnProps = {
        BtnName: string,
        onClick: () => void;
    };

export default function Btn({BtnName, onClick=() => { }}:BtnProps){ 

    return (
        <>
    <button className="bg-[#c9cba3] border-0 rounded-2xl p-2 m-2 w-23 text-[#313647]" onClick={onClick}>{BtnName}</button> </>
    )
}