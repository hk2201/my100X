import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")

  return response.data;
}


export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000))
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded bg-slate-400 ">
          <div>
            Name: {userDetails?.username}
          </div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
