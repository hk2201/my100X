import { BlogCard } from "../Components/BlogCard"
import { Appbar } from "../Components/AppBar"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            LOADING...
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"22nd March 2023"}
                    id={blog.id}
                />)}

            </div>
        </div>
    </div>
}