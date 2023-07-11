"use client";
import React, { useEffect, useState, FormEvent } from "react"
import Image from "next/image";
import axios, { AxiosResponse } from 'axios';
import Poke from '../../public/download.png'

import Header from "../components/Header"

export default function Home() {

  const [question, setQuestion] = useState("");
  const [request, setRequest] = useState({ question });
  const [modifiedString, setModifiedString] = useState("");


  const handleSubmit = async () => {
    setRequest({
      question: question,
    })
    console.log(request)
    try {
      const response: AxiosResponse<{ output_string: string }> = await axios.post('http:localhost:8000/pokemon/untrained/question', {
        data: request
      });

      const modifiedString = response.data.output_string;
      setModifiedString(modifiedString);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="w-full h-full relative">
      <Header title="POKE" />
      <Image src={Poke} alt="pokeball" className="absolute left-0 opacity-60"></Image>
      <Image src={Poke} alt="pokeball" className="absolute right-0 opacity-60"></Image>
      <Image src={Poke} alt="pokeball" className="absolute right-0 bottom-0 opacity-60"></Image>
      <Image src={Poke} alt="pokeball" className="absolute left-0 opacity-60 bottom-0"></Image>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-[25rem] h-auto flex flex-col items-center py-6 border-2 rounded-lg px-4">
          <p className="text-redBG font-semibold mb-2 text-lg">Do your question, please</p>
          <input
            type="text"
            className="bg-yellowBG rounded-lg w-full py-4 pl-[10px] text-redBG mb-2 placeholder-redBG"
            autoComplete="off"
            placeholder='Question here...'
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-redBG text-white text-sm/3 border-2 border-redBG rounded-md px-6 py-4 mt-5">
            Send Question
          </button>
        </div>
        <div className="text-justify w-[50rem] h-[20rem] border-2 px-4 py-6 rounded-lg">
          <p className="text-redBG font-semibold mb-2 text-lg">Answser:</p>
          <p className="text-yellowBG">{modifiedString}</p>
        </div>
      </div>
    </div>
  )
}