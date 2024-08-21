// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { z } from "zod";
// import toast, { Toaster } from "react-hot-toast";
// import { useState } from "react";



// // Improved phone number validation
// const formSchema = z.object({
//   phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
//   otp: z.string().optional(),
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function LoginForm() {

//   const form =
//     useForm <
//     FormValues >
//     {
//       resolver: zodResolver(formSchema),
//       defaultValues: {
//         phoneNumber: "",
//         otp: "",
//       },
//     };

//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container" || null,
//       {
//         size: "invisible",
//         callback: (response: string) => {
//           console.log("Recaptcha verified", response);
//         },
//       },
//       auth
//     );
//   };

//   const sendOtp = (phoneNumber: string) => {
//     setupRecaptcha();
//     const appVerifier = window.recaptchaVerifier;
//     if (appVerifier) {
//       signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           setConfirmationResult(confirmationResult);
//           toast.success("OTP sent! Please check your SMS.");
//         })
//         .catch((error: Error) => {
//           toast.error(`Failed to send OTP: ${error.message}`);
//           console.error("SMS not sent", error);
//         });
//     } else {
//       console.error("Recaptcha verifier is not initialized");
//     }
//   };

//   const verifyOtp = (otp: string) => {
//     confirmationResult
//       ?.confirm(otp)
//       .then((result) => {
//         const user = result.user;
//         toast.success("OTP verified! Logged in successfully.");
//         console.log("User signed in successfully", user);
//       })
//       .catch((error: Error) => {
//         toast.error(`OTP verification failed: ${error.message}`);
//         console.error("OTP verification failed", error);
//       });
//   };

//   const onSubmit = (values: FormValues) => {
//     if (!confirmationResult) {
//       sendOtp(values.phoneNumber);
//     } else {
//       verifyOtp(values.otp ?? "");
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80vw]">
//         <Toaster position="top-center" />

//         <FormField
//           control={form.control}
//           name="phoneNumber"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-gray-700">Phone Number</FormLabel>
//               <FormControl>
//                 <Input type="tel" placeholder="+62 XXX XXXX" className="focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-sky-500 rounded-lg px-4 py-2 border border-gray-300" {...field} disabled={!!confirmationResult} />
//               </FormControl>
//               <FormDescription className="text-gray-500">Please enter your phone number with country code.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {confirmationResult && (
//           <FormField
//             control={form.control}
//             name="otp"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-700">Enter OTP</FormLabel>
//                 <FormControl>
//                   <Input type="text" placeholder="Enter OTP" className="focus:ring-2 focus:ring-sky-500 focus:outline-none focus:border-sky-500 rounded-lg px-4 py-2 border border-gray-300" {...field} />
//                 </FormControl>
//                 <FormDescription className="text-gray-500">Enter the OTP sent to your phone.</FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         )}

//         <Button type="submit" className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
//           {confirmationResult ? "Verify OTP" : "Send OTP"}
//         </Button>
//       </form>
//       <div id="recaptcha-container"></div>
//     </Form>
//   );
// }
