"use client"

import { z } from "zod"

export const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }).max(50),
        useremail: z.string().min(2, {
            message:"Useremail must be at least 2 characters."
        }).max(50),
        gender: z.enum(["male", "female"], {
            required_error: "You need to select a gender.",
          }),
})
