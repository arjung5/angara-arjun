import dynamic from "next/dynamic";

const SignInPageComponent = dynamic(
  () => import("@/components/moleclues/SignIn/SignInPage"),
  {
    ssr: false,
  }
);

export default SignInPageComponent;
