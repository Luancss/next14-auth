"use client";

import * as z from "zod";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CardWrapper } from "@/components/auth/card-wrapper"

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(() => {})}
          className="space-y-6"
        >
          <div className="space-y-4">

          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
