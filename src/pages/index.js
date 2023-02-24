import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-1/2 h-auto space-y-2 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full"></div>
        <h1 className="text-4xl font-bold">Tusar Palauri</h1>
        <p className="text-gray-400">
          AUTOSAR Integration | Cybersecurity (HSM)
        </p>
        <div className="space-x-2">
          <Link href="">
            <button className="bg-orange-500 shadow-md shadow-orange-200 rounded px-2 py-0.5 text-white hover:bg-orange-400 transition-all">
              Blog
            </button>
          </Link>
          <button className="border border-gray-900 rounded px-2 py-0.5 text-gray-900 hover:shadow">
            <ArrowUpRightIcon className="inline-block w-4 h-4 text-gray-900" />{" "}
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
