import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const groceryList = await db.groceryList.findUnique({
            where: {
                id: params.id,
            },
            include: {
                _count: {
                    select: {
                        items: true,
                    },
                },
            },
        });

        if (!groceryList) {
            return NextResponse.json(
                { error: "Grocery list not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            id: groceryList.id,
            title: groceryList.title || "Shopping List",
            itemCount: groceryList._count.items,
            isShared: groceryList.isShared || false,
        });
    } catch (error) {
        console.error("Error fetching grocery list:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

