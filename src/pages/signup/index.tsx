import dynamic from "next/dynamic";

const SignUpPageComponent = dynamic(
  () => import("@/components/organisms/sign-up/SignUpPage"),
  {
    ssr: false,
  }
);

export default SignUpPageComponent;
