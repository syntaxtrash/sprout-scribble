import { auth } from "@/server/auth";
import { UserButton } from "@/components/navigation/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-8">
        <nav>
            <ul className="flex justify-between items-center">
                <li>aaron pogi</li>
                <li>
                    {!session ? (
                        <Button>
                            <Link href="/auth/signin">Sign in</Link>
                        </Button>
                    ) : (
                        <UserButton expires={session.expires} user={session.user}/>
                    )}
                </li>
            </ul>
        </nav>
    </header>
  )
}