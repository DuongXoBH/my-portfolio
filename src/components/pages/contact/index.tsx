import Title from "@/components/common/title";

export default function Contact() {
  return (
    <div id="contact" className="w-full my-10">
      <Title text="contact"></Title>
      <div className="w-full flex flex-col gap-5">
        <p className="w-full text-black h-12 px-5 flex items-center border-1 border-sky-500 rounded-sm bg-white">
          Name
        </p>
        <p className="w-full text-black h-12 px-5 flex items-center border-1 border-sky-500 rounded-sm bg-white">
          Email
        </p>
        <p className="w-full text-black h-12 px-5 flex items-center border-1 border-sky-500 rounded-sm bg-white">
          Phone Number
        </p>
      </div>
    </div>
  );
}
