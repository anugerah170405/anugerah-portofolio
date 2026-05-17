import { isRouteErrorResponse, useRouteError } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const fg = (pct: number) =>
    `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function ErrorPage() {
    const error = useRouteError();
    const [showStack, setShowStack] = useState(false);

    useEffect(() => {
        document.title = "Error - Anugerah Gari";
    }, []);

    // Runtime Error (bukan route error)
    if (!isRouteErrorResponse(error) && error instanceof Error) {
        const stack = error.stack ?? "";

        const stackPreview =
            stack
                .split("\n")
                .find((l) => l.includes(".tsx") || l.includes(".ts") || l.includes(".jsx"))
                ?.trim() ?? "";

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

                {/* Single animation wrapper */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 text-center max-w-2xl"
                >
                    {/* Background word */}
                    <div
                        className="absolute select-none pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            fontSize: "clamp(160px, 28vw, 340px)",
                            fontWeight: 700,
                            letterSpacing: "-0.06em",
                            lineHeight: 1,
                            color: fg(4),
                        }}
                    >
                        Error
                    </div>

                    {/* Label */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div
                            className="h-px w-6"
                            style={{ background: "rgba(59,130,246,0.4)" }}
                        />
                        <span
                            className="text-xs uppercase tracking-widest"
                            style={{ color: fg(35) }}
                        >
                            Runtime error
                        </span>
                        <div
                            className="h-px w-6"
                            style={{ background: "rgba(59,130,246,0.4)" }}
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-[clamp(2.2rem,6vw,4rem)] leading-tight tracking-tight mb-4">
                        {error.name}
                    </h1>

                    {/* Message */}
                    <p className="text-base leading-relaxed mb-3" style={{ color: fg(45) }}>
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
                    </p>

                    {/* Stack preview */}
                    {stackPreview && (
                        <p className="text-sm mb-6" style={{ color: fg(32) }}>
                            {stackPreview}
                        </p>
                    )}

                    {/* Toggle */}
                    {stack && (
                        <>
                            <button
                                className="cursor-pointer text-xs mb-2"
                                style={{ color: fg(35) }}
                                onClick={() => setShowStack((v) => !v)}
                            >
                                {showStack ? "▾ Hide" : "▸ Show"} stack trace
                            </button>

                            {showStack && (
                                <pre
                                    className="text-left text-xs p-3 rounded-lg border overflow-auto"
                                    style={{
                                        color: fg(40),
                                        background: "rgba(0,0,0,0.03)",
                                    }}
                                >
                                    {stack}
                                </pre>
                            )}
                        </>
                    )}
                </motion.div>
            </div>
        );
    }

    return null;
}