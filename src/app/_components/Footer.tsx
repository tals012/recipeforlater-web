'use client';

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-2">Recipe For Later</h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            Save recipes for later, cook with guided instructions, and organize your culinary adventures.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <div className="flex space-x-6">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-6 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Recipe For Later. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 