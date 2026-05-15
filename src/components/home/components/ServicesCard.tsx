interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    points: string[];
}

export const ServiceCard = ({
    number,
    title,
    description,
    points,
}: ServiceCardProps) => {
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

                {/* Number */}
                <div
                    className="
        text-sm font-semibold
        tracking-[0.2em]
        text-red-600 mb-6
      "
                >
                    {number}
                </div>

                {/* Title */}
                <h3
                    className="
        text-2xl md:text-3xl
        font-bold tracking-tight
        leading-tight
      "
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="
        mt-5
        text-base leading-relaxed
        text-black/70 dark:text-white/70
      "
                >
                    {description}
                </p>
            </div>

            {/* Features */}
            <div
                className="
      mt-8
      space-y-3
    "
            >
                {points.map((point) => (
                    <div
                        key={point}
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
            bg-red-600
            shrink-0
          "
                        />

                        <span
                            className="
            text-sm md:text-base
            text-black/80 dark:text-white/80
          "
                        >
                            {point}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};