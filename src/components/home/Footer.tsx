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
    "
            >
              Social
            </h3>

            <div className="space-y-4">

              <Link
                href="https://www.instagram.com/camdeo.technologies?igsh=MXFrczlheHhmaGl5cQ=="
                target="_blank"
                className="
        flex items-center gap-3
        text-black/70 dark:text-white/70
        transition-colors duration-300
        hover:text-red-600
      "
              >
                <SocialIcon
                  url="https://instagram.com"
                  style={{ height: 36, width: 36 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                />

                <span>Instagram</span>
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61589961766966"
                target="_blank"
                className="
        flex items-center gap-3
        text-black/70 dark:text-white/70
        transition-colors duration-300
        hover:text-red-600
      "
              >
                <SocialIcon
                  url="https://facebook.com"
                  style={{ height: 36, width: 36 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                />

                <span>Facebook</span>
              </Link>

              <Link
                href="https://youtube.com/@camdeotechnologies?si=QK95QIE0qHGcoOZD"
                target="_blank"
                className="
        flex items-center gap-3
        text-black/70 dark:text-white/70
        transition-colors duration-300
        hover:text-red-600
      "
              >
                <SocialIcon
                  url="https://youtube.com"
                  style={{ height: 36, width: 36 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                />
                <span>YouTube</span>
              </Link>

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
      </div>
    </footer>
  )
}

export default Footer