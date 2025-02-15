import Image from 'next/image';

import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { connectGPTItems } from '@/constants';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const ConnectGPT = () => {
  const t = useTranslations("ConnectGPT");

  return (
    <section className="connect-gpt">
      {/* TITLE AND SUBTITLE CONTAINER */}
      <div className="flex flex-col justify-center gap-4 items-center w-full container-padding">
        <h1 className="title-text">{t("Title")}</h1>
        <h2 className="subtitle-text text-textLight">{t("Subtitle")}</h2>
      </div>
      {/* CARDS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6 container-padding mt-12 w-full">
        {connectGPTItems().map((item, i) => (
          <div className={`card flex flex-row gap-4 justify-center ${i === 0 ? 'md:rotate-left-card' : ''} ${i === 2 ? 'md:rotate-right-card' : ''}`} key={item.id}>
            {/* CARDS IMAGE */}
            <Image src={item.image} alt={item.title} width={416} height={206} className="w-full rounded-xl" />
            {/* CARDS TITLE */}
            <h1 className="text-xl font-bold">{item.title}</h1>
            {/* CARDS PARAGRAPH */}
            <p className="text-textLight">{item.description}</p>
            {/* CARDS BUTTON */}
            <div className="flex items-center justify-end">
              <Button className="btn-dark">
                <Image src="/icons/telegram.svg" alt="connect-icon" width={18} height={18} />
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* BUTTON CONTAINER*/}
      <div className="flex items-center justify-center w-full container-padding my-12 pb-6">
        <Button className="btn-blue">
          {t("Button")}
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
};