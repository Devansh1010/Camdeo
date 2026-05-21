import {
    Cpu,
    GraduationCap,
    Factory,
    BadgeCheck,
} from "lucide-react";
import Image from "next/image";

const founderSkills = [
    "CAD/CAM Engineering",
    "SolidCam & Mastercam Programming",
    "5-Axis Machining",
    "CNC Manufacturing",
    "Corporate Training",
    "Industrial Automation",
];
const Founder = () => {
    return (
        <section
            className="
    relative w-full
    bg-white dark:bg-black
    text-black dark:text-white px-6 sm:px-10 lg:px-20
    overflow-hidden py-10
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
                        Meet Our Founder
                    </p>

                    <h2
                        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-[-0.04em]
          leading-tight
        "
                    >
                        Built By An Engineer For
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
                        Camdeo Technologies was founded with the vision of
                        bridging the gap between industrial manufacturing
                        requirements and practical engineering education.
                    </p>
                </div>

                {/* Founder Card */}
                <div
                    className="
        mt-20
        rounded-[40px]
        border border-black/10 dark:border-white/10
        overflow-hidden
      "
                >

                    <div
                        className="
          grid grid-cols-1 lg:grid-cols-2
        "
                    >

                        {/* Left Side */}
                        <div
                            className="
    relative
    bg-gray-50 dark:bg-black
    border-b lg:border-b-0 lg:border-r
    border-black/10 dark:border-white/10
    p-10 md:p-14
    flex flex-col justify-between
  "
                        >

                            {/* Top Content */}
                            <div>

                                {/* Founder Image */}
                                <div
                                    className="
        relative
        w-full
        h-105
        rounded-[32px]
        overflow-hidden
        border border-black/10 dark:border-white/10
        mb-6
        group
      "
                                >
                                    <Image
                                        src="/Jaiminbhai-professional.png"
                                        alt="Founder"
                                        fill
                                        priority
                                        className="
          object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
                                    />

                                    {/* Gradient Overlay */}
                                    <div
                                        className="
          absolute inset-0
          bg-linear-to-t
          from-black/40
          via-black/10
          to-transparent
        "
                                    />
                                </div>

                                {/* Name */}
                                <h3
                                    className="
        text-3xl md:text-4xl
        font-bold tracking-tight
      "
                                >
                                    Jaimin Prajapati
                                </h3>

                                {/* Designation */}
                                <div
                                    className="
        mt-4 inline-flex items-center gap-2
        rounded-full
        border border-black/10 dark:border-white/10
        px-4 py-2
        text-sm uppercase tracking-wider
        text-red-600 font-semibold
      "
                                >
                                    <BadgeCheck size={16} />
                                    CEO / Founder
                                </div>

                                {/* About */}
                                <p
                                    className="
        mt-8
        text-base md:text-lg
        leading-relaxed
        text-black/70 dark:text-white/70
      "
                                >
                                    Passionate about modern manufacturing and industrial
                                    skill development, he focuses on delivering
                                    industry-ready CAD/CAM education, CNC programming
                                    expertise, and engineering solutions that create
                                    real impact for students and manufacturing
                                    businesses.
                                </p>
                            </div>

                            {/* Bottom Stats */}
                            <div
                                className="
      mt-12
      grid grid-cols-3
      gap-4
    "
                            >

                                <div
                                    className="
        rounded-2xl
        border border-black/10 dark:border-white/10
        p-5
      "
                                >
                                    <div className="text-2xl font-bold">
                                        CAD
                                    </div>

                                    <div
                                        className="
          mt-2 text-sm
          text-black/60 dark:text-white/60
        "
                                    >
                                        Design Expertise
                                    </div>
                                </div>

                                <div
                                    className="
        rounded-2xl
        border border-black/10 dark:border-white/10
        p-5
      "
                                >
                                    <div className="text-2xl font-bold">
                                        CAM
                                    </div>

                                    <div
                                        className="
          mt-2 text-sm
          text-black/60 dark:text-white/60
        "
                                    >
                                        CNC Programming
                                    </div>
                                </div>

                                <div
                                    className="
        rounded-2xl
        border border-black/10 dark:border-white/10
        p-5
      "
                                >
                                    <div className="text-2xl font-bold">
                                        5X
                                    </div>

                                    <div
                                        className="
          mt-2 text-sm
          text-black/60 dark:text-white/60
        "
                                    >
                                        Axis Machining
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Side */}
                        <div
                            className="
  p-8 md:p-12
  flex flex-col
  justify-between
  h-full
"
                        >

                            {/* Skills Header */}
                            <div
                                className="
              flex items-center gap-3
              mb-6
            "
                            >
                                <div
                                    className="
                w-12 h-12 rounded-2xl
                border border-black/10 dark:border-white/10
                flex items-center justify-center
              "
                                >
                                    <Cpu size={22} />
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold">
                                        Core Expertise
                                    </h4>

                                    <p
                                        className="
                  text-black/60 dark:text-white/60
                  mt-1
                "
                                    >
                                        Engineering • Manufacturing • Training
                                    </p>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div
  className="
    grid grid-cols-1 sm:grid-cols-2
    gap-4
    flex-1
  "
>
                                {founderSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-black/10 dark:border-white/10
                  p-5
                "
                                    >
                                        <div
                                            className="
                    w-10 h-10 rounded-xl
                    border border-black/10 dark:border-white/10
                    flex items-center justify-center
                    shrink-0
                  "
                                        >
                                            <GraduationCap size={18} />
                                        </div>

                                        <span
                                            className="
                    text-sm md:text-base
                    text-black/80 dark:text-white/80
                  "
                                        >
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Quote */}
                            <div
                                className="
              mt-6
              rounded-3xl
              border border-black/10 dark:border-white/10
              bg-gray-50 dark:bg-black
              p-8
            "
                            >
                                <div className="flex items-start gap-4">

                                    <Factory
                                        size={28}
                                        className="text-red-600 shrink-0 mt-1"
                                    />

                                    <p
                                        className="
                  text-lg leading-relaxed
                  text-black/80 dark:text-white/80
                "
                                    >
                                        “Our mission is to make engineers industry-ready
                                        through practical CAD/CAM education and advanced
                                        manufacturing expertise.”
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder