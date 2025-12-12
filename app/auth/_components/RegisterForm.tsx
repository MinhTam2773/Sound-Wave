"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Here you would send data to your backend
    console.log("Form submitted:", form);

    alert("Signed up successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          placeholder="yourusername"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="*******"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="*******"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-semibold hover:opacity-90 transition"
      >
        Sign Up
      </button>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/login" className="text-purple-600 underline">
          Sign in
        </a>
      </p>
    </form>
  );
}
