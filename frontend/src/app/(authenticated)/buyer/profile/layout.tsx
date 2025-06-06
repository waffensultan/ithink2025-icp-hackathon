import Profile from "@/components/profile";

export default function BuyerProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Profile user="mamimili" />
            {children}
        </>
    );
}
