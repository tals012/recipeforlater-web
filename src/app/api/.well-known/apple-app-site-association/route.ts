import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: "YZMN2BRBCL.com.talshukrun.recipeforlater", // Team ID + Bundle ID
            paths: [
              "/recipe/*",
              "/collection/*",
              "/auth/magic-login",
              "/auth/reset-password",
              "NOT /api/*",
            ],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
} 