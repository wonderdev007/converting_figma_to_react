import * as z from "zod";

export const filterSchema = z.object({
  flyingFrom: z.string().min(1),
  fyingTo: z.string().min(1),
  date: z.object({
    depart: z.date().min(new Date()),
    return: z.date().min(new Date()),
  }),
  traveller: z.object({
    audults: z.number().min(1).default(1),
    childrens: z.number().min(0).default(0),
    infrants: z.number().min(0).default(0),
  }),
  directFlight: z.boolean().optional(),
  flex: z.boolean().optional(),
  tripType: z.string().min(1),
  airline: z.string().min(1),
  class: z.string().min(1),
});

export type FilterSchema = z.infer<typeof filterSchema>;
