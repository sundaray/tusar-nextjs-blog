import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-1/2 h-auto border m-auto space-y-2 flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-100 rounded-full"></div>
      <h1 className="text-4xl font-bold">Tusar Palauri</h1>
      <p className="text-gray-400">AUTOSAR Integration | Cybersecurity (HSM)</p>
      <Link href="">
        <button className="border rounded px-2 py-0.5">Blog</button>
      </Link>
    </div>
  );
}
