import Image from "next/image";

import { Separator } from "../ui/separator";
import { aboutProductItems } from "@/constants";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const AboutProduct = () => {
  return (
    <section
      className="about-product"
      id="about-product"
    >
      {/* CARDS CONTAINER */}
      <div className="lg:hidden card-container container-padding pt-6 md:pt-10 lg:pt-24 pb-6 md:pb-8 lg:pb-12">
        {/* CARDS */}
        {aboutProductItems().slice(0, 5).map((item, i) => (
          <div
            key={item.id}
            className={`card !px-8 !py-10 ${i === 0 ? 'col-span-1 md:col-span-2' : ''} ${i === 1 ? 'lg:col-span-1' : ''}`}
          >
            {/* CARDS ICON */}
            <Image src={item.icon} alt={item.title} width={40} height={40} />
            {/* CARDS TITLE */}
            <h1 className="mt-6 font-bold text-xl">{item.title}</h1>
            {/* CARDS DESCRIPTION*/}
            <p className="mt-6 text-textLight">{item.description}</p>
            {/* CARDS LINK */}
            <div className="flex flex-col h-full justify-end">
              <a href={item.link} className="flex flex-row gap-2 mt-20 text-textLight hover text-[15px] font-semibold">
                {item.url}
                {item.url !== '' ? <ArrowRightIcon className="-rotate-45 size-6" /> : null}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CARDS CONTAINER FOR LARGE SCREENS */}
      <div className="hidden lg:flex flex-col items-center container-padding pt-6 md:pt-10 lg:pt-24 pb-6 md:pb-8 lg:pb-12 gap-12">
        {/* FIRST 3 ELEMENTS CONTAINER */}
        <div className="flex flex-basis flex-grow flex-shrink items-center justify-between gap-12">
          {/* CARDS */}
          {aboutProductItems().slice(0, 3).map((item, i) => (
            <div
              key={item.id}
              className="card !px-8 !py-10"
            >
              {/* CARDS ICON */}
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              {/* CARDS TITLE */}
              <h1 className="mt-6 font-bold text-xl">{item.title}</h1>
              {/* CARDS DESCRIPTION*/}
              <p className="mt-6 text-textLight">{item.description}</p>
              {/* CARDS LINK */}
              <div className="flex flex-col h-full justify-end">
                <a href={item.link} className="flex flex-row gap-2 mt-20 text-textLight hover text-[15px] font-semibold">
                  {item.url}
                  {item.url !== '' ? <ArrowRightIcon className="-rotate-45 size-6" /> : null}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* LAST 2 ELEMENTS CONTAINER */}
        <div className="flex flex-basis flex-grow flex-shrink items-center justify-between gap-12">
          {/* CARDS */}
          {aboutProductItems().slice(3, 5).map((item, i) => (
            <div
              key={item.id}
              className="card !px-8 !py-10"
            >
              {/* CARDS ICON */}
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              {/* CARDS TITLE */}
              <h1 className="mt-6 font-bold text-xl">{item.title}</h1>
              {/* CARDS DESCRIPTION*/}
              <p className="mt-6 text-textLight">{item.description}</p>
              {/* CARDS LINK */}
              <div className="flex flex-col h-full justify-end">
                <a href={item.link} className="flex flex-row gap-2 my-6 text-textLight hover text-[15px] font-semibold">
                  {item.url}
                  {item.url !== '' ? <ArrowRightIcon className="-rotate-45 size-6" /> : null}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LINE AT THE END OF THE SECTION */}
      <center>
        <div className="px-8">
          <Separator orientation="horizontal" className="bg-[#575962] max-w-[600px]" />
        </div>
      </center>
    </section >
  );
};