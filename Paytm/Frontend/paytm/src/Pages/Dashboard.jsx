import { AppBar } from "../Components/AppBar"
import { Balance } from "../Components/Balance"

import { Users } from "../Components/Users"

export function Dashboard() {
    return (
        <div className="p-20">
            <AppBar />
            <Balance value={"10,000"} />
            <Users />
            
        </div>
    )
}