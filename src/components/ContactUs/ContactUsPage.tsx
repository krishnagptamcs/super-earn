"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import Image from "next/image";
import contact_us from "../../../public/assets/contact-us.jpg";

const serviceID = "service_mv58jld";
const templateID = "template_mwbs5tr";
const publicKey = "P2wI4rh7hAmHuLC-g";

// Define the schema using Zod
const contactSchema: ZodSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must be at most 15 digits")
    .regex(/^\d+$/, "Mobile number must be numeric"),
  message: z.string().min(1, "Message is required"),
});

// Define the type for form values
type FormValues = z.infer<typeof contactSchema>;

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const templateParams = {
      from_name: data.name,
      to_name: "Abhi", // Replace with the recipient's name
      email: data.email,
      mobile: data.mobile, // Optional if you want to include the mobile number
      message: `${data.name}:\n\n${data.message}`,
    };
    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <section className="w-10/12 mx-auto my-10">
        <div className="flex gap-4 w-full">
          {/* form */}
          <div className="p-6 w-[50%]">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">
                    {errors.name.message as string}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  {...register("mobile")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm">
                    {errors.mobile.message as string}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">
                    {errors.message.message as string}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>

          {/* images */}

          <div className="w-[50%] p-8">
            <div className="w-full h-full">
              <Image alt="const us" src={contact_us} width={100} height={100} className="w-full h-full object-cover rounded-3xl" unoptimized />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
