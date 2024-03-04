import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { formSchema } from "./ContactSchema";
import './Contact-Details.css'

function ContactDetails() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          useremail: ""
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
  return (
    <>
    <h3>Contact-Details</h3>
    <div className="form-container">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>            
          )}
        />
            <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Useremail</FormLabel>
              <FormControl>
                <Input placeholder="useremail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>                    
          )}
        />
          <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
              </FormItem>
          )}
          />
        <Button type="submit" className="mt-2 submit">Submit</Button>
      </form>
    </Form>
    </div>
 

    </>
  )
          
}

export default ContactDetails