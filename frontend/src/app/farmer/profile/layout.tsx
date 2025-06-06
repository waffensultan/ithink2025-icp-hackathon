import Profile from "@/components/profile";

export default function FarmerProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Profile user="magsasaka" />
            {children}
        </>
    );
}
