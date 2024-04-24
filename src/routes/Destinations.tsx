import React from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";
import { H1 } from "../components/Typography";
import { useTranslation } from "react-i18next";

const DestinationsPage = () => {
  const { i18n } = useTranslation();
  const description = i18n.t("destinations.description", { returnObjects: true }) as string[];

  return (
    <Layout backgroundClass="before:bg-castle">
      <div className="flex flex-col gap-y-6 items-center w-full lg:flex-1 lg:flex-row">
        <div className="flex flex-col lg:flex-[1.25]">
          <H1>{i18n.t("destinations.title")}</H1>
          <div className="flex flex-col gap-4">
            {description.map((text, index) => <p key={index}>{text}</p>)}
          </div>
        </div>
        <Map className="h-full lg:flex-[2]" />
      </div>
    </Layout>
  );
};

export default DestinationsPage;
