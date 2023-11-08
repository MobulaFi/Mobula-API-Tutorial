import { Portfolio } from "../src/features/portfolio";
import { CustomHead } from "../src/layouts/head";

export default function portfolioPage() {
  return (
    <>
      <CustomHead title="Portfolio | Mobula API Tutorial" />
      <Portfolio />
    </>
  );
}
