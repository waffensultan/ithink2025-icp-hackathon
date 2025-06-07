"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingRole } from "@/app/page";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRole: OnboardingRole;
}

export default function ProtectedRoute({
    children,
    allowedRole,
}: ProtectedRouteProps) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("selectedRole");

        if (!role || allowedRole !== role) {
            router.replace("/");
        } else {
            setLoading(false);
        }
    }, [allowedRole, router]);

    if (loading) return null;

    return <>{children}</>;
}
