


export function Buttons({ label, onClick })

{
    return <button onClick={onClick} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  me-2 mb-2 p-2" >{label}</button>
}