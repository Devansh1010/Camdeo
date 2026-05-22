"use client";

import {
    Mail,
    Phone,
    MapPin,
    Send,
} from "lucide-react";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { enquirySchema } from "@/lib/validation/InquireFormSchema";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";

const contactCards = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 81287 13400",
        description: "Speak directly with our team for quick assistance.",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "jaimin@camdeo.in",
        description: "Send us your requirements anytime via email.",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "130, 1st floor,sun business hub,near barcelona complex,odhav ring road.",
        description: "Meet our team for industrial consultation & training.",
    },
];

const Contact = () => {
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof enquirySchema>>({
        resolver: zodResolver(enquirySchema),
        defaultValues: {
            username: "",
            phone: "",
            email: "",
            service: "",
            message: ""
        },
    })

    async function onSubmit(
        data: z.infer<typeof enquirySchema>
    ) {
        try {

            const res = await axios.post(
                "/api/enquiry",
                data
            );

            if (!res.data.success) {

                toast.error(
                    res.data.message ||
                    "Failed to send enquiry"
                );

                return;
            }

            toast.success(
                res.data.message ||
                "Enquiry submitted successfully"
            );

            form.reset();


            setOpen(false);

        } catch (error: unknown) {

            console.error("ENQUIRY_SUBMIT_ERROR:", error);

            if (axios.isAxiosError(error)) {

                toast.error(
                    error.response?.data?.message ||
                    "Request failed"
                );

                return;
            }

            toast.error(
                "Something went wrong. Please try again."
            );
        }
    }

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
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center">

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
              mt-6
              text-base md:text-lg
              leading-relaxed
              text-black/70 dark:text-white/70
              max-w-2xl mx-auto
            "
                    >
                        Connect with Camdeo Technologies for
                        CAD/CAM training, industrial consultation,
                        CNC programming, and manufacturing solutions.
                    </p>
                </div>

                {/* Cards */}
                <div
                    id="enquire-now"
                    className="
          mt-20
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6
        "
                >
                    {contactCards.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
    group relative overflow-hidden
    rounded-3xl
    border border-black/8 dark:border-white/8
    bg-white dark:bg-zinc-950
    p-7
    transition-all duration-500
    hover:-translate-y-1
    hover:border-black/15 dark:hover:border-white/15
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
  "
                            >

                                {/* Top Row */}
                                <div className="flex items-center gap-4 mb-6">

                                    {/* Minimal Icon */}
                                    <div
                                        className="
        w-11 h-11
        rounded-xl
        border border-black/10 dark:border-white/10
        bg-black/[0.03] dark:bg-white/[0.03]
        flex items-center justify-center
        text-black/70 dark:text-white/70
        transition-all duration-300
        group-hover:text-black dark:group-hover:text-white
      "
                                    >
                                        <Icon size={18} strokeWidth={1.8} />
                                    </div>

                                    <h3
                                        className="
        text-xl
        font-semibold
        tracking-tight
      "
                                    >
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Main Value */}
                                <p
                                    className="
      text-base md:text-lg
      font-medium
      text-black/90 dark:text-white/90
      leading-relaxed
    "
                                >
                                    {item.value}
                                </p>

                                {/* Description */}
                                <p
                                    className="
      mt-4
      text-sm md:text-base
      leading-relaxed
      text-black/60 dark:text-white/60
    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div

                    className="flex justify-center items-center w-full my-10">

                    <AlertDialog
                        open={open}
                        onOpenChange={setOpen}
                    >

                        {/* Trigger */}
                        <AlertDialogTrigger asChild>

                            <Button
                                className="
        rounded-full
        px-6 py-5
        bg-black text-white
        dark:bg-white dark:text-black
        hover:scale-[1.02]
        transition-all duration-300
      "
                            >
                                Enquire Now
                            </Button>

                        </AlertDialogTrigger>

                        {/* Content */}
                        <AlertDialogContent
                            className="
      w-[95vw]
      sm:w-full
      max-w-4xl
      max-h-[90vh]
      overflow-hidden
      rounded-3xl
      border border-black/10
      dark:border-white/10
      bg-white dark:bg-zinc-950
      p-0
    "
                        >

                            <div
                                className="
        overflow-y-auto
        max-h-[90vh]
        overscroll-contain
      "
                            >

                                {/* Header */}
                                <div
                                    className="
          px-5 sm:px-8
          pt-6 sm:pt-8
          pb-5 sm:pb-6
          border-b border-black/5
          dark:border-white/5
        "
                                >

                                    <AlertDialogTitle
                                        className="
            text-xl sm:text-2xl
            font-semibold
            tracking-tight
            text-center
          "
                                    >
                                        Send Us A Message
                                    </AlertDialogTitle>

                                    <p
                                        className="
            mt-3
            text-sm sm:text-base
            text-center
            text-black/60 dark:text-white/60
            leading-relaxed
          "
                                    >
                                        Fill out the form below and our team
                                        will get back to you shortly.
                                    </p>

                                </div>

                                {/* Form */}
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="
          space-y-6
          px-5 sm:px-10
          py-5
        "
                                >

                                    {/* Name + Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        {/* Full Name */}
                                        <Controller
                                            name="username"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>

                                                    <FieldLabel htmlFor={field.name}>
                                                        Full Name
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id={field.name}
                                                        placeholder="Enter your full name"
                                                        autoComplete="off"
                                                        aria-invalid={fieldState.invalid}
                                                        className="
                    h-12
                    rounded-2xl
                  "
                                                    />

                                                    <FieldDescription>
                                                        Enter your full name.
                                                    </FieldDescription>

                                                    {
                                                        fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]} />
                                                        )
                                                    }

                                                </Field>
                                            )}
                                        />

                                        {/* Phone */}
                                        <Controller
                                            name="phone"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>

                                                    <FieldLabel htmlFor={field.name}>
                                                        Phone Number
                                                    </FieldLabel>

                                                    <Input
                                                        {...field}
                                                        id={field.name}
                                                        placeholder="Enter your phone number"
                                                        autoComplete="off"
                                                        aria-invalid={fieldState.invalid}
                                                        className="
                    h-12
                    rounded-2xl
                  "
                                                    />

                                                    <FieldDescription>
                                                        Include country code if needed.
                                                    </FieldDescription>

                                                    {
                                                        fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]} />
                                                        )
                                                    }

                                                </Field>
                                            )}
                                        />

                                    </div>

                                    {/* Email */}
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>

                                                <FieldLabel htmlFor={field.name}>
                                                    Email Address
                                                </FieldLabel>

                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    autoComplete="off"
                                                    aria-invalid={fieldState.invalid}
                                                    className="
                  h-12
                  rounded-2xl
                "
                                                />

                                                <FieldDescription>
                                                    We’ll contact you through this email.
                                                </FieldDescription>

                                                {
                                                    fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )
                                                }

                                            </Field>
                                        )}
                                    />

                                    {/* Service */}
                                    <Controller
                                        name="service"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>

                                                <FieldLabel>
                                                    Service Interested In
                                                </FieldLabel>

                                                <Select
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >

                                                    <SelectTrigger
                                                        aria-invalid={fieldState.invalid}
                                                        className="
                    h-12
                    rounded-2xl
                  "
                                                    >
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>

                                                    <SelectContent>

                                                        <SelectItem value="cad-cam-training">
                                                            CAD/CAM Training
                                                        </SelectItem>

                                                        <SelectItem value="corporate-training">
                                                            Corporate Training
                                                        </SelectItem>

                                                        <SelectItem value="cnc-programming">
                                                            CNC Programming
                                                        </SelectItem>

                                                        <SelectItem value="software-solutions">
                                                            Software Solutions
                                                        </SelectItem>

                                                        <SelectItem value="industrial-consultation">
                                                            Industrial Consultation
                                                        </SelectItem>

                                                    </SelectContent>

                                                </Select>

                                                <FieldDescription>
                                                    Choose the service you are interested in.
                                                </FieldDescription>

                                                {
                                                    fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )
                                                }

                                            </Field>
                                        )}
                                    />

                                    {/* Message */}
                                    <Controller
                                        name="message"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>

                                                <FieldLabel htmlFor={field.name}>
                                                    Message
                                                </FieldLabel>

                                                <Textarea
                                                    {...field}
                                                    id={field.name}
                                                    rows={5}
                                                    placeholder="Tell us about your requirement..."
                                                    aria-invalid={fieldState.invalid}
                                                    className="
                  rounded-2xl
                  resize-none
                "
                                                />

                                                <FieldDescription>
                                                    Briefly explain your requirement.
                                                </FieldDescription>

                                                {
                                                    fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )
                                                }

                                            </Field>
                                        )}
                                    />

                                    {/* Footer */}
                                    <AlertDialogFooter
                                        className="
            pt-4
            flex-col-reverse
            sm:flex-row
            justify-end
            gap-3
          "
                                    >

                                        {/* Cancel */}
                                        <AlertDialogCancel
                                            type="button"
                                            className="
              rounded-full
              h-12
              px-6
              w-full
              sm:w-auto
            "
                                        >
                                            Cancel
                                        </AlertDialogCancel>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={form.formState.isSubmitting}
                                            className="
              rounded-full
              h-12
              px-6
              w-full
              sm:w-auto
            "
                                        >

                                            {
                                                form.formState.isSubmitting
                                                    ? "Sending..."
                                                    : "Send Message"
                                            }

                                            <Send className="ml-2 h-4 w-4" />

                                        </Button>

                                    </AlertDialogFooter>

                                </form>

                            </div>

                        </AlertDialogContent>

                    </AlertDialog>
                </div>
            </div>
        </section>
    );
};

export default Contact