"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" })
    .min(10, { message: "Phone number is too short" })
    .max(15, { message: "Phone number is too long" }),
  otp: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [confirmationResult, setConfirmationResult] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      otp: "",
    },
  });

  async function onSubmit(values: FormValues) {
    if (confirmationResult) {
      toast.success("OTP verified successfully!");
      // Implement your OTP verification logic here
    } else {
      toast.success("OTP sent successfully!");
      setConfirmationResult(true);
      // Implement your OTP sending logic here
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80vw] space-y-6">
        <Toaster position="top-center" />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="+62 XXX XXXX"
                  className="focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-sky-500 rounded-lg px-4 py-2 border border-gray-300"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormDescription className="text-gray-500">Please enter your phone number with country code.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {confirmationResult && (
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Enter OTP</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter the OTP"
                    className="focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-sky-500 rounded-lg px-4 py-2 border border-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-500">Enter the OTP sent to your phone.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
          {confirmationResult ? "Verify OTP" : "Send OTP"}
        </Button>

        <Button
          type="button"
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mt-4"
        >
          Sign in with Google
        </Button>
      </form>
    </Form>
  );
}
