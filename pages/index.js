import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();

  return (
    <div>
      <ul>
        <li onClick={() => router.push("/auth/login")}>giris</li>
        <li onClick={() => router.push("/auth/signup")}>kayıt</li>
        <li onClick={() => signOut()}>cıkıs</li>
      </ul>
    </div>
  );
}
