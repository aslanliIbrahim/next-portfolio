import Image from "next/image";

export default function Concept({ items, title }) {
  return (
    <section>
      <div>
        <h2 className="font-medium text-gray-700 text-2xl mb-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              className="max-w-2xs md:w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
