'use client';
export default function ContactMe() {
  const handleScroll = () => {
    const target = document.querySelector("#form");
    if (!target) return;
    if (typeof window !== 'undefined' && window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleScroll}
      className="text-textGray700 dark:text-textGray400 underline underline-offset-1 cursor-pointer"
    >
      Contact me
    </button>
  );
}
