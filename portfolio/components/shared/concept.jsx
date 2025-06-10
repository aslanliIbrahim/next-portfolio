import Image from "next/image";

export default function Concept({ items, title, type }) {
  return (
    <section className="my-[80px] md:my-[127px]">
      <div>
        <h2 className="font-medium text-textGray700 dark:text-textGray400 text-2xl mb-4">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={
              type === "concept"
                ? "bg-inputLight dark:bg-inputDark p-2 rounded flex justify-center items-center"
                : ""
            }
          >
            {type === "concept" && (
              <Image
                src={item.src}
                alt={item.alt}
                className="max-w-2xs md:w-full"
              />
            )}

            {type === "experience" && (
              <div>
                <h3 className="font-medium text-textGray700 dark:text-textGray400 mb-4">
                  {item.title}
                </h3>

                <p className="font-light text-textSecondary dark:text-textGray400 mb-4">
                  {item.position}
                </p>

                <p className="font-light text-textSecondary dark:text-textGray400 mb-4">
                  {item.time}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
