export function Balance({ value }) {
    return <div className="flex p-3">
        <div className="font-bold text-md">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-md">
            Rs {value}
        </div>
    </div>
}