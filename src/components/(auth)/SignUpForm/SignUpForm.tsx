"use client"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"
import { signUp } from "@/lib/auth-client"

interface FormValues {
     name: string;
     img_url: string;
     email: string;
     password: string;
}

const SignUpForm = ({ className, ...props }: React.ComponentProps<"div">) => {
     const handleSignIn = async(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData.entries()) as unknown as FormValues;

          console.log("Signup data before auth:", formValues);

          try{
               const { data: resData, error } = await signUp.email({
                    name: formValues?.name,
                    image: formValues?.img_url,
                    email: formValues?.email,
                    password: formValues?.password
               });

               console.log("Signup data after auth:", resData);
          }catch(err: any) {
               console.error("Signup error:", err);
               throw err;
          }
     }

     return (
          <div className={cn("flex flex-col gap-6", className)} {...props}>
               <Card>
                    <CardHeader className="text-center">
                         <CardTitle className="text-xl">Welcome back</CardTitle>
                         <CardDescription>Login with your Google account</CardDescription>
                    </CardHeader>

                    <CardContent>
                         <form onSubmit={handleSignIn}>
                              <FieldGroup>
                                   <Field>
                                        <Button variant="outline" type="button">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                  fill="currentColor" />
                                             </svg>
                                        Login with Google</Button>
                                   </Field>

                                   <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">Or continue with</FieldSeparator>

                                   <Field>
                                        <FieldLabel htmlFor="name">Name</FieldLabel>
                                        <Input id="name" type="text" name="name" placeholder="Your name" required />
                                   </Field>

                                   <Field>
                                        <FieldLabel htmlFor="img_url">Image URL</FieldLabel>
                                        <Input id="img_url" type="text" name="img_url" placeholder="Image URL" required />
                                   </Field>

                                   <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                                   </Field>

                                   <Field>
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <Input id="password" type="password" name="password" placeholder="Password" required />
                                   </Field>

                                   <Field>
                                        <Button type="submit">Signup</Button>
                                        <FieldDescription className="text-center">Already have an account? <Link href="signin">Sign in</Link></FieldDescription>
                                   </Field>
                              </FieldGroup>
                         </form>
                    </CardContent>
               </Card>
          </div>
     )
}

export default SignUpForm
