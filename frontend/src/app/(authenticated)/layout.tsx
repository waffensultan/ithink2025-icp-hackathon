import Nav from "@/components/nav";

export default function AuthenticatedRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-dark-foreground h-screen w-full overflow-auto">
            <Nav />
            {children}
        </main>
    );
}
