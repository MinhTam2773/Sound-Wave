"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { login } from "@/server-actions/auth/actions";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

// Zod schema for form validation
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize react-hook-form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(null);

    try {
      const success = await login(data.email, data.password);

      if (success) {
        router.push("/");
        toast("Login successfully");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Google login error:", error);
      setError("Google login failed.");
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Facebook login error:", error);
      setError("Facebook login failed.");
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[531px] max-w-[95vw] rounded-[20px] box-border px-5 py-4 flex flex-col gap-7 overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-[20px] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-[20px] bg-linear-to-r from-[#9100ff] to-[#ffc400]" />
        <div className="absolute inset-px rounded-[20px] bg-white" />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <span className="text-2xl text-center font-bold tracking-[-0.4px] bg-linear-to-r from-[#9100ff] via-[#b23caf] to-[#ffc400] bg-clip-text text-transparent block mb-[15px]">
          Welcome Back!
        </span>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className=" font-medium text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                className={`w-full rounded-md border px-3 py-2 focus:outline-none transition ${
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

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className=" font-medium text-black">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className={`w-full  rounded-md border px-3 py-2 focus:outline-none transition ${
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

          {/* Forgot password */}
          <div className="text-[15px] text-[#6b6b6b] text-right cursor-pointer hover:text-[#9100ff] transition disabled:opacity-50 disabled:cursor-not-allowed">
            Forgot Password?
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 rounded-[15px] w-full bg-linear-to-r from-[#9100ff] via-[#b23caf] to-[#ffc400] text-white text-[18px] font-bold flex items-center justify-center shadow-md hover:shadow-lg active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </div>
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
      </div>

      {/* OAuth Section */}
      <div className="relative z-10 w-full flex flex-col gap-4 mt-2.5">
        <span className="text-[15px] text-[#6b6b6b]">Sign in with:</span>

        <div className="flex items-center gap-3">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex-1 py-2 rounded-[15px] border border-[#d1d1d1] bg-white flex items-center justify-center gap-2.5 font-semibold cursor-pointer hover:border-[#9100ff] hover:shadow-md active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <FcGoogle size={22} />
            Google
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            onClick={handleFacebookLogin}
            disabled={loading}
            className="flex-1 py-2 rounded-[15px] bg-[#1877f2] flex items-center justify-center gap-2.5 text-white font-semibold hover:bg-[#145fc4] hover:shadow-md active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <FaFacebookF size={20} />
            Facebook
          </button>
        </div>
        <p className="text-center text-sm mt-2">
          No account?{" "}
          <a
            href="/auth/register"
            className="text-purple-600 underline hover:text-purple-700"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
