import { HEADERARRAY } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-20 flex flex-row justify-between px-5 items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          alt="Logo"
          src="/home/logo47.png"
          width={48}
          height={48}
          className="w-full h-full"
        ></Image>
      </div>
      <div className="h-full flex justify-between items-center gap-5">
        {HEADERARRAY.map((item, index) => (
          <div key={index} className="h-full flex items-center">
            <Link
              href={item.href}
              className="h-full flex items-center text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
