import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const useAuth = ({
  callbackUrl,
}: {
  callbackUrl?: string;
} = {}) => {
  const { status, data: session } = useSession({
    required: false,
    // onUnauthenticated() {
    //   redirect(`/api/auth/signin?callbackUrl=/${callbackUrl}`);
    // },
  });

  return { status, session };
};

export default useAuth;
