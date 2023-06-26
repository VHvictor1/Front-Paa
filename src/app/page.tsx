"use client";
import React, { useEffect, useState, FormEvent } from "react"
import axios, { AxiosResponse } from 'axios';

export default function Home() {

  const [question, setQuestion] = useState("");
  const [modifiedString, setModifiedString] = useState("");

  useEffect(() => {
    alert("Querido usuário digite suas perguntas em inglês para obter uma melhor resposta!");
  }, [])


  const handleSubmit = async () => {
    try {
      const response: AxiosResponse<{ output_string: string }> = await axios.post('http://localhost:8000', {
        question: question
      });

      const modifiedString = response.data.output_string;
      setModifiedString(modifiedString);
    } catch (error) {
      console.error(error);
    }
     
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <div className='opacity-50 w-full h-full absolute top-0 bg-white z-0' />
      <div className="z-1 bg-gray-700 absolute w-[30rem] h-[20rem] rounded-lg opacity-80 flex flex-col items-center justify-center">
        <p className="text-grey50 font-semibold mb-2">Choose your question!!</p>
        <input
          type="text"
          id="username"
          className="bg-black rounded-lg z-10 border-b w-3/4 border-t-0 border-x-0 py-4 focus:outline-none  focus:border-b-2 transition-colors peer pl-[10px] text-white focus:font-semibold"
          autoComplete="off"
          placeholder='Question??'
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-red-600 text-white text-sm/3 border-2 border-white rounded-md px-6 py-4 mt-5">
          Send Question!
        </button>
      </div>
      <div className="h-full w-[15rem] bg-black absolute left-0 flex flex-col items-center font-bold py-10">
        <p className="text-2xl pb-10"><span className="text-red-600 font-bold">POKE</span>CHAT</p>
        <div className="w-full h-full">
          <p>awnser: {modifiedString}</p>
        </div>
      </div>
    </div>
  )
}
