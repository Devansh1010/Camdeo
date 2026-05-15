interface TrainingCardProps {
    software: string;
    shortName: string;
    description: string;
    modules: string[];
}

export const TrainingCard = ({
    software,
    shortName,
    description,
    modules,
}: TrainingCardProps) => {
    return (
        <div
            className="
        group
        rounded-[32px]
        border border-black/10 dark:border-white/10
        bg-white dark:bg-black
        p-8
        transition-all duration-300
        hover:border-black dark:hover:border-white
        hover:-translate-y-1
        flex flex-col
        h-full
      "
        >

            {/* Top */}
            <div>

                {/* Icon */}
                <div
                    className="
            w-16 h-16 rounded-2xl
            border border-black/10 dark:border-white/10
            flex items-center justify-center
            text-2xl font-bold
            mb-8
          "
                >
                    {shortName}
                </div>

                {/* Title */}
                <h3
                    className="
            text-3xl font-bold
            tracking-tight
          "
                >
                    {software}
                </h3>

                {/* Description */}
                <p
                    className="
            mt-5
            leading-relaxed
            text-black/70 dark:text-white/70
          "
                >
                    {description}
                </p>
            </div>

            {/* Modules */}
            <div
                className="
          mt-8
          grid grid-cols-1
          gap-3
        "
            >
                {modules.map((module) => (
                    <div
                        key={module}
                        className="
              flex items-center gap-3
              rounded-2xl
              border border-black/10 dark:border-white/10
              px-4 py-4
            "
                    >
                        <div
                            className="
                w-2 h-2 rounded-full
                bg-red-600 shrink-0
              "
                        />

                        <span
                            className="
                text-sm md:text-base
                text-black/80 dark:text-white/80
              "
                        >
                            {module}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};