import React from "react";
import Layout from "../components/Layout";
import H1 from "../components/H1";
import SocialMediaLink from "../components/SocialMediaLink";

import type { SocialMediaLink as SocialMediaLinkType } from "../types";
import { useTranslation } from "react-i18next";
import H2 from "../components/H2";

const socialMediaLinks = [
  { href: "https://github.com/katima-g33k", icon: "GitHub" },
  { href: "https://facebook.com/jessy.lachapelle", icon: "Facebook" },
  { href: "https://instagram.com/jessy.lachapelle", icon: "Instagram" },
] as SocialMediaLinkType[];

export default function Contact() {
  const { i18n } = useTranslation();

  return (
    <Layout backgroundClass="before:bg-beach">
      <div className="flex flex-col gap-2 mb-8">
        <H1 className="!mb-0">{i18n.t("contact.title")}</H1>
        <H2>{i18n.t("contact.description")}</H2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {socialMediaLinks.map(link => <SocialMediaLink {...link} key={link.href} />)}
      </div>
    </Layout>
  );
}
