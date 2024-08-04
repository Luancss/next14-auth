"use client";

import { logout } from "@/actions/logout";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
   logout();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button onClick={onClick} type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
