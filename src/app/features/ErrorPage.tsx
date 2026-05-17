import { isRouteErrorResponse, useRouteError } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";

const fg = (pct: number) => `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function ErrorPage() {
    const error = useRouteError();

    const [showStack, setShowStack] = useState(false);

    // Hanya untuk runtime Error (bukan route error)
    if (!isRouteErrorResponse(error) && error instanceof Error) {
        const stack = error.stack ?? "";
        return (
            <div className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(246, 59, 59, 0.08) 0%, transparent 70%)",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute select-none pointer-events-none"
                    style={{
                        fontSize: "clamp(160px, 28vw, 340px)",
                        fontWeight: 700,
                        letterSpacing: "-0.06em",
                        lineHeight: 1,
                        color: fg(4),
                    }}
                >
                    Error
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-2xl">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <div className="h-px w-6" style={{ background: "rgba(59,130,246,0.4)" }} />
                        <span
                            className="text-xs uppercase tracking-widest"
                            style={{ color: fg(35) }}
                        >
                            Runtime error
                        </span>
                        <div className="h-px w-6" style={{ background: "rgba(59,130,246,0.4)" }} />
                    </motion.div>

                    {/* Headline */}
                    <div className="overflow-hidden mb-3">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block text-[clamp(2.2rem,6vw,4rem)] leading-tight tracking-tight"
                        >
                            {error.name}
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.28 }}
                        className="text-base leading-relaxed mb-2"
                        style={{ color: fg(45) }}
                    >
                        <span
                            className="font-mono text-sm px-1.5 py-0.5 rounded"
                            style={{
                                background: "rgba(246, 59, 59, 0.1)",
                                color: "#f63b3b",
                                border: "1px solid rgba(246, 59, 59, 0.2)",
                            }}
                        >
                            {error.message}
                        </span>
                    </motion.p>
                    {stack && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.34 }}
                            className="text-sm leading-relaxed mb-10"
                            style={{ color: fg(32) }}
                        >
                            {stack.split("\n").find(l => l.includes(".tsx") || l.includes(".ts") || l.includes(".jsx"))?.trim()}
                        </motion.p>)}

                    {/* Stack trace toggle */}
                    {stack && (
                        <>
                            <button
                                className="cursor-pointer text-xs mb-1 flex items-center gap-1"
                                style={{ color: fg(35) }}
                                onClick={() => setShowStack(v => !v)}
                            >
                                {showStack ? "▾ Hide" : "▸ Show"} stack trace
                            </button>
                            {showStack && (
                                <motion.pre
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-left text-xs p-3 rounded-lg border mb-4 overflow-auto"
                                    style={{ color: fg(40), background: "rgba(0,0,0,0.03)" }}>
                                    {stack}
                                </motion.pre>
                            )}
                        </>
                    )}

                </div>
            </div>

        )
    }
}