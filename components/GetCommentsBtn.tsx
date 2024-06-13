"use client";
import { getComments } from "@/actions/commentActions";
import { useGenerationStore } from "@/context/ResponsesZustand";
import React from "react";

function GetCommentsBtn() {
const {responses, setResponses}  =useGenerationStore()
  const onclick = async () => {
    const res = await getComments("Z2ol5_qmvsg");
    setResponses(res)
  };

  return (
    <div>
      <button
        className="p-4 bg-gray-900 rounded-md font-semibold text-white"
        onClick={onclick}
      >
        {responses.length}
      </button>
    </div>
  );
}

export default GetCommentsBtn;
