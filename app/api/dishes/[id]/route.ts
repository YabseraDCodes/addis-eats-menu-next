import { getDishById } from "@/lib/dishes";
import { console } from "inspector";

type Paramprop = {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(request : Request, { params }: Paramprop) {
    const { id } = await params;
    const dish = await getDishById(Number(id));
    
    if(!dish){
        return Response.json({message: "Dish not found"}, {status: 404})
    }
    return Response.json(dish);
}