"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  date: z.string().refine((val) => {
    const selected = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, "Date cannot be in the past"),
  time: z.string().min(1, "Please select a time"),
  partySize: z.string().min(1, "Please select a party size"),
  requests: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const inputClass =
  "w-full bg-brand-cream border border-brand-tan text-brand-bark font-sans text-sm px-4 py-3 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-colors placeholder:text-brand-tan";
const labelClass = "block font-heading text-sm font-semibold text-brand-bark mb-1.5";
const errorClass = "mt-1 text-xs text-red-600 font-sans";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate a short delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Reservation enquiry:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <CheckCircle size={56} className="text-brand-forest mb-6" strokeWidth={1.5} />
        <h2 className="font-serif text-3xl font-bold text-brand-bark mb-3">
          Enquiry Received!
        </h2>
        <p className="font-sans text-brand-driftwood leading-relaxed max-w-md">
          Thank you for your reservation enquiry. We&apos;ll be in touch within 24
          hours to confirm your booking. If you need to reach us sooner, call us on{" "}
          <a
            href="tel:+441866123456"
            className="text-brand-amber hover:text-brand-amber-dark font-semibold"
          >
            01866 123 456
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-brand-amber">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className={cn(inputClass, errors.name && "border-red-400")}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-brand-amber">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={cn(inputClass, errors.email && "border-red-400")}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-brand-amber">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="07700 000 000"
            className={cn(inputClass, errors.phone && "border-red-400")}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* Party Size */}
        <div>
          <label htmlFor="partySize" className={labelClass}>
            Party Size <span className="text-brand-amber">*</span>
          </label>
          <select
            id="partySize"
            className={cn(inputClass, errors.partySize && "border-red-400")}
            {...register("partySize")}
          >
            <option value="">Select guests</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          {errors.partySize && (
            <p className={errorClass}>{errors.partySize.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>
            Date <span className="text-brand-amber">*</span>
          </label>
          <input
            id="date"
            type="date"
            className={cn(inputClass, errors.date && "border-red-400")}
            {...register("date")}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelClass}>
            Preferred Time <span className="text-brand-amber">*</span>
          </label>
          <select
            id="time"
            className={cn(inputClass, errors.time && "border-red-400")}
            {...register("time")}
          >
            <option value="">Select a time</option>
            <optgroup label="Lunch">
              {timeSlots.slice(0, 5).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </optgroup>
            <optgroup label="Dinner">
              {timeSlots.slice(5).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.time && <p className={errorClass}>{errors.time.message}</p>}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="requests" className={labelClass}>
          Special Requests{" "}
          <span className="font-normal text-brand-driftwood">(optional)</span>
        </label>
        <textarea
          id="requests"
          rows={4}
          placeholder="Dietary requirements, accessibility needs, special occasions..."
          className={cn(inputClass, "resize-none")}
          {...register("requests")}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending Enquiry..." : "Send Reservation Enquiry"}
      </Button>

      <p className="font-sans text-xs text-brand-driftwood/70">
        * Required fields. We&apos;ll confirm your booking by email within 24 hours.
      </p>
    </form>
  );
}
