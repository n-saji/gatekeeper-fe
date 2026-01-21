"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUpSchema = z.object({
  first_name: z.string().min(6, "First name must be at least 6 characters"),
  last_name: z.string().min(6, "Last name must be at least 6 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirm_password: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
});

type SignUpData = z.infer<typeof SignUpSchema>;

export default function SignUp() {
  const form = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState<boolean>(false);
  setShowPasswordConfirmation;

  const onSubmitForm = (data: SignUpData) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <form id="signUpForm" onSubmit={form.handleSubmit(onSubmitForm)}>
          <FieldSet>
            <FieldGroup>
              <Controller
                name="first_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>First Name</FieldLabel>
                    <Input {...field} type="text" placeholder="First Name" />
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </Field>
                )}
              />
              <Controller
                name="last_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Last Name</FieldLabel>
                    <Input {...field} type="text" placeholder="Last Name" />
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input {...field} type="email" placeholder="email" />
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <div className="relative items-center">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      {showPassword ? (
                        <Eye
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 w-5 h-5"
                          onClick={() => {
                            setShowPassword(false);
                          }}
                        />
                      ) : (
                        <EyeOff
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 w-5 h-5"
                          onClick={() => {
                            setShowPassword(true);
                          }}
                        />
                      )}
                    </div>
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </Field>
                )}
              />
              <Controller
                name="confirm_password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <div className="relative items-center">
                      <Input
                        {...field}
                        type={showPasswordConfirmation ? "text" : "password"}
                        placeholder="Confirm password"
                      />
                      {showPasswordConfirmation ? (
                        <Eye
                          className="absolute right-3 top-3 w-4 h-4"
                          onClick={() => {
                            setShowPasswordConfirmation(false);
                          }}
                        />
                      ) : (
                        <EyeOff
                          className="absolute right-3 top-3 w-4 h-4"
                          onClick={() => {
                            setShowPasswordConfirmation(true);
                          }}
                        />
                      )}
                    </div>
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="signUpForm">
          Create Account
        </Button>
      </CardFooter>
    </Card>
  );
}
