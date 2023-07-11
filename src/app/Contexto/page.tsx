"use client";
import React, { useEffect, useState, FormEvent } from "react"
import axios, { AxiosResponse } from 'axios';

import Header from "../components/Header";

export default function Home() {

  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
 
  const [modifiedString, setModifiedString] = useState("");

  const handleSubmit = async () => {
    
    try {
      const response: AxiosResponse<{ answer: string }> = await axios.post('http://127.0.0.1:8000/pokemon/trained/question-context', {question: question, context: context});

      const modifiedString = response.data.answer;
      setModifiedString(modifiedString);
    } catch (error) {
      console.error(error);
    }
     
  };

  return (
    <div className="w-full h-full bg-gray-300">
      <Header title="CONTEXT" />
      <div className="flex justify-evenly">
        <div className="w-[25rem] h-[30rem] flex flex-col items-center py-6 border-2 rounded-lg px-4">
          <p className="text-redBG font-semibold mb-2 text-lg">Do your question, please</p>
          <input
            type="text"
            className="bg-yellowBG placeholder-redBG rounded-lg w-full py-4 pl-[10px] text-white mb-2"
            autoComplete="off"
            placeholder='Question here...'
            onChange={(e) => setQuestion(e.target.value)}
          />
          <textarea
            className="bg-yellowBG placeholder-redBG rounded-lg w-full h-[15rem] py-4 pl-[10px] text-white"
            autoComplete="off"
            placeholder='Context here...'
            onChange={(e) => setContext(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-redBG text-white text-sm/3 border-2 border-white rounded-md px-6 py-4 mt-5">
            Send Question
          </button>
        </div>
        <div className="text-justify w-[25rem] h-[30rem] border-2 px-4 py-6 rounded-lg">
          <p className="text-redBG font-semibold mb-2 text-lg">Answser:</p>
          <p className="text-redBG">{modifiedString}</p>
        </div>
      </div>
    </div>
  )
}