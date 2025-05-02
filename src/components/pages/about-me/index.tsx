import Title from "@/components/common/title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutMe() {
  const colors = [
    { color: "bg-red-500", delay: 0 },
    { color: "bg-red-500", delay: 1 },
    { color: "bg-red-500", delay: 2 },
    { color: "bg-red-500", delay: 3 },
    { color: "bg-red-500", delay: 4 },
    { color: "bg-red-500", delay: 5 },
  ];

  return (
    <div
      id="about"
      className="flex flex-row w-full mt-10 p-3 gap-10 border-1 border-sky-500 rounded-sm relative"
    >
      {colors.map((color: { color: string; delay: number }, index: number) => {
        return (
          <div
            key={`colors-${index}`}
            className={`absolute rounded-full animate-border-walk transform -translate-x-1/2 -translate-y-1/2 bg-sky-500`}
            style={{ animationDelay: `${color.delay}s` }}
          ></div>
        );
      })}
      <Avatar className="w-60 h-60">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col">
        <Title text="about me"></Title>
        <p className="w-full h-18 text-base font-normal">
          Hi! I&apos;m a passionate web developer with a strong interest in
          building clean, responsive, and user-friendly applications. I
          specialize in modern JavaScript frameworks like{" "}
          <span className="font-bold">Next.js</span> and{" "}
          <span className="font-bold">React</span>, and I have experience
          working with backend technologies such as{" "}
          <span className="font-bold">Node.js</span>,&nbsp;
          <span className="font-bold">Express</span>, and{" "}
          <span className="font-bold">Laravel</span>.<br />
          Over the past few years, I&apos;ve built various full-stack projects
          ranging from e-commerce websites to real-time chat apps. I enjoy
          learning new technologies and continuously improving my skills. My
          goal is to create impactful digital products that solve real-world
          problems. <br />
          When I&apos;m not coding, I love reading tech blogs, exploring UI/UX
          trends, and contributing to open source projects.
        </p>
      </div>
    </div>
  );
}
