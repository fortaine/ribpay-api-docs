import Head from "next/head";
import Image from "next/image";

type LayoutProps = React.PropsWithChildren<{ title: string }>;

export default function Layout({
  children,
  title,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}
