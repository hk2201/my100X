import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/Components/VideoCard";
import { VideoGrid } from "@/Components/VideoGrid";
import { AppBar } from "@/Components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid />
    </div>
  );
}
