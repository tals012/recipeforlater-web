'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const FloatingFeature = ({
    icon,
    label,
    delay = 0,
    orbitRadius = 120,
    angle = 0
}: {
    icon: string;
    label: string;
    delay?: number;
    orbitRadius?: number;
    angle?: number;
}) => {
    const [currentAngle, setCurrentAngle] = useState(angle);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAngle(prev => (prev + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const x = Math.cos(currentAngle * Math.PI / 180) * orbitRadius;
    const y = Math.sin(currentAngle * Math.PI / 180) * orbitRadius;

    return (
        <motion.div
            className="absolute flex flex-col items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-brand-primary/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                x,
                y
            }}
            transition={{
                delay,
                duration: 0.8,
                ease: "easeOut"
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(14, 124, 102, 0.3)"
            }}
        >
            <span className="text-2xl mb-1">{icon}</span>
            <span className="text-xs font-medium text-brand-primary text-center px-2">{label}</span>
        </motion.div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center bg-[#f7f4e2] overflow-hidden px-[120px] py-20 min-h-[694px]">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-[60px]">
                {/* Left Content */}
                <motion.div
                    className="flex flex-col gap-10 max-w-[541px]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Title with Logo */}
                    <div className="flex flex-col gap-6">
                        <div className="relative">
                            <h1 className="font-['Oswald'] font-bold text-[72px] leading-[1.2] tracking-[-2.16px] text-[#0a090b]">
                                Every Recipe.
                                <br />
                                <span className="inline-flex items-center gap-2">
                                    <span className="text-[#e74c3c]">Save any</span>
                                    <img src="/assets/logo_hero.png" alt="Recipe For Later" className="inline-block h-16" />
                                    <span className="text-[#0a090b]">Recipe</span>
                                </span>
                                <br />
                                Kitchen.
                            </h1>
                        </div>
                        <p className="font-['Oswald'] font-light text-2xl leading-[28px] tracking-[-0.48px] text-[#0a090b]">
                            Stop losing recipes in screenshots and bookmarks. Import from anywhere, cook hands-free, and share what you love, all powered by AI.
                        </p>
                        <button className="bg-[#177654] hover:bg-[#146547] text-white font-['Inter'] font-[475] text-sm px-[14px] py-2 rounded-md flex items-center gap-2 w-fit transition-colors">
                            Watch Demo
                            <img src="/assets/arrow-right.svg" alt="" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Get Started */}
                    <div className="flex flex-col gap-3">
                        <div className="font-['Oswald'] font-light">
                            <p className="text-xl leading-[28px] tracking-[-0.4px] text-[#0a090b]">Get Started Free</p>
                            <p className="text-base leading-[1.2] tracking-[-0.32px] text-[#0a090b] mt-1">
                                Join thousands of home cooks who've organized their recipe chaos into a clean, voice-controlled cooking experience.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/app-store.svg" alt="Download on App Store" className="h-10" />
                            <img src="/assets/google-play.svg" alt="Get it on Google Play" className="h-10" />
                        </div>
                    </div>
                </motion.div>

                {/* Right - iPhone Mockups */}
                <motion.div
                    className="relative flex-1 h-[587px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Center iPhone with video */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[345px] h-[700px] rounded-[41px] bg-white shadow-2xl overflow-hidden z-20">
                        <img src="/assets/iphone-screen-3.png" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Left iPhone - rotated */}
                    <div
                        className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[322px] h-[583px] rounded-[32px] bg-white shadow-xl overflow-hidden z-10"
                        style={{ transform: 'translateY(-50%) rotate(-5.8deg)' }}
                    >
                        <img src="/assets/iphone-screen-1.png" alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Right iPhone - rotated */}
                    <div
                        className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[322px] h-[583px] rounded-[32px] bg-white shadow-xl overflow-hidden z-10"
                        style={{ transform: 'translateY(-50%) rotate(4.75deg)' }}
                    >
                        <img src="/assets/iphone-screen-2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FeatureSection = () => {
    return (
        <section className="bg-white px-[120px] py-20">
            <div className="mx-auto max-w-[1440px]">
                {/* Header */}
                <motion.div
                    className="mb-[60px] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] tracking-[-1.44px] text-[#0a090b]">
                        Your Kitchen Deserves Better
                    </h2>
                    <p className="font-['Oswald'] text-2xl font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                        You save recipes everywhere, Instagram, TikTok, screenshots, notes, but when it's time to cook, nothing's where you need it.
                    </p>
                </motion.div>

                <div className="flex gap-6">
                    {/* Left Column */}
                    <div className="flex flex-1 flex-col gap-6">
                        {/* Save from social media */}
                        <motion.div
                            className="flex h-[207px] gap-6 rounded-3xl bg-[rgba(252,251,243,0.49)] p-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src="/assets/feature-create-collection.png"
                                alt=""
                                className="h-[164px] w-[203px] rounded-[14px] object-cover shadow-[0px_4px_14px_rgba(0,0,0,0.15)]"
                            />
                            <div className="flex flex-col gap-2">
                                <h3 className="font-['Oswald'] text-2xl font-medium leading-[1.2] tracking-[-0.48px] text-[#0a090b]">
                                    Save from social media
                                    <br />
                                    OR organize your collection
                                </h3>
                                <p className="font-['Oswald'] text-base font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </motion.div>

                        <div className="flex gap-6">
                            {/* Share Collection */}
                            <motion.div
                                className="flex flex-1 flex-col gap-6 overflow-hidden rounded-3xl bg-[rgba(252,251,243,0.49)] p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <img
                                    src="/assets/feature-share-notification.png"
                                    alt=""
                                    className="h-[71px] w-[347px] rounded-[20px] object-cover"
                                />
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-['Oswald'] text-2xl font-medium leading-[1.2] tracking-[-0.48px] text-[#0a090b]">
                                        Share Recipes Collection with Friends & Family
                                    </h3>
                                    <p className="font-['Oswald'] text-base font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Read on phone */}
                            <motion.div
                                className="flex flex-1 flex-col justify-between rounded-3xl bg-[rgba(252,251,243,0.49)] p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border-[1.5px] border-[#f9bd23] bg-[#f7f4e2]">
                                    <img src="/assets/feature-upload-icon.svg" alt="" className="h-[35px] w-[35px]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-['Oswald'] text-2xl font-medium leading-[1.2] tracking-[-0.48px] text-[#0a090b]">
                                        Read on your phone
                                        <br />
                                        OR cook hands-free
                                    </h3>
                                    <p className="font-['Oswald'] text-base font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Follow recipe */}
                        <motion.div
                            className="rounded-3xl bg-[rgba(252,251,243,0.49)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="font-['Oswald'] text-2xl font-medium leading-[1.2] tracking-[-0.48px] text-[#0a090b]">
                                    Follow the recipe
                                    <br />
                                    OR adapt to your diet
                                </h3>
                                <p className="font-['Oswald'] text-base font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Shopping List */}
                    <motion.div
                        className="flex w-[588px] flex-col gap-6 overflow-hidden rounded-3xl bg-[rgba(252,251,243,0.49)] p-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="font-['Oswald'] text-[44px] font-medium leading-[1.2] tracking-[-0.88px] text-[#0a090b]">
                                Smart Shopping list
                            </h3>
                            <p className="font-['Oswald'] text-base font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative h-[500px] w-[350px]">
                                <img
                                    src="/assets/iphone-screen-2.png"
                                    alt="Shopping List"
                                    className="h-full w-full rounded-[40px] object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            number: 1,
            title: "Paste or share a recipe link",
            description: "From YouTube, TikTok, blogs, or any website",
            icon: "🔗",
            animation: "link"
        },
        {
            number: 2,
            title: "AI organizes ingredients & steps",
            description: "Smart parsing, categorization, and optimization",
            icon: "🧠",
            animation: "typing"
        },
        {
            number: 3,
            title: "Cook hands-free with Hey Chef!",
            description: "Voice-guided cooking with step-by-step instructions",
            icon: "🎙️",
            animation: "voice"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        From chaos to clarity in 3 steps
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transform any recipe into your personal cooking assistant
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary/30 via-brand-primary to-brand-primary/30 transform -translate-y-1/2 z-0">
                        <motion.div
                            className="h-full bg-brand-primary"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative z-10 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {step.icon}
                            </motion.div>

                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="text-brand-primary font-bold text-lg mb-2">
                                    Step {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureOverviewSection = () => {
    const features = [
        { icon: '🧠', title: 'Smart Recipe Importer', desc: 'Import from anywhere' },
        { icon: '🌍', title: 'Auto Translation', desc: 'Understand any language' },
        { icon: '🍳', title: 'Hey Chef Voice Mode', desc: 'Cook hands-free' },
        { icon: '🍴', title: 'Diet Conversions', desc: 'Keto, Vegan, Gluten-Free' },
        { icon: '📊', title: 'AI Nutrition Analyzer', desc: 'Instant health info' },
        { icon: '🛒', title: 'Smart Grocery List', desc: 'Grouped by supermarket' },
    ];

    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [features.length]);

    const currentFeature: { icon: string; title: string; desc: string } =
        (features[activeFeature] as { icon: string; title: string; desc: string }) ??
        (features[0] as { icon: string; title: string; desc: string });

    return (
        <section className="py-24 bg-gradient-to-br from-brand-muted/30 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything you need to cook smarter
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Powerful features that make cooking effortless and enjoyable
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central phone mockup */}
                    <motion.div
                        className="relative mx-auto w-80 h-96 bg-gray-900 rounded-3xl shadow-2xl border-8 border-gray-700 mb-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">
                            <motion.div
                                key={activeFeature}
                                className="h-full bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 flex items-center justify-center"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-center">
                                    <div className="text-4xl mb-4">{currentFeature.icon}</div>
                                    <div className="text-brand-primary font-semibold">{currentFeature.title}</div>
                                    <div className="text-sm text-gray-600 mt-2">{currentFeature.desc}</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Floating feature bubbles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="absolute cursor-pointer"
                                style={{
                                    transform: `rotate(${index * 60}deg) translateY(-200px) rotate(-${index * 60}deg)`
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="w-16 h-16 bg-white rounded-full shadow-lg border border-brand-primary/20 flex items-center justify-center text-2xl hover:shadow-xl transition-all duration-300">
                                    {feature.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const VideoDemoSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">🎬</div>
                                    <div className="text-xl font-semibold">Demo Video</div>
                                    <div className="text-sm opacity-80 mt-2">Real cooking with RecipeForLater</div>
                                </div>
                            </div>
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="w-0 h-0 border-l-8 border-l-brand-primary border-y-8 border-y-transparent ml-1" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Real cooking. Real time. No hands. Just your voice.
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Watch how Hey Chef guides you step-by-step while you cook.
                            No more sticky fingers on your phone, no more scrolling through long recipes.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                <span className="text-gray-700">Hands-free cooking instructions</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                <span className="text-gray-700">Voice-activated timers and reminders</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                <span className="text-gray-700">Smart ingredient substitutions</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const PersonalizationSection = () => {
    const [currentLanguage, setCurrentLanguage] = useState<number>(0);
    const [currentDiet, setCurrentDiet] = useState<number>(0);

    const languages = ['English', 'עברית', 'Español', 'Français', 'Italiano'];
    const dietConversions: { from: string; to: string }[] = [
        { from: 'Regular Pasta', to: 'Zucchini Noodles' },
        { from: 'Cheese', to: 'Nutritional Yeast' },
        { from: 'Butter', to: 'Coconut Oil' },
        { from: 'Flour', to: 'Almond Flour' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLanguage(prev => (prev + 1) % languages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [languages.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDiet(prev => (prev + 1) % dietConversions.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [dietConversions.length]);

    return (
        <section className="py-24 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        AI-powered personalization
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Make any recipe work for you, in your language, for your diet
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Translation Feature */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Instantly translate and personalize any recipe
                            </h3>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <motion.div
                                    key={currentLanguage}
                                    className="text-lg font-semibold text-brand-primary"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {languages[currentLanguage]}
                                </motion.div>
                                <div className="text-sm text-gray-600 mt-2">
                                    Automatic translation with cultural context
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Diet Conversion Feature */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-4xl mb-4">🍴</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Convert any recipe to fit your diet
                            </h3>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <motion.div
                                    key={currentDiet}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {dietConversions[currentDiet] && (
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-600">{dietConversions[currentDiet].from}</span>
                                            <span className="text-brand-primary">→</span>
                                            <span className="text-brand-primary font-semibold">{dietConversions[currentDiet].to}</span>
                                        </div>
                                    )}
                                </motion.div>
                                <div className="text-sm text-gray-600 mt-2">
                                    Smart ingredient substitutions
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Finally, my recipes aren't buried in screenshots!",
            author: "Sarah M.",
            role: "Home Cook"
        },
        {
            quote: "Hey Chef changed how I cook. Hands-free is a game changer.",
            author: "Mike R.",
            role: "Food Blogger"
        },
        {
            quote: "The translation feature opened up a whole world of recipes.",
            author: "Elena K.",
            role: "Chef"
        },
        {
            quote: "Diet conversions actually work! My keto journey just got easier.",
            author: "David L.",
            role: "Health Enthusiast"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Loved by 20,000+ home cooks and creators
                    </h2>
                    <p className="text-xl text-gray-600">
                        See what our community is saying
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(14, 124, 102, 0.1)"
                            }}
                        >
                            <div className="text-brand-primary text-2xl mb-4">"</div>
                            <p className="text-gray-700 mb-4 italic">
                                {testimonial.quote}
                            </p>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                <div className="text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-primaryDark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Your smart kitchen assistant
                    </h2>
                    <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto">
                        Choose the plan that works for your cooking style
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Plan */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                            <div className="text-4xl font-bold text-brand-primary mb-6">$0</div>
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                    <span>Import & Save Recipes</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                    <span>Basic Organization</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                    <span>Recipe Sharing</span>
                                </li>
                            </ul>
                            <motion.button
                                className="w-full px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primaryDark transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Free
                            </motion.button>
                        </motion.div>

                        {/* Premium Plan */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-accent relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">RecipeForLater+</h3>
                            <div className="text-4xl font-bold text-brand-primary mb-6">$9.99<span className="text-lg text-gray-600">/month</span></div>
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>Everything in Free</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>Hey Chef Voice Mode</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>AI Diet Conversions</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>Smart Grocery Lists</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>Nutrition Analysis</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                    <span>Unlimited Translations</span>
                                </li>
                            </ul>
                            <motion.button
                                className="w-full px-6 py-3 bg-brand-accent text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                See Plans →
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const LandingPage = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <FeatureSection />
            <HowItWorksSection />
            <FeatureOverviewSection />
            <VideoDemoSection />
            <PersonalizationSection />
            <TestimonialsSection />
            <PricingSection />
        </div>
    );
};

export default LandingPage;

