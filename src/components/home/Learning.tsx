import React from 'react'
import { TrainingCard } from './components/TrainingCard'
import { Separator } from '../ui/separator';

const trainingPrograms = [
    {
        software: "SolidCAM",
        shortName: "S",
        description:
            "Integrated CAM training designed for high-performance machining and intelligent manufacturing environments.",
        image: '/SolidCAM.svg',
        sectionId: 'solidcam',
        modules: [
            "iMachining",
            "2.5D Milling",
            "Multi-Axis Machining",
            "Turning Operations",
            "CAM Simulation",
            "Production Workflow",
        ],
    },
    {
        software: "Mastercam",
        shortName: "M",
        description:
            "Advanced CAM programming training focused on precision CNC machining and real-world manufacturing workflows.",
        image: '/training.png',
        sectionId: 'mastercam',
        modules: [
            "2D Milling",
            "Mill 3D",
            "4 & 5 Axis Programming",
            "Turn-Mill Operations",
            "Toolpath Optimization",
            "Post Processor Setup",
        ],
    },

];

const Learning = () => {
    return (
        <section
            id='training'
            className="
    relative w-full
    bg-white dark:bg-black
    text-black dark:text-white
    py-18 px-6 sm:px-10 lg:px-20
    overflow-hidden
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
                        Learn With Us
                    </p>

                    <h2
                        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-[-0.04em]
          leading-tight
        "
                    >
                        Industry-Focused Training For
                        <span className="text-red-600">
                            {" "}Future Engineers.
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
                        Learn industry-standard CAD/CAM software with practical,
                        production-oriented training designed for students,
                        engineers, and manufacturing professionals.
                    </p>
                </div>

                {/* Cards */}

                <div
                    className="
        mt-20
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-2
        gap-6
      "
                >
                    {trainingPrograms.map((program) => (
                        <TrainingCard
                            key={program.software}
                            software={program.software}
                            shortName={program.shortName}
                            description={program.description}
                            modules={program.modules}
                            image={program.image}
                            sectionId={program.sectionId}
                        />
                    ))}
                </div>
            </div>

            <Separator className="my-10" />
        </section>
    )
}

export default Learning