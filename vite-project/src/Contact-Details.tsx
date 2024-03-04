import React, { useState } from 'react';
// import Link from "next/link"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { formSchema } from "./ContactSchema";
import './Contact-details.css'
import countriess from '../src/assets/countries.json';

function ContactDetails() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          useremail: ""
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
    
      const [selectedCountry, setSelectedCountry] = useState(Number);
    
      const handleCountryChange = (value: any) => {
        setSelectedCountry(value);
        
      };
    
  
      const selectedCountryObject = countriess.find((country: any) =>
      { return country.country === selectedCountry
      });
      const statesForSelectedCountry = selectedCountryObject ? selectedCountryObject['states'] : [];

    
  return (
    <>
      <h3>Contact-Details</h3>
      <div className="form-container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="form-content">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <div className="row">
                      <div className="col-3">
                        <FormLabel>Username</FormLabel>
                      </div>
                      <div className="col-9">
                        <FormControl className="col-9">
                          <Input placeholder="username" {...field} />
                        </FormControl>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-content">
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
            </div>
            <div className="form-content">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3 form-item">
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
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-content">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={(value: any) => {
                        field.onChange(value);
                        handleCountryChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countriess.map((country: any) => (
                          <SelectItem
                            key={country.countryId}
                            value={country.country}
                          >
                            {country.country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="form-content">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statesForSelectedCountry.map((state: any) => (
                          <SelectItem
                            key={state.stateId}
                            value={state.state}
                            style={{ color: "red" }}
                          >
                            {state.state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="mt-2 submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
          
}

export default ContactDetails
