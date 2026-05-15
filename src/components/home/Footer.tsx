import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    "about",
    "services",
    "training",
    "contact",
  ],
  training: [
    "Mastercam",
    "SolidCAM",
    "SolidWorks",
    "AutoCAD",
  ],
  services: [
    "CAD Services",
    "CAM Programming",
    "Corporate Training",
    "Software Solutions",
  ],
};

const Footer = () => {
  return (
    <footer
      className="
    relative w-full
    bg-white dark:bg-black
    text-black dark:text-white
    border-t border-black/10 dark:border-white/10
    px-6 sm:px-10 lg:px-20
    pt-24 pb-10
    overflow-hidden
  "
    >
      <div className="max-w-360 mx-auto">

        {/* Top CTA */}
        <div
          className="
        rounded-[40px]
        border border-black/10 dark:border-white/10
        bg-gray-50 dark:bg-black
        p-10 md:p-14
      "
        >
          <div
            className="
          flex flex-col lg:flex-row
          lg:items-center lg:justify-between
          gap-10
        "
          >

            {/* Left */}
            <div className="max-w-2xl">

              <p
                className="
              text-sm uppercase tracking-[0.2em]
              text-red-600 font-semibold mb-4
            "
              >
                Start Your Engineering Journey
              </p>

              <h2
                className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-[-0.04em]
              leading-tight
            "
              >
                Ready To Upgrade Your
                <span className="text-red-600">
                  {" "}Manufacturing Skills?
                </span>
              </h2>

              <p
                className="
              mt-6
              text-base md:text-lg
              leading-relaxed
              text-black/70 dark:text-white/70
            "
              >
                Join industry-focused CAD/CAM training programs
                and advanced manufacturing solutions designed for
                engineers, students, and industries.
              </p>
            </div>

            {/* Right */}
            <div>
              <button
                className="
              inline-flex items-center gap-3
              rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              px-8 py-4
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
            "
              >
                Enquire Now
                <ArrowUpRight size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* Footer Content */}
        <div
          className="
        mt-24
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5
        gap-12
      "
        >

          {/* Brand */}
          <div className="xl:col-span-2">

            <div
              className="
            text-3xl font-bold
            tracking-tight
          "
            >
              Camdeo
              <span className="text-red-600">.</span>
            </div>

            <p
              className="
            mt-6
            text-base leading-relaxed
            text-black/70 dark:text-white/70
            max-w-md
          "
            >
              Specialized industrial engineering services and
              CAD/CAM training institute empowering the next
              generation of manufacturing professionals.
            </p>

            {/* Contact */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">
                <Phone
                  size={18}
                  className="text-red-600"
                />

                <span
                  className="
                text-black/80 dark:text-white/80
              "
                >
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={18}
                  className="text-red-600"
                />

                <span
                  className="
                text-black/80 dark:text-white/80
              "
                >
                  info@camdeo.com
                </span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="text-red-600 mt-1"
                />

                <span
                  className="
                text-black/80 dark:text-white/80
              "
                >
                  Ahmedabad, Gujarat, India
                </span>
              </div>

            </div>
          </div>

          {/* Company */}
          <div>

            <h3
              className="
            text-lg font-semibold
            mb-6
          "
            >
              Company
            </h3>

            <div className="space-y-4">
              {footerLinks.company.map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="
                block
                text-black/70 capitalize dark:text-white/70
                transition-colors duration-300
                hover:text-red-600
              "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Training */}
          <div>

            <h3
              className="
            text-lg font-semibold
            mb-6
          "
            >
              Training
            </h3>

            <div className="space-y-4">
              {footerLinks.training.map((link) => (
                <Link
                  key={link}
                  href="#learning"
                  className="
                block
                text-black/70 dark:text-white/70
                transition-colors duration-300
                hover:text-red-600
              "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>

            <h3
              className="
            text-lg font-semibold
            mb-6
          "
            >
              Services
            </h3>

            <div className="space-y-4">
              {footerLinks.services.map((link) => (
                <Link
                  key={link}
                  href="#services"
                  className="
                block
                text-black/70 dark:text-white/70
                transition-colors duration-300
                hover:text-red-600
              "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="
        mt-20 pt-8
        border-t border-black/10 dark:border-white/10
        flex flex-col md:flex-row
        items-center justify-between
        gap-4
      "
        >

          <p
            className="
          text-sm
          text-black/50 dark:text-white/50
        "
          >
            © 2026 Camdeo Technologies. All rights reserved.
          </p>

          <div
            className="
          flex items-center gap-6
          text-sm
          text-black/50 dark:text-white/50
        "
          >
            <Link
              href="#"
              className="hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-red-600 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer