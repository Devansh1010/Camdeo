import {
    GraduationCap,
    Factory,
    Cpu,
    Boxes,
} from "lucide-react";
import { Separator } from "../ui/separator";


const About = () => {
    return (
        <section
            id="about"
            className="
    w-full
    bg-gray-50 dark:bg-black
    text-black dark:text-white
    py-5 px-6 sm:px-10 lg:px-20"
        >
            <div className="max-w-360 mx-auto">

                {/* Section Header */}
                {/* Section Header */}
                <div
                    className="
    max-w-3xl
    mx-auto
    text-center
    px-8
  "
                >
                    <p
                        className="
      text-sm uppercase tracking-[0.2em]
      text-red-600 font-semibold mb-4
    "
                    >
                        Who We Are
                    </p>

                    <h2
                        className="
      text-3xl sm:text-4xl md:text-5xl
      font-bold tracking-[-0.04em]
      leading-tight
    "
                    >
                        Empowering Modern Manufacturing Through
                        <span className="text-red-600">
                            {" "}
                            Engineering Excellence.
                        </span>
                    </h2>

                    <p
                        className="
      mt-6
      text-base md:text-lg
      leading-relaxed
      text-black/70 dark:text-white/70
      max-w-2xl
      mx-auto
    "
                    >
                        Camdeo Technologies bridges the gap between advanced
                        manufacturing technology and practical industrial skill
                        development through training, engineering solutions,
                        software distribution, and CNC programming services.
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    className="
        mt-16
        grid grid-cols-1 md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
                >

                    {/* Card 1 */}
                    <div
                        className="
          group rounded-3xl
          border border-black/10 dark:border-white/10
          p-8
          hover:border-black dark:hover:border-white
          transition-all duration-300
        "
                    >
                        <div
                            className="
            w-14 h-14 rounded-2xl
            border border-black/10 dark:border-white/10
            flex items-center justify-center
            mb-6
          "
                        >
                            <GraduationCap size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight">
                            Technical Training
                        </h3>

                        <p
                            className="
            mt-4 leading-relaxed
            text-black/70 dark:text-white/70
          "
                        >
                            Authorized CAD/CAM training for students,
                            engineers, and professionals using
                            industry-standard software and machining workflows.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="
          group rounded-3xl
          border border-black/10 dark:border-white/10
          p-8
          hover:border-black dark:hover:border-white
          transition-all duration-300
        "
                    >
                        <div
                            className="
            w-14 h-14 rounded-2xl
            border border-black/10 dark:border-white/10
            flex items-center justify-center
            mb-6
          "
                        >
                            <Factory size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight">
                            Corporate Upskilling
                        </h3>

                        <p
                            className="
            mt-4 leading-relaxed
            text-black/70 dark:text-white/70
          "
                        >
                            Online and offline industrial training programs
                            designed to improve workforce productivity,
                            machining precision, and manufacturing efficiency.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="
          group rounded-3xl
          border border-black/10 dark:border-white/10
          p-8
          hover:border-black dark:hover:border-white
          transition-all duration-300
        "
                    >
                        <div
                            className="
            w-14 h-14 rounded-2xl
            border border-black/10 dark:border-white/10
            flex items-center justify-center
            mb-6
          "
                        >
                            <Cpu size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight">
                            CNC Programming
                        </h3>

                        <p
                            className="
            mt-4 leading-relaxed
            text-black/70 dark:text-white/70
          "
                        >
                            Advanced CAM programming services for
                            3-axis to 5-axis milling, turn-mill operations,
                            and complex CNC machining applications.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="
          group rounded-3xl
          border border-black/10 dark:border-white/10
          p-8
          hover:border-black dark:hover:border-white
          transition-all duration-300
        "
                    >
                        <div
                            className="
            w-14 h-14 rounded-2xl
            border border-black/10 dark:border-white/10
            flex items-center justify-center
            mb-6
          "
                        >
                            <Boxes size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight">
                            Software Solutions
                        </h3>

                        <p
                            className="
            mt-4 leading-relaxed
            text-black/70 dark:text-white/70
          "
                        >
                            Authorized software sales and licensing
                            solutions for engineering institutions,
                            SMEs, and manufacturing industries.
                        </p>
                    </div>
                </div>
            </div>
            <Separator  className="my-10"/>
        </section>
    )
}

export default About