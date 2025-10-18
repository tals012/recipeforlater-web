# API Implementation Guide

## ✅ RECIPE API - CONNECTED!

הדף מתכונים כבר מחובר ל-backend שלך!

- **Backend Endpoint:** `GET /api/recipes/:id/summary`
- **Frontend:** מתחבר אוטומטית ל-`https://api.recipeforlater.com`

## Overview

הדפים של מתכונים ואוספים כבר מוכנים ומעוצבים!

## API Endpoints

### 1. Recipe API

**Endpoint:** `GET /api/recipes/[id]`

**Response Format:**

```typescript
{
  id: string;
  title: string;
  imageUrl: string;
  totalTime?: string;      // e.g., "1 h 30 Minutes"
  servings?: number;       // e.g., 4
  difficulty?: string;     // e.g., "Easy", "Medium", "Hard"
  rating?: number;         // e.g., 5.0
}
```

**Implementation File:** `src/app/api/recipes/[id]/route.ts`

**What to do:**

1. החלף את ה-mock data בקריאה אמיתית ל-database שלך
2. דוגמה עם Prisma:

```typescript
const recipe = await prisma.recipe.findUnique({
  where: { id },
  select: {
    id: true,
    title: true,
    imageUrl: true,
    totalTime: true,
    servings: true,
    difficulty: true,
    rating: true,
  },
});
```

### 2. Collection API

**Endpoint:** `GET /api/collections/[id]`

**Response Format:**

```typescript
{
  id: string;
  title: string;
  imageUrl: string;
  recipeCount?: number;    // e.g., 12
  isShared?: boolean;      // true if collection is shared
}
```

**Implementation File:** `src/app/api/collections/[id]/route.ts`

**What to do:**

1. החלף את ה-mock data בקריאה אמיתית ל-database שלך
2. דוגמה עם Prisma:

```typescript
const collection = await prisma.collection.findUnique({
  where: { id },
  include: {
    _count: {
      select: { recipes: true },
    },
  },
});

return {
  id: collection.id,
  title: collection.title,
  imageUrl: collection.imageUrl,
  recipeCount: collection._count.recipes,
  isShared: collection.isShared,
};
```

## Pages Already Implemented

### Recipe Page

**URL:** `/recipe/[id]`
**Features:**

- ✅ Hero image עם gradient overlay
- ✅ Rating badge
- ✅ Recipe info (time, difficulty, servings)
- ✅ CTA לפתיחה באפליקציה
- ✅ Download buttons (App Store + Google Play)
- ✅ Responsive design
- ✅ Beautiful animations

### Collection Page

**URL:** `/collection/[id]`
**Features:**

- ✅ Hero image עם gradient overlay
- ✅ Shared badge
- ✅ Recipe count
- ✅ Support for invite parameter (`?invite=true`)
- ✅ CTA לפתיחה באפליקציה
- ✅ Download buttons
- ✅ Responsive design
- ✅ Beautiful animations

## Testing

### Test Recipe Page

```
http://localhost:3000/recipe/123
```

### Test Collection Page

```
http://localhost:3000/collection/456
http://localhost:3000/collection/456?invite=true
```

## Database Schema Example

אם אתה משתמש ב-Prisma, הנה דוגמה לschema:

```prisma
model Recipe {
  id         String   @id @default(cuid())
  title      String
  imageUrl   String
  totalTime  String?
  servings   Int?
  difficulty String?
  rating     Float?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model Collection {
  id          String   @id @default(cuid())
  title       String
  imageUrl    String
  isShared    Boolean  @default(false)
  recipeCount Int?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Next Steps

1. ✅ הדפים מוכנים ומעוצבים
2. ✅ ה-API endpoints מוכנים עם mock data
3. 🔨 **עכשיו תור שלך:** החלף את ה-mock data בקריאות אמיתיות ל-database
4. 🔨 הוסף את המודלים ל-Prisma schema (אם משתמש ב-Prisma)
5. 🔨 Run migrations
6. 🔨 Test!

## Notes

- הדפים כבר מטפלים ב-loading states
- יש fallback ל-mock data אם ה-API נכשל
- הכל responsive ועובד במובייל ובדסקטופ
- העיצוב תואם לעיצוב של האפליקציה
