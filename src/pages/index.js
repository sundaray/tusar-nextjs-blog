import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const homeVariants = {
  initial: { opacity: 0, y: "1rem" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, eaee: "linear", duration: 1 },
  },
};

export default function Home() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <motion.div
        variants={homeVariants}
        initial="initial"
        animate="animate"
        className="w-1/2 h-auto space-y-2 flex flex-col items-center"
      >
        <motion.div
          variants={homeVariants}
          className="w-24 h-24 bg-gray-100 rounded-full"
        ></motion.div>
        <motion.h1 variants={homeVariants} className="text-4xl font-bold">
          Tusar Palauri
        </motion.h1>
        <motion.p variants={homeVariants} className="text-gray-400">
          AUTOSAR Integration | Cybersecurity (HSM)
        </motion.p>
        <motion.div variants={homeVariants} className="space-x-2">
          <Link href="">
            <button className="bg-orange-500 shadow-md shadow-orange-200 rounded px-2 py-0.5 text-white hover:bg-orange-400 transition-all">
              Blog
            </button>
          </Link>
          <button className="border border-gray-900 rounded px-2 py-0.5 text-gray-900">
            <ArrowUpRightIcon className="inline-block w-4 h-4 text-gray-900" />{" "}
            LinkedIn
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
