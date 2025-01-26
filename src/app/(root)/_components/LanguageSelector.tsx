"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { LANGUAGE_CONFIG } from "../_constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, Sparkles } from "lucide-react";
import useMounted from "@/hooks/useMounted";

function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const mounted = useMounted();

    const { language, setLanguage } = useCodeEditorStore();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLanguageObj = LANGUAGE_CONFIG[language];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageSelect = (langId: string) => {
        setLanguage(langId);
        setIsOpen(false);
    };

    if (!mounted) return null;

    return (
        <div className="relative z-100" ref={dropdownRef}>
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative flex items-center gap-3 px-4 h-[42px] bg-[#1e1e2e]/80  transition-all duration-100 border border-gray-800/50 hover:border-gray-700`}
            >
                {/* Decoration */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5  opacity-0 group-hover:opacity-100 transition-opacity h-[42px]"
                    aria-hidden="true"
                />

                <div className="size-5 bg-gray-800/50">
                    <Image
                        src={currentLanguageObj.logoPath}
                        alt="programming language logo"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain relative z-100"
                    />
                </div>

                <span className="text-gray-200 text-left group-hover:text-white transition-colors">
                    {currentLanguageObj.label}
                </span>

                <ChevronDownIcon
                    className={`size-4 text-gray-400 transition-all duration-200 group-hover:text-gray-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.1 }}
                        className="z-100 absolute top-full left-0 mt-2 w-60 bg-[#1e1e2e]/95 backdrop-blur-xl  border border-[#313244] shadow-2xl py-2"
                    >
                        <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
                            <p className="text-xs font-medium text-gray-400">Select Language</p>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                            {Object.values(LANGUAGE_CONFIG).map((lang, index) => (
                                <motion.div
                                    key={lang.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group px-2"
                                >
                                    <button
                                        className={`relative w-full flex items-center gap-3 px-3 py-2.5  transition-all duration-100 mb-[5px] ${language === lang.id ? "bg-blue-500/10 text-blue-400" : "text-gray-300"} hover:bg-[#262637]`}
                                        onClick={() => handleLanguageSelect(lang.id)}
                                    >
                                        {/* decorator */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5  opacity-0 group-hover:opacity-100 transition-opacity"
                                        />

                                        <div
                                            className={`relative size-8  p-1.5 group-hover:scale-110 transition-transform ${language === lang.id ? "bg-blue-500/10" : "bg-gray-800/50"}`}
                                        >
                                            <div
                                                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10  opacity-0 group-hover:opacity-100 transition-opacity"
                                            />
                                            <Image
                                                width={24}
                                                height={24}
                                                src={lang.logoPath}
                                                alt={`${lang.label} logo`}
                                                className="w-full h-full object-contain relative z-100"
                                            />
                                        </div>

                                        <span className="flex-1 text-left group-hover:text-white transition-colors">
                                            {lang.label}
                                        </span>

                                        {/* selected language border */}
                                        {language === lang.id && (
                                            <motion.div
                                                className="absolute inset-0 border-2 border-blue-500/30 "
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 0.6,
                                                }}
                                            />
                                        )}

                                        {language === lang.id && (
                                            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                                        )}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default LanguageSelector;
