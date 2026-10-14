import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^(09\d{8}|\+251\d{9})$/,"Phone must be in 09xxxxxxxx or +251xxxxxxxxx format"),
  dishId: z.string().min(1, "Dish ID is required"),
  quantity: z.number().int("Quantity must be an integer").min(1, "Quantity must be at least 1"),
});