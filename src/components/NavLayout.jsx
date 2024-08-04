import Navbar from "./Navbar";
import { useSession } from 'next-auth/react';

export default function NavLayout() {
  const { data: session, status } = useSession();

  return (
    <div>
      <Navbar session={session} status={status} />
    </div>
  );
}
