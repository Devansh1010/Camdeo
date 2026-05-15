import { Separator } from "../ui/separator";
import { ServiceCard } from "./components/ServicesCard";

// 1. Immutable Configuration Data Schema (Separated from the View Layer)
const services = [
  {
    number: "01",
    title: "Industrial Engineering Solutions",
    description:
      "Advanced CAD/CAM engineering services for manufacturing industries including CNC programming, 3D modeling, machining workflows, and production optimization.",
    points: [
      "3-Axis to 5-Axis CNC Programming",
      "Turn-Mill Programming",
      "2D Drafting & 3D Modeling",
      "Manufacturing Workflow Optimization",
    ],
  },
  {
    number: "02",
    title: "Authorized Software Solutions",
    description:
      "Official engineering software licensing and deployment solutions for industries, institutions, and manufacturing companies.",
    points: [
      "Mastercam Licensing",
      "SolidCAM Solutions",
      "SolidWorks Packages",
      "AutoCAD Industrial Setup",
    ],
  },
  {
    number: "03",
    title: "Professional CAD/CAM Training",
    description:
      "Industry-focused technical training programs designed for students, engineers, and corporate manufacturing teams.",
    points: [
      "Online & Offline Training",
      "Corporate Upskilling",
      "Advanced CNC Machining",
      "Industry-Ready Practical Learning",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
    relative w-full
    bg-gray-50 dark:bg-black
    text-black dark:text-white
    py-5 px-6 sm:px-10 lg:px-20
  "
    >
      <div className="max-w-360 mx-auto">

        {/* Header */}
        <div
          className="
        max-w-3xl mx-auto
        text-center px-8
      "
        >
          <p
            className="
          text-sm uppercase tracking-[0.2em]
          text-red-600 font-semibold mb-4
        "
          >
            What We Offer
          </p>

          <h2
            className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-[-0.04em]
          leading-tight
        "
          >
            Engineering Services Built For
            <span className="text-red-600">
              {" "}Modern Manufacturing.
            </span>
          </h2>

          <p
            className="
          mt-6 text-base md:text-lg
          leading-relaxed
          text-black/70 dark:text-white/70
          max-w-2xl mx-auto
        "
          >
            From industrial CAD/CAM solutions and software licensing
            to advanced technical training, we help engineers,
            students, and manufacturers stay industry-ready.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
    mt-20
    grid grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-6
  "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>
      <Separator  className="my-10"/>
    </section>
  );
}