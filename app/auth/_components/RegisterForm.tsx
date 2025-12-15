"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

// Zod schema for form validation
const registerSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    displayName: z
      .string()
      .min(2, "Display name must be at least 2 characters")
      .max(50, "Display name must be less than 50 characters")
      .optional()
      .or(z.literal("")),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Initialize react-hook-form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setServerError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            username: data.username,
            display_name: data.displayName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;

      toast(
        "Registration successful! Please check your email to confirm your account."
      );
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[531px] max-w-[95vw] rounded-[20px] box-border px-5 py-4 flex flex-col gap-[28px] overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-[20px] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#9100ff] to-[#ffc400]" />
        <div className="absolute inset-[1px] rounded-[20px] bg-white" />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <span className="text-2xl text-center font-bold tracking-[-0.4px] bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc400] bg-clip-text text-transparent block mb-[15px]">
          Create Account
        </span>

        {/* Server Error Message */}
        {serverError && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {serverError}
          </div>
        )}

        {/* Register Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          {/* Email */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-md font-medium text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="youremail@example.com"
                autoComplete="email"
                className={`w-full py-2 rounded-md border px-3 text-md focus:outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#d9d9d9] focus:border-[#9100ff]"
                }`}
                disabled={loading}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-md font-medium text-black">Username</label>
            <div className="relative">
              <input
                type="text"
                placeholder="your username"
                autoComplete="username"
                className={`w-full py-2 rounded-md border px-3 focus:outline-none transition ${
                  errors.username
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#d9d9d9] focus:border-[#9100ff]"
                }`}
                disabled={loading}
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-[6px]">
            <label className="text-md font-medium text-black">
              Display Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="your display name"
                autoComplete="displayName"
                className={`w-full py-2 rounded-md border px-3 focus:outline-none transition ${
                  errors.displayName
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#d9d9d9] focus:border-[#9100ff]"
                }`}
                disabled={loading}
                {...register("displayName")}
              />
              {errors.displayName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.displayName?.message}
                </p>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[6px]">
            <label className="font-medium text-black">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                autoComplete="new-password"
                className={`w-full py-2 px-3 rounded-md border text-md focus:outline-none transition ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#d9d9d9] focus:border-[#9100ff]"
                }`}
                disabled={loading}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-black">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                autoComplete="new-password"
                className={`w-full py-2 px-3 rounded-md border focus:outline-none transition ${
                  errors.confirmPassword
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#d9d9d9] focus:border-[#9100ff]"
                }`}
                disabled={loading}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="h-[48px] rounded-[15px] w-full bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc400] text-white text-[18px] font-bold flex items-center justify-center shadow-md hover:shadow-lg active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating Account...
              </div>
            ) : (
              "SIGN UP"
            )}
          </button>
        </form>
      </div>

      {/* Login Link */}
      <div className="relative z-10 w-full text-center">
        <p className="text-[15px] text-[#6b6b6b]">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-[#9100ff] underline hover:text-[#7a00d6] transition"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
