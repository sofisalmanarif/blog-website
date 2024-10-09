'use client';
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth/next"; // Ensure this import is correct

export default function MySessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getServerSession(); // Fetch session on the client side
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
