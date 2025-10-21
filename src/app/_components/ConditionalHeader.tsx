"use client";

import { usePathname } from "next/navigation";
import { Header } from "./landing/Header";

export function ConditionalHeader() {
    const pathname = usePathname();
    const hideHeader = pathname === '/privacy-policy' || pathname === '/terms-of-service';

    if (hideHeader) {
        return null;
    }

    return <Header />;
}

