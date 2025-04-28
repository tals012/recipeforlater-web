import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.talshukrun.recipeforlater",
          sha256_cert_fingerprints: [
            // Add your APK signing key fingerprint here
            // You can find it in Google Play Console under Setup > App integrity
            "SHA256:1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF",
          ],
        },
      },
    ],
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
} 