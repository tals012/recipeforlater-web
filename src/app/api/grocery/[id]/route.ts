import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch from backend API
    const response = await fetch(
      `${env.BACKEND_API_URL}/api/grocery-lists/public/${id}`,
      {
        headers: {
          "X-API-Key": env.WEBSITE_API_KEY,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Grocery list not found" },
        { status: 404 }
      );
    }

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { error: "Failed to fetch grocery list" },
        { status: 500 }
      );
    }

    const groceryList = data.data;

    return NextResponse.json({
      id: groceryList.id,
      title: groceryList.name,
      itemCount: groceryList.items?.length || 0,
      isShared: true,
      items: groceryList.items,
    });
  } catch (error) {
    console.error("Error fetching grocery list:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

