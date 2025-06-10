import Image from "next/image";
import Aslanli3 from "../../public/Aslanlibrahim2.jpeg";
import Link from "next/link";
import ThemeToggle from "../shared/themeToggle";
import ContactMe from "../shared/contactme";

export default function Title() {

  return (
    <section>
      <div className="flex flex-col mb-2 md:mb-0 md:justify-between md:flex-row items-center">

        <div className="w-[74px] h-[74px] rounded-full mb-4">
          <Image
            src={Aslanli3}
            className="w-full h-full object-cover rounded-full"
            alt="Aslanli_Ibrahim"
          />
        </div>
        <ThemeToggle />
      </div>

      <div>
        <h1 className="text-2xl font-medium leading-[1.5] text-textGray700 dark:text-textGray400 mb-2 ">
          Welcome to my Portfolio<span>👋</span>
        </h1>

        <p className="font-light text-textSecondary dark:text-textGray400 mb-4">
          I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who
          prioritizes simplicity and usability. Currently, I'm Digital Product
          Designer on Norma. Formerly Enrich Mobile, ASDC, TalentMondo, and
          MobileUpp. I love working on side projects, trying to improve myself
          on SwiftUI and Webflow.
        </p>

        <ContactMe />
      </div>
    </section>
  );
}
