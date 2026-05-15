import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    Send,
} from "lucide-react";

const contactDetails = [
    {
        icon: Phone,
        title: "Phone",
        value: "+91 98765 43210",
    },
    {
        icon: Mail,
        title: "Email",
        value: "info@camdeo.com",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Ahmedabad, Gujarat, India",
    },
    {
        icon: Clock3,
        title: "Working Hours",
        value: "Mon - Sat • 9:00 AM - 7:00 PM",
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="
    relative w-full
    bg-gray-50 dark:bg-black
    text-black dark:text-white
    py-28 px-6 sm:px-10 lg:px-20
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
                        Contact Us
                    </p>

                    <h2
                        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-[-0.04em]
          leading-tight
        "
                    >
                        Let’s Build The Future Of
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
                        Whether you’re looking for CAD/CAM training,
                        CNC programming services, software solutions,
                        or industrial consultation — we’re here to help.
                    </p>
                </div>

                {/* Main Grid */}
                <div
                    className="
        mt-20
        grid grid-cols-1 lg:grid-cols-12
        gap-6
      "
                >

                    {/* Left Side */}
                    <div
                        className="
          lg:col-span-5
          rounded-[36px]
          border border-black/10 dark:border-white/10
          bg-white dark:bg-black
          p-8 md:p-10
        "
                    >

                        <div className="max-w-md">

                            <h3
                                className="
              text-3xl font-bold
              tracking-tight
            "
                            >
                                Get In Touch
                            </h3>

                            <p
                                className="
              mt-5
              leading-relaxed
              text-black/70 dark:text-white/70
            "
                            >
                                Connect with Camdeo Technologies for
                                industrial engineering services, training,
                                and manufacturing solutions.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="mt-10 space-y-4">

                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="
                  flex items-start gap-4
                  rounded-2xl
                  border border-black/10 dark:border-white/10
                  p-5
                "
                                    >
                                        <div
                                            className="
                    w-12 h-12 rounded-2xl
                    border border-black/10 dark:border-white/10
                    flex items-center justify-center
                    shrink-0
                  "
                                        >
                                            <Icon size={20} />
                                        </div>

                                        <div>
                                            <div
                                                className="
                      text-sm uppercase tracking-wider
                      text-red-600 font-semibold
                    "
                                            >
                                                {item.title}
                                            </div>

                                            <div
                                                className="
                      mt-2
                      text-base
                      text-black/80 dark:text-white/80
                    "
                                            >
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div
                        className="
          lg:col-span-7
          rounded-[36px]
          border border-black/10 dark:border-white/10
          bg-white dark:bg-black
          p-8 md:p-10
        "
                    >

                        <div className="max-w-2xl">

                            <h3
                                className="
              text-3xl font-bold
              tracking-tight
            "
                            >
                                Send Us A Message
                            </h3>

                            <p
                                className="
              mt-5
              leading-relaxed
              text-black/70 dark:text-white/70
            "
                            >
                                Fill out the form below and our team will
                                get back to you shortly.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="mt-10 space-y-6">

                            {/* Name + Phone */}
                            <div
                                className="
              grid grid-cols-1 md:grid-cols-2
              gap-6
            "
                            >
                                <div>
                                    <label
                                        className="
                  text-sm font-medium
                  text-black/70 dark:text-white/70
                "
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="
                  mt-3 w-full
                  rounded-2xl
                  border border-black/10 dark:border-white/10
                  bg-transparent
                  px-5 py-4
                  outline-none
                  transition-all duration-300
                  focus:border-red-600
                "
                                    />
                                </div>

                                <div>
                                    <label
                                        className="
                  text-sm font-medium
                  text-black/70 dark:text-white/70
                "
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your phone"
                                        className="
                  mt-3 w-full
                  rounded-2xl
                  border border-black/10 dark:border-white/10
                  bg-transparent
                  px-5 py-4
                  outline-none
                  transition-all duration-300
                  focus:border-red-600
                "
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    className="
                text-sm font-medium
                text-black/70 dark:text-white/70
              "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                mt-3 w-full
                rounded-2xl
                border border-black/10 dark:border-white/10
                bg-transparent
                px-5 py-4
                outline-none
                transition-all duration-300
                focus:border-red-600
              "
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label
                                    htmlFor="service"
                                    className="
      text-sm font-medium
      text-black/70 dark:text-white/70
    "
                                >
                                    Service Interested In
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    title="Select a service"
                                    className="
      mt-3 w-full
      rounded-2xl
      border border-black/10 dark:border-white/10
      bg-transparent
      px-5 py-4
      outline-none
      transition-all duration-300
      focus:border-red-600
    "
                                >
                                    <option value="">Select a service</option>
                                    <option value="cad-cam-training">
                                        CAD/CAM Training
                                    </option>
                                    <option value="corporate-training">
                                        Corporate Training
                                    </option>
                                    <option value="cnc-programming">
                                        CNC Programming
                                    </option>
                                    <option value="software-solutions">
                                        Software Solutions
                                    </option>
                                    <option value="industrial-consultation">
                                        Industrial Consultation
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    className="
                text-sm font-medium
                text-black/70 dark:text-white/70
              "
                                >
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your requirement..."
                                    className="
                mt-3 w-full
                rounded-2xl
                border border-black/10 dark:border-white/10
                bg-transparent
                px-5 py-4
                outline-none
                resize-none
                transition-all duration-300
                focus:border-red-600
              "
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
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
                                Send Message
                                <Send size={18} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact