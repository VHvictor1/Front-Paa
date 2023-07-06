import Link from "next/link";

type HeaderProps = {
    title: string
}


export default function Header(props: HeaderProps){
    return (
        <header className="bg-black p-6 text-white flex justify-between items-center mb-10">
        <p className="text-2xl font-bold"><span className="text-red-600 font-bold">{props.title}</span>CHAT</p>
        <div className="flex gap-8">
          <Link href="/Contexto" className="hover:text-red-600 font-semibold duration-500"> Perguntar com contexto </Link>
          <Link href="/" className="hover:text-red-600 font-semibold duration-500"> Perguntar sem contexto </Link>
        </div>
      </header>
    )
}