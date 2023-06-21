export default function Home() {
  return (
    <div className='bg-red flex justify-center items-center flex-col w-full h-full'>
      <h1 className='text-white font-bold'>Bom dia momolada!</h1>
      <h2 className='text-white font-bold'>vc ainda me ama??</h2>
      <div className="w-full flex flex-col">
        <p className="text-grey50 font-semibold mb-2">Diz se me ama momolada</p>
        <input
          type="text"
          id="username"
          className="border-b border-t-0 border-x-0 py-4 bg-white focus:outline-none  focus:border-b-2 transition-colors peer pl-[10px] text-black focus:font-semibold"
          autoComplete="off"
          placeholder='me ama??????'
        />
      </div>
    </div>
  )
}
