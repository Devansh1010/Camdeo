import Image from "next/image";

interface TrainingCardProps {
    software: string;
    shortName: string;
    description: string;
    modules: string[];
    image: string;
    sectionId: string
}

export const TrainingCard = ({
    software,
    shortName,
    description,
    modules,
    image,
    sectionId
}: TrainingCardProps) => {
    return (
        <div
        id={sectionId}
            className="
        group
        overflow-hidden
        rounded-[32px]
        border border-black/10 dark:border-white/10
        bg-white dark:bg-zinc-950
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        h-full
        flex flex-col
      "
        >

            {/* Hero Image */}
            <div className="relative h-60 overflow-hidden">

                {/* Image */}
                <Image
                    src={image}
                    alt={software}
                    fill
                    className="
            object-top
            transition-transform duration-700
            group-hover:scale-110
          "
                />

                {/* Overlay */}
                <div
                    className="
            absolute inset-0
            bg-linear-to-t
            from-black/90
            via-black/50
            to-black/20
          "
                />

                {/* Top Content */}
                <div
                    className="
            absolute inset-0
            p-6
            flex flex-col justify-between
          "
                >

                    {/* Software Badge */}
                    <div
                        className="
              w-16 h-16
              rounded-2xl
              backdrop-blur-xl
              bg-white/10
              border border-white/10
              text-white
              flex items-center justify-center
              text-xl font-bold
              shadow-lg
            "
                    >
                        {shortName}
                    </div>

                    {/* Title */}
                    <div>
                        <h3
                            className="
                text-3xl
                font-bold
                tracking-tight
                text-white
              "
                        >
                            {software}
                        </h3>

                        <p
                            className="
                mt-3
                text-white/70
                leading-relaxed
                max-w-[95%]
              "
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Modules */}
            <div className="p-8 flex-1 flex flex-col">

                {/* Heading */}
                <div
                    className="
            text-sm font-semibold
            uppercase tracking-[0.2em]
            text-red-600
            mb-6
          "
                >
                    Modules Included
                </div>

                {/* Module List */}
                <div className="space-y-4">
                    {modules.map((module) => (
                        <div
                            key={module}
                            className="
                flex items-start gap-4
                rounded-2xl
                bg-black/3
                dark:bg-white/4
                border border-black/5 dark:border-white/5
                px-5 py-4
                transition-all duration-300
                hover:bg-black/5
                dark:hover:bg-white/6
              "
                        >

                            {/* Icon */}
                            <div
                                className="
                  mt-1
                  flex items-center justify-center
                  w-6 h-6
                  rounded-full
                  bg-red-600/15
                  shrink-0
                "
                            >
                                <div className="w-2 h-2 rounded-full bg-red-600" />
                            </div>

                            {/* Text */}
                            <span
                                className="
                  text-sm md:text-base
                  leading-relaxed
                  text-black/80 dark:text-white/80
                "
                            >
                                {module}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};