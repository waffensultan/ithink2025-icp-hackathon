import Nav from "@/components/nav";
import BottomNav from "@/components/bottom-nav";

export default function AuthenticatedRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-dark-foreground h-screen w-full overflow-auto relative pb-20">
            <Nav />
            {children}
            <BottomNav />
        </main>
    );
}
