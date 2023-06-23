import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  children?: ReactNode;
  headingLevel: HeadingLevel;
  addClasses?: string;
  id?: string;
};

const Heading = ({
  children,
  headingLevel = "h1",
  addClasses,
  id,
}: HeadingProps) => {
  const HeadingElement = headingLevel;
  return (
    <HeadingElement id={id} className={`${addClasses}`}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
