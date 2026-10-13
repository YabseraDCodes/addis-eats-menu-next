import { NextResponse } from "next/server";
import menu from "@/../public/dishes.json";

export async function GET() {
  return NextResponse.json(menu.items);
}