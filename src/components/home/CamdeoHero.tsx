
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
    relative w-full min-h-screen
    overflow-hidden
    text-white
    flex items-center justify-center
    px-6 sm:px-10 lg:px-20
    pt-20
  "
    >

        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
      w-full h-full
      object-cover
      object-center
    "
          >
            <source src="https://res.cloudinary.com/dtylevdry/video/upload/v1779382939/New_Camdeo_Video-2_bxvvev.mp4" type="video/mp4" />
          </video>
        </div>

      {/* Content Wrapper */}
      <div
        className="
      relative z-10
      max-w-5xl mx-auto
      flex flex-col items-center justify-center
      text-center
    "
      >

        {/* Small Label */}
        <div
          className="
        mb-6 px-4 py-2 rounded-full
        border border-white/10
        bg-white/5 backdrop-blur-sm
        text-sm tracking-wide font-medium
      "
        >
          CAD/CAM • CNC • Engineering Solutions
        </div>

        {/* Main Heading */}
        <h1
          className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-bold tracking-[-0.04em]
        leading-none
        max-w-5xl
      "
        >
          Authorized{" "}
          <span className="text-red-600 inline-block">
            CAD/CAM
          </span>{" "}
          Training Institute
          <br className="hidden md:block" />
          & Technical Services
        </h1>

        {/* Subtitle */}
        <p
          className="
        mt-8 max-w-3xl
        text-base sm:text-lg md:text-xl
        leading-relaxed
        text-white/70
      "
        >
          Master industry-standard engineering tools including
          Mastercam, SolidCAM, and SolidWorks. Delivering precision
          CNC programming and CAD services for modern manufacturing.
        </p>

        {/* CTA Buttons */}
        <div
          className="
        mt-12 flex flex-col sm:flex-row
        items-center gap-4
      "
        >

          {/* Primary CTA */}
          <Link href='#contact'>
            <Button
              className="
          px-8 py-7 rounded-full
          font-semibold text-base
          bg-white text-black
          hover:bg-white/90
        "
            >
              Get Started
            </Button>
          </Link>

          {/* Secondary CTA */}
          <Link href="#services">
            <Button
              variant="outline"
              className="
          px-8 py-7 rounded-full
          border-white/20
          bg-white/5
          backdrop-blur-sm
          text-white
          hover:bg-white hover:text-black
        "

            >
              Explore Services
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}