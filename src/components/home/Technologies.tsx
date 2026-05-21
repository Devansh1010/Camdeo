import Image from "next/image";

const showcaseContent = [
    {
        subtitle: "high performance cnc machining",
        title: "iMachining®",
        description:
            "SolidCAM’s iMachining® 2D & 3D modules revolutionize CNC programming with AI‑driven toolpaths that automatically optimize feeds, speeds, and step‑downs, giving you faster cycle times, longer tool life, and higher profits. Easily handle complex geometry with patented Technology Wizard that dramatically increases your CNCs productivity.",
        image: "/imachining-1.webp",
    },
    {
        subtitle: "powerful and easy to learn",
        title: "Mill‑Turn & Swiss Solutions",
        description:
            "Program the most complex multi‑channel, multi‑spindle CNC machines with ease. Our CAM software delivers unmatched flexibility, synchronization, and full‑machine simulation for both Mill‑Turn and Swiss‑Type machining - all powered by iMachining 2D & 3D",
        image: "/MillTurn.webp",
    },
    {
        subtitle: "control. monitor. maximize productivity",
        title: "SolidShop",
        description:
            "SolidShop is SolidCAM’s all-in-one ecosystem for managing, controlling, and monitoring CNC production. It connects CAM programming with the shop floor through integrated modules for G-Code Editing & Simulation, Shop Floor PDM, SolidCAM for Operators, DNC Communication, Machine Monitoring & ERP/MES integration.",
        image: "/SolidShop2.webp",
    },
];

const Technologies = () => {
    return (
        <section
            className="
        relative w-full
        bg-white dark:bg-black
        text-black dark:text-white
        py-28 px-6 sm:px-10 lg:px-20
        overflow-hidden
      "
        >
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center">

                <p
                    className="
              text-sm uppercase tracking-[0.2em]
              text-red-600 font-semibold mb-4
            "
                >
                    Why Choose Us
                </p>

                <h2
                    className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-[-0.04em]
              leading-tight
            "
                >
                    Engineering Innovation For
                    <span className="text-red-600">
                        {" "}Modern Industries.
                    </span>
                </h2>

                <p
                    className="
              mt-6
              text-base md:text-lg
              leading-relaxed
              text-black/70 dark:text-white/70
              max-w-2xl mx-auto
            "
                >
                    Replace this with your company description later.
                </p>
            </div>

            {/* Rows */}
            <div className="mt-28 space-y-20">

                {showcaseContent.map((item, index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <div
                            key={item.title}
                            className="
                  relative overflow-hidden
                  rounded-[20px]
                  border border-black/10 dark:border-white/10
                  min-h-130
                "
                        >

                            {/* Full Background Image */}
                            <div className="absolute inset-0">

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="
                      object-cover
                      scale-110
                    "
                                />

                                {/* Blur Layer */}
                                <div
                                    className="
                      absolute inset-0
                      backdrop-blur-md
                      bg-black/60
                    "
                                />

                                {/* Gradient */}
                                <div
                                    className="
                      absolute inset-0
                      bg-linear-to-r
                      from-black/80
                      via-black/60
                      to-black/80
                    "
                                />
                            </div>

                            {/* Content Grid */}
                            <div
                                className={`
                    relative z-10
                    grid lg:grid-cols-2
                    gap-16
                    items-center
                    p-10 md:p-16
                    min-h-130

                    ${isReverse
                                        ? "lg:[&>*:first-child]:order-2"
                                        : ""
                                    }
                  `}
                            >

                                {/* Text Content */}
                                <div>

                                    <p
                                        className="
                        text-sm uppercase tracking-[0.2em]
                        text-red-500 font-semibold
                      "
                                    >
                                        {item.subtitle}
                                    </p>

                                    <h3
                                        className="
                        mt-5
                        text-3xl md:text-5xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-white
                      "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                        mt-8
                        text-base md:text-lg
                        leading-relaxed
                        text-white/70
                        max-w-xl
                      "
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Sloped Image */}
                                <div className="relative">

                                    {/* Glow */}
                                    <div
                                        className="
                        absolute -top-10 -right-10
                        w-40 h-40
                        bg-red-600/20
                        blur-3xl
                        rounded-full
                      "
                                    />

                                    {/* Double Sloped Container */}
                                    <div
                                        className="
                        relative
                        h-90
                        overflow-hidden
                        border border-white/10
                        shadow-2xl

                        [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]

                        rounded-[30px]
                      "
                                    >

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="
                          object-cover
                          transition-transform duration-700
                          hover:scale-105
                        "
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="
                          absolute inset-0
                          bg-linear-to-t
                          from-black/40
                          to-transparent
                        "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Technologies;