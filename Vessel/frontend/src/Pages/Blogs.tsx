import { BlogCard } from "../Components/BlogCard"
import { AppBar } from "../Components/AppBar"

export const Blogs = () => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div>
                <BlogCard
                    authorName={"Harshad Khandare"}
                    title={"How to be the greated individual that has evern born on this planet earth"}
                    content={"How to be the greated individual that has evern born on this planet earthHow to be the greated individual that has evern born on this planet earthHow to be the greated individual that has evern born on this planet earth"}
                    publishedDate={"22nd March 2023"}
                />
            </div>
        </div>
    </div>
}