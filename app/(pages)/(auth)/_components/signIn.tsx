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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInData = z.infer<typeof SignInSchema>;

export default function SignIn() {
  const form = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmitForm = (data: SignInData) => {
    console.log("Sign In Data:", data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <form id="signInForm" onSubmit={form.handleSubmit(onSubmitForm)}>
          <FieldSet>
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
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="signInForm">
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
