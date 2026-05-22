import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons"

const footerLinks = {
  company: [
    "about",
    "services",
    "training",
    "contact",
  ],
  training: [
    "SolidCAM",
    "Mastercam",

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

        {/* Footer Content */}
        <div
          className="
        mt-24
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6
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
                  +91 81287 13400
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
                  jaimin@camdeo.com
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
                  130, 1st floor,sun business hub,near barcelona complex,odhav ring road, Ahmedabad, Gujarat, India
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
                  href={`#${link.toLowerCase()}`}
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
                <ul
                  key={link}
                  className="
                block
                text-black/70 dark:text-white/70
                transition-colors duration-300
                hover:text-red-600
              "
                >
                  {link}
                </ul>
              ))}
            </div>
          </div>

          {/* Social */}

          <div>
            <h3
              className="
      text-lg font-semibold
      mb-6
      tracking-tight
    "
            >
              Social
            </h3>

            <div className="space-y-3">

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/camdeo.technologies?igsh=MXFrczlheHhmaGl5cQ=="
                target="_blank"
                className="
        group
        flex items-center gap-4

        rounded-2xl
        border border-black/10 dark:border-white/10

        px-3 py-3

        bg-white/50 dark:bg-white/3
        backdrop-blur-sm

        transition-all duration-300

        hover:border-red-500/40
        hover:bg-red-500/4
        hover:-translate-y-0.5
      "
              >
                <div
                  className="
          flex items-center justify-center

          h-11 w-11
          rounded-xl

          bg-black/4
          dark:bg-white/6

          transition-colors duration-300
          group-hover:bg-red-500/10
        "
                >
                  <SocialIcon
                    url="https://www.instagram.com/camdeo.technologies?igsh=MXFrczlheHhmaGl5cQ=="
                    style={{ height: 22, width: 22 }}
                    bgColor="transparent"
                    fgColor="currentColor"
                  />
                </div>

                <div className="flex flex-col">
                  <span
                    className="
            font-medium
            text-black dark:text-white
          "
                  >
                    Instagram
                  </span>

                </div>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=61589961766966"
                target="_blank"
                className="
        group
        flex items-center gap-4

        rounded-2xl
        border border-black/10 dark:border-white/10

        px-4 py-3

        bg-white/50 dark:bg-white/3
        backdrop-blur-sm

        transition-all duration-300

        hover:border-red-500/40
        hover:bg-red-500/4
        hover:-translate-y-0.5
      "
              >
                <div
                  className="
          flex items-center justify-center

          h-11 w-11
          rounded-xl

          bg-black/4
          dark:bg-white/6

          transition-colors duration-300
          group-hover:bg-red-500/10
        "
                >
                  <SocialIcon
                    url="https://www.facebook.com/profile.php?id=61589961766966"
                    style={{ height: 22, width: 22 }}
                    bgColor="transparent"
                    fgColor="currentColor"
                  />
                </div>

                <div className="flex flex-col">
                  <span
                    className="
            font-medium
            text-black dark:text-white
          "
                  >
                    Facebook
                  </span>

                 
                </div>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com/@camdeotechnologies?si=QK95QIE0qHGcoOZD"
                target="_blank"
                className="
        group
        flex items-center gap-4

        rounded-2xl
        border border-black/10 dark:border-white/10

        px-4 py-3

        bg-white/50 dark:bg-white/3
        backdrop-blur-sm

        transition-all duration-300

        hover:border-red-500/40
        hover:bg-red-500/4
        hover:-translate-y-0.5
      "
              >
                <div
                  className="
          flex items-center justify-center

          h-11 w-11
          rounded-xl

          bg-black/4
          dark:bg-white/6

          transition-colors duration-300
          group-hover:bg-red-500/10
        "
                >
                  <SocialIcon
                    url="https://youtube.com/@camdeotechnologies?si=QK95QIE0qHGcoOZD"
                    style={{ height: 22, width: 22 }}
                    bgColor="transparent"
                    fgColor="currentColor"
                  />
                </div>

                <div className="flex flex-col">
                  <span
                    className="
            font-medium
            text-black dark:text-white
          "
                  >
                    YouTube
                  </span>
                </div>
              </Link>

            </div>
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
          <p>Powered by Camdeo Technologies</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer