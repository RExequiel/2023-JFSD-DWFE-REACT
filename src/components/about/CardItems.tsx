import Image from "next/image";
import about from "@/src/utils/about.json";

const CardItems = () => {
  return (
    <div className="flex items-center md:justify-between justify-center flex-wrap px-2">
      {about.about.map((item) => (
        <div key={item.title} className="my-2 p-4 w-96 rounded-xl shadow-lg">
          <div>
            <Image
              className="block mb-4"
              width={32}
              height={32}
              src={item.URLImage}
              alt={item.title}
            />
          </div>
          <div>
            <div className="text-[#222222] text-base mb-2">{item.title}</div>
            <div className="text-[#717171] text-sm">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
