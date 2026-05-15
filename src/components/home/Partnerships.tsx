import { Separator } from "../ui/separator";
import { PartnerCard } from "./components/PartnershipsCard";

const partners = [
    {
        shortName: "M",
        title: "Mastercam",
        description:
            "Industry-leading CAM software for precision CNC machining, multi-axis programming, and advanced manufacturing workflows.",
        category: "CAM Programming",
    },
    {
        shortName: "S",
        title: "SolidCAM",
        description:
            "Integrated CAM solutions built for high-performance milling, turning, and intelligent manufacturing optimization.",
        category: "Smart Manufacturing",
    },
    {
        shortName: "SW",
        title: "SolidWorks",
        description:
            "Professional 3D CAD software used worldwide for product design, engineering simulation, and manufacturing development.",
        category: "3D Product Design",
    },
    {
        shortName: "A",
        title: "AutoCAD",
        description:
            "Industry-standard drafting and technical drawing software for precise 2D documentation and engineering workflows.",
        category: "Technical Drafting",
    },
];

const Partnerships = () => {
    return (
        <section
            className="
    relative w-full
    bg-white dark:bg-black
    text-black dark:text-white
    py-5 px-6 sm:px-10 lg:px-20
  "
        >
            <div className="max-w-360 mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center px-8">
                    <p
                        className="
          text-sm uppercase tracking-[0.2em]
          text-red-600 font-semibold mb-4
        "
                    >
                        Official Partners
                    </p>

                    <h2
                        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-[-0.04em]
          leading-tight
        "
                    >
                        Trusted Technologies Behind
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
                        We work with globally recognized engineering and
                        manufacturing software platforms trusted by industries,
                        institutions, and advanced CNC production environments.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="
        mt-20
        grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
        gap-6
      "
                >
                    {partners.map((partner) => (
                        <PartnerCard
                            key={partner.title}
                            shortName={partner.shortName}
                            title={partner.title}
                            description={partner.description}
                            category={partner.category}
                        />
                    ))}
                </div>
            </div>
            <Separator  className="my-10"/>
        </section>
    )
}

export default Partnerships