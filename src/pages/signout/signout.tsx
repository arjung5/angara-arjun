import { useEffect } from "react";
import { SESSION_TOKEN } from "../../../constants/commonConstants";
import { useRouter } from "next/router";

const SignOut = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem(SESSION_TOKEN);
    router.push("/");
  }, []);
  return <>....loading</>;
};
export default SignOut;
