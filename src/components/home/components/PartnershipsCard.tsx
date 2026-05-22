import Image from "next/image";

interface PartnerCardProps {
  logo: string;
  title: string;
  description: string;
  category: string;
}


export const PartnerCard = ({
  logo,
  title,
  description,
  category,
}: PartnerCardProps) => {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[32px]
        border border-black/10 dark:border-white/10
        bg-gray-50 dark:bg-zinc-950
        p-8
        min-h-90
        flex flex-col justify-between
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute top-0 right-0
          w-40 h-40
          bg-red-600/10
          blur-3xl
          rounded-full
        "
      />

      <div className="relative">

        {/* Logo */}
        <div
          className="
            h-16
            flex items-center
            mb-10
          "
        >
          <Image
            src={logo}
            alt={title}
            width={200}
            height={70}
            className="
             w-auto
              object-contain
              opacity-80
              transition-all duration-500
              group-hover:grayscale-0
              group-hover:opacity-100
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            text-3xl font-bold
            tracking-tight
          "
        >
          {title}
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

      {/* Bottom Label */}
      <div
        className="
          relative
          pt-8 mt-8
          border-t border-black/10 dark:border-white/10
          flex items-center justify-between
        "
      >

        <span
          className="
            text-sm uppercase tracking-[0.2em]
            text-black/50 dark:text-white/50
          "
        >
          {category}
        </span>

        <div
          className="
            w-2 h-2 rounded-full
            bg-red-600
          "
        />
      </div>
    </div>
  );
};