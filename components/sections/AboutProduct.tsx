import Image from "next/image";

import { Separator } from "../ui/separator";
import { aboutProductItems } from "@/constants";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const AboutProduct = () => {
  return (
    <section className="about-product">
      {/* CARDS CONTAINER */}
      <div className="card-container container-padding container-padding-2">
        {/* CARDS */}
        {aboutProductItems().slice(0, 5).map((item, i) => (
          <div
            key={i}
            className={`card ${i === 0 ? 'col-span-1 md:col-span-2' : ''} ${i === 1 ? 'lg:col-span-1' : ''}`}
          >
            {/* CARDS ICON */}
            <Image src={item.icon} alt={item.title} width={40} height={40} />
            {/* CARDS TITLE */}
            <h1 className="mt-4">{item.title}</h1>
            {/* CARDS DESCRIPTION*/}
            <p className="mt-6 text-textLight">{item.description}</p>
            {/* CARDS LINK */}
            <div className="flex h-full items-end">
              <a href={item.link} className="flex flex-row gap-2 my-8 text-textLight hover">
                {item.url}
                {item.url !== '' ? <ArrowRightIcon className="-rotate-45 size-6" /> : null}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* LINE AT THE END OF THE SECTION */}
      <center>
        <div className="px-8">
          <Separator orientation="horizontal" className="bg-[#575962] max-w-[600px]" />
        </div>
      </center>
    </section>
  );
};
