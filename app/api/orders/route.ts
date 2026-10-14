import { orderSchema } from "@/lib/schema";
import { getDishById } from "@/lib/dishes";



// export const orderSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   phone: z.string().regex(/^(09\d{8}|\+251\d{9})$/,"Phone must be in 09xxxxxxxx or +251xxxxxxxxx format"),
//   dishId: z.string().min(1, "Dish ID is required"),
//   quantity: z.number().int("Quantity must be an integer").min(1, "Quantity must be at least 1"),
// });

export async function POST(request: Request) {
    const body = await request.json(); //recieves the body
    
    const result = orderSchema.safeParse(body);

    if(!result.success){
        return Response.json({error: "Validation failed"}, {status: 422});
    }

    const dish = await getDishById(body.dishId);

    if(!dish){
        return Response.json({error: "Could not find Dish"}, {status: 404});   
    }

    const totalPrice = dish.price * body.quantity;

    const order = {
        id: Math.floor(Math.random() * 100),
        name: body.name,
        phone: body.phone,
        dishId: body.dishId,
        quantity: body.quantity,
        totalPrice: totalPrice,
        createdAt: Date.now()
    }

    return Response.json({message: "Order Created.", order}, {status: 201});
}