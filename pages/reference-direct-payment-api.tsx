import type { NextPage } from "next";
import { RedocStandalone } from "redoc";

import Layout from "../components/Layout";

const Redoc: NextPage = () => {
  return (
    <Layout title="Reference | Developer Portal">
      <RedocStandalone
        specUrl="/swaggers/swagger-payments-api.json"
        options={{
          nativeScrollbars: true,
          theme: {
            typography: {
              fontFamily: 'var(--ifm-font-family-base)',
              headings: {
                fontFamily: '"HK Grotesk", system-ui',
                fontWeight: "500",
                lineHeight: "1.6em",
              },
            },
          },
        }}
      />
    </Layout>
  );
};

export default Redoc;
