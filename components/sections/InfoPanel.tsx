import Image from 'next/image';

import { infoPanelItems } from '@/constants';
import { ArrowDownIcon } from '@radix-ui/react-icons';

export const InfoPanel = () => {
    return (
        <section
            className="info-panel"
            id="info-panel"
        >
            {/* CARDS CONTAINER */}
            <div className="card-container container-padding container-padding-2 lg:py-12 lg:gap-12">
                {/* CARDS */}
                {infoPanelItems().slice(0, 5).map((item, i) => (
                    <div
                        key={i}
                        className={`card !px-8 !py-10 ${i === 0 ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''} ${i === 1 ? 'lg:col-span-1 md:col-span-2' : ''}`}
                    >
                        {/* CARDS ICON */}
                        <Image src={item.icon} alt={item.title} width={40} height={40} />
                        {/* CARDS TITLE */}
                        <h1 className="mt-6 font-bold text-xl">{item.title}</h1>
                        {/* CARDS DESCRIPTION*/}
                        <p className="mt-6 text-textLight" dangerouslySetInnerHTML={{ __html: item.description }} />
                        {/* CARDS LINK */}
                        {item.url !== '' ? (<div className="mt-8 flex items-end h-full">
                            <a href={item.link} className="flex flex-row gap-2 my-6 text-textLight hover text-[15px] font-semibold">
                                {item.url}
                                {item.url !== '' ? <ArrowDownIcon className="size-6" /> : null}
                            </a>
                        </div>) : (null)}
                    </div>
                ))}
            </div>
        </section>
    );
};