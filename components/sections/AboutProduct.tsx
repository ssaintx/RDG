import { aboutProductItems } from "@/constants";

export const AboutProduct = () => {
  return (
    <section className="about">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 container-padding container-padding-2">
        {aboutProductItems().slice(0, 5).map((item, i) => (
          <div
            key={i}
            className={`p-6 bg-backgroundSecondary rounded-xl ${i === 0 ? 'col-span-1 md:col-span-2' : ''} ${i === 3 ? 'lg:col-span-1' : ''} ${i === 4 ? 'lg:col-span-2' : ''}`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};
