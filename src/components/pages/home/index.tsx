import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FlowerEffect from "./animation";

export default function Introduce() {
  return (
    <div className="w-full flex flex-row justify-between pr-20">
      <div className="w-full flex flex-row items-center gap-10 px-20 mt-10">
        <div className="w-60 h-60 rounded-full overflow-hidden">
          <Image
            alt="home-introduce"
            src="/home/logo47.png"
            width={240}
            height={240}
          ></Image>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-2xl font-bold text-black">Hello,</p>
          <p className="text-xl font-semibold text-black">
            I&apos;m a Web Developer
          </p>
          <Button variant={"destructive"} asChild>
            <Link href="#">View my work</Link>
          </Button>
        </div>
      </div>
      <div className="h-60 flex justify-center">
        <FlowerEffect />
      </div>
    </div>
  );
}
