import { categories } from "@/data/categories";

const API = "http://localhost:3000/dishes.json"

export type Category = "MAIN" | "DRINK" | "BREAKFAST";

export type Dish = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  spicy: boolean;
};

type Menu = {
  name: string;
  version: string;
  description: string;
  items: Dish[];
};

export async function getDishes(): Promise<Dish[]> {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch dishes");
  }

  const menu: Menu = await res.json();

  return menu.items;
  console.log(menu);
}

export async function  getaCategories() {
    return categories;
}

export async function getDishById(
  id: number
): Promise<Dish | undefined> {
  const dishes = await getDishes();

  return dishes.find((dish) => dish.id === id);
}

export async function getDishesByCategory(
  category: Category
): Promise<Dish[]> {
  const dishes = await getDishes();

  return dishes.filter((dish) => dish.category === category);
}
