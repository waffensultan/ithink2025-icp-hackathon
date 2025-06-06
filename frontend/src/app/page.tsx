"use client";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { backend } from "@/lib/backend";

import { motion, AnimatePresence } from "motion/react";

import { EarthIcon } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type LandingPageStages = "landing" | "onboarding";

export default function LandingPage() {
    const [stage, setStage] = useState<LandingPageStages>("landing");

    const components: Record<LandingPageStages, React.ReactElement> = {
        landing: <Landing setStage={setStage} />,
        onboarding: <Onboarding />,
    };

    return (
        <main className="bg-primary text-dark-foreground h-screen flex justify-center items-center relative overflow-hidden">
            <img
                src="/short_line.svg"
                alt="short-line"
                className="absolute -top-10 -rotate-5 right-0 w-50"
            />
            <AnimatePresence mode="wait">
                <motion.div
                    key={stage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full px-7 z-10"
                >
                    {components[stage]}
                </motion.div>
            </AnimatePresence>
            <img
                src="/long_line.svg"
                alt="long-line"
                className="absolute bottom-0 left-0 w-100"
            />
        </main>
    );
}

function Landing({
    setStage,
}: {
    setStage: React.Dispatch<React.SetStateAction<LandingPageStages>>;
}) {
    return (
        <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-1">
                <h1 className="text-5xl font-semibold">FarmChain</h1>
                <h3 className="text-2xl">
                    Farm Fairer.{" "}
                    <span className="bg-gradient-to-r from-[#FAF3E0] via-[#63D733] to-[#5DD62C] bg-clip-text text-transparent">
                        Farm Better.
                    </span>
                </h3>
            </section>
            <Select
                onValueChange={() => {
                    setTimeout(() => {
                        setStage("onboarding");
                    }, 1500);
                }}
            >
                <SelectTrigger className="w-[180px] bg-dark-foreground text-light-foreground">
                    <EarthIcon />
                    <SelectValue
                        className="duration-300"
                        placeholder="Language"
                    />
                </SelectTrigger>
                <SelectContent className="bg-dark-foreground text-light-foreground">
                    <SelectItem value="filipino">Filipino</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="cebuano">Cebuano</SelectItem>
                    <SelectItem value="hiligaynon">Hiligaynon</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}

type OnboardingPhase = 0 | 1 | 2;
export type OnboardingRole = "magsasaka" | "mamimili";
function Onboarding() {
    const [phase, setPhase] = useState<OnboardingPhase>(0);
    const [selectedRole, setSelectedRole] = useState<
        OnboardingRole | undefined
    >(undefined);

    const router = useRouter();

    const phases: Record<OnboardingPhase, React.ReactElement> = {
        0: (
            <div>
                <section className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">
                        Maligayang Pagdating sa
                    </h3>
                    <h1 className="text-5xl font-semibold">FarmChain</h1>
                </section>
                <img src="/onboarding/phase_one.svg" alt="phase-one" />
            </div>
        ),
        1: (
            <div>
                <section className="flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold">FarmChain</h1>
                    <p className="text-sm">
                        Alisin ang tagapamagitan. Magbenta nang direkta sa
                        merkado. Sumali sa FarmChain at magkaroon ng kontrol sa
                        iyong ani, iyong presyo, at iyong kinabukasan.
                    </p>
                </section>
                <img src="/onboarding/phase_two.svg" alt="phase-two" />
            </div>
        ),
        2: (
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">Mag sign-in bilang</h2>
                <main className="flex flex-row items-center gap-4 justify-center my-8">
                    {["magsasaka", "mamimili"].map((role, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                setSelectedRole(role as OnboardingRole)
                            }
                            className="flex flex-col items-center h-52 justify-end"
                        >
                            <div className="relative h-44 w-44 flex items-center justify-center">
                                <AnimatePresence>
                                    {selectedRole === role && (
                                        <motion.div
                                            key="glow"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 0.5, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeOut",
                                            }}
                                            className="absolute h-40 w-40 rounded-full bg-green-400 blur-xl z-0"
                                        />
                                    )}
                                </AnimatePresence>
                                <img
                                    src={
                                        role === "magsasaka"
                                            ? "/onboarding/magsasaka_inactive.svg"
                                            : "/onboarding/mamimili_inactive.svg"
                                    }
                                    alt={`${role}-inactive`}
                                    className="h-44 object-contain z-10"
                                />
                            </div>
                            <h3 className="text-[#e7efcb] font-semibold mt-1">
                                {role === "mamimili" ? "Mamimili" : "Magsasaka"}
                            </h3>
                        </button>
                    ))}
                </main>
            </div>
        ),
    };

    const buttonIsDisabled = phase === 2 && !selectedRole;

    return (
        <div className="flex flex-col gap-2">
            <AnimatePresence mode="wait">
                <motion.div
                    key={phase}
                    layout="position"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {phases[phase]}
                </motion.div>
            </AnimatePresence>

            <div className="flex flex-col gap-10">
                <div className="flex flex-row justify-center items-center gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={`${
                                index === phase
                                    ? "bg-secondary"
                                    : "opacity-50 bg-white"
                            } rounded-full w-2.5 h-2.5 `}
                        ></div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <button
                        disabled={buttonIsDisabled}
                        onClick={() => {
                            if (phase < 2) {
                                setPhase(
                                    (prev) => (prev + 1) as OnboardingPhase
                                );
                            } else {
                                router.push("/auth");
                            }
                        }}
                        className={`${
                            buttonIsDisabled && "opacity-50"
                        } duration-150 bg-[#337418] text-dark-foreground font-semibold text-md rounded-xl py-5`}
                    >
                        <span>NEXT</span>
                    </button>
                    <button onClick={() => router.push("/auth")}>
                        <span className="opacity-50">Skip</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
