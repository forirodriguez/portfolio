import Image from "next/image";
import Link from "next/link";
import BoxReveal from "./ui/box-reveal";
import BlurFade from "./ui/blur-fade";

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string;
  path: string;
}

interface ProjectAccordionItemProps {
  item: Project;
  index: number;
  isOpen: boolean;
  toggleProject: (index: number) => void;
  totalItems: number;
}

export const ProjectAccordionItem = ({
  item,
  index,
  isOpen,
  toggleProject,
  totalItems,
}: ProjectAccordionItemProps) => {
  return (
    <div
      className={`border-b-4 border-cream/50 last:border-b-0  flex-grow transition-all duration-300 ease-in-out flex flex-col ${
        isOpen ? "flex-grow" : `h-[${100 / totalItems}%]`
      }`}
    >
      <button
        className={`w-full text-left flex justify-between items-center ${
          isOpen ? "py-4" : "flex-grow"
        }`}
        onClick={() => toggleProject(index)}
      >
        <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
          <span
            className={`text-lg font-bold ${
              isOpen ? "border-b-2 border-cream/50 text-gold" : ""
            }`}
          >
            {item.name}
          </span>
        </BoxReveal>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="mb-4 sm:mb-0 mt-4 space-y-4">
          <p className="text-sm text-cream">{item.technologies}</p>
          <p className="text-sm text-cream">
            {item.description}
            <span>
              <Link className="text-gold ml-4" href={item.path}>
                Ver más
              </Link>
            </span>
          </p>

          <BlurFade delay={0.25} inView>
            <div>
              <div className="hidden sm:block relative aspect-video h-3/2 rounded-lg overflow-hidden mt-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </BlurFade>
        </div>
      )}
    </div>
  );
};
