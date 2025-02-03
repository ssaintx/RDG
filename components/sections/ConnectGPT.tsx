import { useTranslations } from 'next-intl';

export const ConnectGPT = () => {
  const t = useTranslations("ConnectGPT");

  return (
    <section className="connect-gpt">
      {/* TITLE AND SUBTITLE CONTAINER */}
      <div className="flex flex-col justify-center gap-4 items-center w-full container-padding">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t("Title")}</h1>
        <h2 className="text-center text-md sm:text-lg text-textLight">{t("Subtitle")}</h2>
      </div>
    </section>
  );
};