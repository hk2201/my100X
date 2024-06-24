import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-center flex-col">Vessel</div>
        <div>
            <Avatar size="big" name="Harshad" />
        </div>
    </div>
}