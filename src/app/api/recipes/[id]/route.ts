import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

const BACKEND_API_URL = env.BACKEND_API_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    console.log(`[Recipe API] Fetching recipe ${id} from ${BACKEND_API_URL}`);

    // Fetch from your backend API
    const response = await fetch(`${BACKEND_API_URL}/api/recipes/${id}/summary`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    });

    console.log(`[Recipe API] Backend response status: ${response.status}`);

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
      console.error(`[Recipe API] Backend error: ${response.status}`);
      throw new Error(`Backend API error: ${response.status}`);
    }

    const result = await response.json();
    console.log(`[Recipe API] Backend response:`, result);
    
    if (!result.success || !result.data) {
      throw new Error("Invalid response from backend");
    }

    // Transform backend response to frontend format
    const recipe = {
      id: result.data.id,
      title: result.data.title,
      imageUrl: result.data.thumbnailUrl,
      ingredients: result.data.ingredients || [],
      // These fields are optional and not provided by the summary endpoint
      // You can add them later if needed
      totalTime: undefined,
      servings: undefined,
      difficulty: undefined,
      rating: undefined,
    };

    console.log(`[Recipe API] Returning recipe:`, recipe);
    return NextResponse.json(recipe);
  } catch (error) {
    console.error("[Recipe API] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

