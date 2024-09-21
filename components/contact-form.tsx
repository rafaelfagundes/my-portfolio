"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { WarningCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface ContactFormProps {
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm(prop: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${prop.className}`}
    >
      <div>
        <Input
          {...register("name")}
          placeholder="Your Name"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && (
          <span className="mt-1 text-sm text-red-600 flex flex-row items-center">
            <WarningCircle size={16} />
            <p className="ml-1 text-sm text-red-600">{errors.name.message}</p>
          </span>
        )}
      </div>
      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && (
          <span className="mt-1 text-sm text-red-600 flex flex-row items-center">
            <WarningCircle size={16} />
            <p className="ml-1 text-sm text-red-600">{errors.email.message}</p>
          </span>
        )}
      </div>
      <div>
        <Textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.message && (
          <span className="mt-1 text-sm text-red-600 flex flex-row items-center">
            <WarningCircle size={16} />
            <p className="ml-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          </span>
        )}
      </div>
      <Button
        type="submit"
        className="w-full text-gray-200 dark:text-gray-800 py-2 px-4 rounded-md transition duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
