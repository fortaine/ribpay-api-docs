import type { NextPage } from "next";
import { RedocStandalone } from "redoc";

import Layout from "../components/Layout";

const Redoc: NextPage = () => {
  return (
    <Layout title="Reference | Developer Portal">
      <RedocStandalone
        specUrl="/swaggers/swagger-oxlin-payments-api.yml"
        options={{
          nativeScrollbars: true,
        }}
      />
    </Layout>
  );
};

export default Redoc;
