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
        }}
      />
    </Layout>
  );
};

export default Redoc;
