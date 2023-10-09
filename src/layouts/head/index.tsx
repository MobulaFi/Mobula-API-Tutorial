import Head from "next/head";
import { FC } from "react";
import { HeadProps } from "../../interfaces/layouts";

export const CustomHead: FC<HeadProps> = ({ title }: HeadProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);
