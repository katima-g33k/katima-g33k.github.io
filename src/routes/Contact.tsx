import React from "react";
import { useTranslation } from "react-i18next";

import { H1, H2 } from "../components/Typography";
import SocialMediaLink from "../components/SocialMediaLink";

import type { SocialMediaLink as SocialMediaLinkType } from "../types";

const socialMediaLinks = [
  { href: "https://www.facebook.com/jessy.lachapelle.11", icon: "Facebook" },
  { href: "https://instagram.com/jessy.lachapelle", icon: "Instagram" },
  { href: "https://wa.me/12272274868", icon: "Whatsapp" },
  { href: "https://github.com/katima-g33k", icon: "GitHub" },
  { href: "https://www.linkedin.com/in/jessy-lachapelle-2933a7302", icon: "Linkedin" },
] as SocialMediaLinkType[];

export default function Contact() {
  const { i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <H1 className="!mb-0">{i18n.t("contact.title")}</H1>
        <H2>{i18n.t("contact.description")}</H2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {socialMediaLinks.map(link => <SocialMediaLink {...link} key={link.href} />)}
      </div>
    </>
  );
}
