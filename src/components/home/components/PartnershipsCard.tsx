interface PartnerCardProps {
  shortName: string;
  title: string;
  description: string;
  category: string;
}

export const PartnerCard = ({
  shortName,
  title,
  description,
  category,
}: PartnerCardProps) => {
  return (
    <div
      className="
        group relative
        rounded-[32px]
        border border-black/10 dark:border-white/10
        bg-gray-50 dark:bg-black
        p-8
        min-h-80
        flex flex-col justify-between
        transition-all duration-500
        hover:border-black dark:hover:border-white
        hover:-translate-y-1
      "
    >
      <div>

        {/* Logo / Initial */}
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
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5 leading-relaxed
            text-black/70 dark:text-white/70
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom Label */}
      <div
        className="
          pt-8 mt-8
          border-t border-black/10 dark:border-white/10
          text-sm uppercase tracking-widest
          text-black/50 dark:text-white/50
        "
      >
        {category}
      </div>
    </div>
  );
};