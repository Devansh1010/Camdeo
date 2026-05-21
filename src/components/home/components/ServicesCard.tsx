import Image from "next/image";

type ServiceCardProps = {
    number: string;
    title: string;
    description: string;
    points: string[];
    image: string;
};

export const ServiceCard = ({
    number,
    title,
    description,
    points,
    image,
}: ServiceCardProps) => {
    return (
        <div
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
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">

                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="
            absolute inset-0
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
                />

                {/* Dark Overlay */}
                <div
                    className="
            absolute inset-0
            bg-linear-to-t
            from-black/90
            via-black/50
            to-black/20
          "
                />

                {/* Content Over Image */}
                <div
                    className="
            absolute bottom-0 left-0
            p-6 w-full
          "
                >
                    {/* Number */}
                    <div
                        className="
              inline-flex
              px-3 py-1
              rounded-full
              bg-red-600
              text-white
              text-xs font-bold
              tracking-[0.2em]
              mb-4
            "
                    >
                        {number}
                    </div>

                    {/* Title */}
                    <h3
                        className="
              text-2xl md:text-3xl
              font-bold
              text-white
              leading-tight
              max-w-[90%]
            "
                    >
                        {title}
                    </h3>
                </div>
            </div>

            {/* Bottom Content */}
            <div className="p-8 flex flex-col flex-1">

                {/* Description */}
                <p
                    className="
            text-base leading-relaxed
            text-black/70 dark:text-white/70
          "
                >
                    {description}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                    {points.map((point) => (
                        <div
                            key={point}
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
                                {point}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};