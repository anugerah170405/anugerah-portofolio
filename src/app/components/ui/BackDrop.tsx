import { motion } from "motion/react";

interface BackDropProps {
    onClose: () => void;
    
}


export function BackDrop({ onClose }: BackDropProps) {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="fixed inset-0 z-50"
        style={{
            backdropFilter: "blur(10px) saturate(160%)",
            background: "color-mix(in srgb, var(--background) 82%, transparent)",
        }}
        onClick={onClose}
    />
}