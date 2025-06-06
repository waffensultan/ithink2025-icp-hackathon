import Link from "next/link";

import {
    HomeIcon,
    ShoppingBasketIcon,
    MessageSquareIcon,
    UserIcon,
    LucideIcon,
    PlusIcon,
} from "lucide-react";
import { type OnboardingRole } from "@/app/page";

interface BottomNavProps {
    user: OnboardingRole;
}
export default function BottomNav({ user }: BottomNavProps) {
    const links: Record<
        OnboardingRole,
        Record<string, Record<string, LucideIcon | string>>
    > = {
        magsasaka: {
            Home: {
                icon: HomeIcon,
                link: "", // farmer dashboard
            },
            Market: {
                icon: ShoppingBasketIcon,
                link: "/marketplace",
            },
            Messages: {
                icon: MessageSquareIcon,
                link: "/messages",
            },
            Profile: {
                icon: UserIcon,
                link: "/farmer/profile",
            },
        },
        mamimili: {
            Home: {
                icon: HomeIcon,
                link: "", // buyer home
            },
            Market: {
                icon: ShoppingBasketIcon,
                link: "/marketplace",
            },
            Messages: {
                icon: MessageSquareIcon,
                link: "/messages",
            },
            Profile: {
                icon: UserIcon,
                link: "/buyer/profile",
            },
        },
    };

    return (
        <nav className="-bottom-1 fixed w-full z-1000 rounded-t-4xl bg-primary text-dark-foreground flex items-center justify-between p-5">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-9">
                {user === "magsasaka" && (
                    <Link
                        href={"/farmer/add-crop"}
                        className="border-4 border-dark-foreground bg-[#2e5441] w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <PlusIcon size={32} />
                    </Link>
                )}
            </div>
            <div className="flex gap-8">
                {Object.entries(links[user])
                    .slice(0, 2)
                    .map(([label, { icon: Icon, link }]) => (
                        <Link
                            href={link as string}
                            key={label}
                            className="flex flex-col items-center gap-1"
                        >
                            <Icon size={40} />
                            <span className="text-lg font-medium">{label}</span>
                        </Link>
                    ))}
            </div>

            <div className="flex gap-8">
                {Object.entries(links[user])
                    .slice(2)
                    .map(([label, { icon: Icon, link }]) => (
                        <Link
                            href={link as string}
                            key={label}
                            className="flex flex-col items-center gap-1"
                        >
                            <Icon size={40} />
                            <span className="text-lg font-medium">{label}</span>
                        </Link>
                    ))}
            </div>
            {/* {Object.entries(links[user]).map(
                ([label, { icon: Icon, link }]) => (
                    <Link
                        href={link as string}
                        key={label}
                        className="flex flex-col items-center gap-1"
                    >
                        <Icon size={40} />
                        <span className="text-lg font-medium">{label}</span>
                    </Link>
                )
            )} */}
        </nav>
    );
}
