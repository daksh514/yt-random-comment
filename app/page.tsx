import CommentSection from "@/components/CommentSection";
import GetCommentsBtn from "@/components/GetCommentsBtn";
import HeroInput from "@/components/HeroInput";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-base-100">
        <div className="max-w-4xl mx-auto px-8 md:px-4">
        <NavBar/>
        <HeroInput/>
        <CommentSection/>
        </div>
      </div>
    </div>
  );
}
