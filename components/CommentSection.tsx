"use client";
import { useGenerationStore } from "@/context/ResponsesZustand";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CommentSection() {
  const { responses } = useGenerationStore();
  const [randomComment, setRandomComment] = useState({
    textDisplay: "",
    authorChannelUrl: "",
    authorProfileImageUrl: "",
    authorDisplayName: "",
  });
  function findRandom() {
    if (responses.length === 0) {
      return;
    }
    let random = Math.floor(Math.random() * responses.length);
    const randomCommentStr = JSON.stringify(responses[random]);
    const randomComment =
      JSON.parse(randomCommentStr).snippet.topLevelComment.snippet;
    // console.log(randomComment);
    setRandomComment(randomComment);
  }
  useEffect(() => {
    findRandom();
  }, [responses]);
  return (
    <div>
      <div className="bg-amber-100 mt-5 rounded-md py-5 px-5">
        <h1 className="text-xl font-semibold">Your Random Comment Is:</h1>
        {randomComment.textDisplay  && (
          <div className="bg-amber-200 p-4 my-2 rounded-sm shadow-lg">
            <div className="flex gap-2 items-center">
            <div className="rounded-full h-12 w-12 relative">
              <Image
                src={randomComment.authorProfileImageUrl}
                className="rounded-full"
                fill
                alt="user image not available"
              />
            </div>
            <h1><Link className="link-hover" href={randomComment.authorChannelUrl}>{randomComment.authorDisplayName}</Link></h1>
            </div>
            
            <h1 className="mt-2">{randomComment.textDisplay}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
