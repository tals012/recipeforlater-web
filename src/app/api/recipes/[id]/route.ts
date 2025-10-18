import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

const BACKEND_API_URL = env.BACKEND_API_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch from your backend API
    const response = await fetch(`${BACKEND_API_URL}/api/recipes/${id}/summary`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Recipe not found" },
          { status: 404 }
        );
      }
      if (response.status === 403) {
        return NextResponse.json(
          { error: "Recipe is private" },
          { status: 403 }
        );
      }
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success || !result.data) {
      throw new Error("Invalid response from backend");
    }

    // Transform backend response to frontend format
    const recipe = {
      id: result.data.id,
      title: result.data.title,
      imageUrl: result.data.thumbnailUrl,
      // These fields are optional and not provided by the summary endpoint
      // You can add them later if needed
      totalTime: undefined,
      servings: undefined,
      difficulty: undefined,
      rating: undefined,
    };

    return NextResponse.json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

