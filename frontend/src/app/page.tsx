"use client";

import { useEffect, useState } from "react";
import { backend } from "@/lib/backend";

export default function Home() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        backend.greet("World").then((response) => {
            console.log("Backend response: ", response);
            if (typeof response === "string") {
                setGreeting(response);
            }
        });
    }, []);

    return <div>{greeting || "Loading..."}</div>;
}
