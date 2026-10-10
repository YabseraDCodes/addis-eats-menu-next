export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "MAIN" | "DRINK" | "BREAKFAST";
  spicy: boolean;
};

export type CartAction =
  | { type: "add"; content: MenuItem }
  | { type: "remove"; content: number }
  | { type: "clear" };

export function cartReducer(
  state: MenuItem[],
  action: CartAction
): MenuItem[] {
  switch (action.type) {
    case "add":
      return [...state, action.content];

    case "remove":
      return state.filter((item) => item.id !== action.content);

    case "clear":
      return [];

    default:
      throw new Error("Unknown action");
  }
}