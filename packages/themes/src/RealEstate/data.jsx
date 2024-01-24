import React from "react";

import User from "@pagerland/icons/src/line/User";
import Building from "@pagerland/icons/src/line/Building";
import MapMarker from "@pagerland/icons/src/line/MapMarker";
import Phone from "@pagerland/icons/src/line/Phone";
import Envelope from "@pagerland/icons/src/line/Envelope";

import Icon from "@pagerland/common/src/components/Icon";

import * as Yup from "yup";
import background from "./assets/escavadora.jpg";
import background2x from "./assets/escavadora@2x.jpg";

import about1 from "./assets/about/about1.jpg";
import aboutLarge1 from "./assets/about/about1-huge.jpg";
import about12x from "./assets/about/about1-@2x.jpg";
import about2 from "./assets/about/about2.jpg";
import aboutLarge2 from "./assets/about/about2-huge.jpg";
import about22x from "./assets/about/about2-@2x.jpg";
import about3 from "./assets/about/about3.jpg";
import aboutLarge3 from "./assets/about/about3-huge.jpg";
import about32x from "./assets/about/about3-@2x.jpg";

import materials1 from "./assets/materials/materials-1.jpg";
import materials12x from "./assets/materials/materials-1@2x.jpg";
import materials2 from "./assets/materials/materials-2.jpg";
import materials22x from "./assets/materials/materials-2@2x.jpg";
import materials3 from "./assets/materials/materials-3.jpg";
import materials32x from "./assets/materials/materials-3@2x.jpg";

import contactImg from "./assets/contact.png";
import contactImg2x from "./assets/contact@2x.png";

import { getUrlParameter } from "./language-utils";

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}

export default {
  title: "Forsen",
  navbar: {
    links: [
      {
        to: "",
        "data-to": "",
        label: "home",
      },
      {
        to: "about",
        "data-to": "about",
        label: "about_us",
      },
      {
        to: "materials",
        "data-to": "materials",
        label: "materials",
      },
      {
        to: "location",
        "data-to": "location",
        label: "location",
      },
      {
        to: "contact",
        "data-to": "contact",
        label: "contact",
      },
    ],
    actions: [
      {
        onClick: () => {
          const language = getUrlParameter("lang", window.location.search);
          const changeLanguageTo = language === "cat" ? "es" : "cat";
          window.location = updateQueryStringParameter(
            window.location.href,
            "lang",
            changeLanguageTo
          );
        },
        label: (lang) => (lang === "cat" ? "Castellano" : "Català"),
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: "excavadora",
    },
    title: "home_title",
    features: [],
    cta: {
      to: "about",
      children: "about_us",
    },
  },
  about: {
    title: "about_title",
    text: "about_text_1",
    text2: "about_text_2",
    text3: "about_text_3",
    text4: "about_text_4",
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`,
        },
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`,
        },
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`,
        },
      },
    ],
  },
  materials: {
    title: "materials",
    name: "materials",
    sections: [
      {
        ImgProps: {
          src: materials2,
          srcSet: `${materials2} 2x, ${materials22x} 2x`,
        },
        title: "arids_title",
        text: "arids_text",
      },
      {
        ImgProps: {
          src: materials1,
          srcSet: `${materials1} 1x, ${materials12x} 2x`,
        },
        title: "concrete_title",
        text: "concrete_text",
      },
      {
        ImgProps: {
          src: materials3,
          srcSet: `${materials3} 2x, ${materials32x} 2x`,
        },
        title: "excavations_title",
        text: "excavations_text",
      },
    ],
  },
  location: {
    title: "location",
    text: "location_text",
    map: {
      cords: {
        lat: 40.644669437846744,
        lng: 0.2643219747534564,
      },
    },
  },
  contact: {
    title: "contact",
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`,
    },
    details: {
      title: "contact_title",
      text: "",
      info: [
        {
          icon: Building,
          text: "forsen_sl",
        },
        {
          icon: MapMarker,
          text: "contact_direction",
        },
        {
          icon: Phone,
          text: "contact_phone_1",
        },
        {
          icon: Phone,
          text: "contact_phone_2",
        },
        {
          icon: Envelope,
          text: "email",
        },
      ],
    },
    form: {
      title: "contact_form_title",
      sendButtonText: "Enviar",
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "contact_form_15_chars")
          .required("contact_form_required"),
        email: Yup.string()
          .email("contact_form_valid_email")
          .required("contact_form_required"),
        message: Yup.string()
          .min(20, "contact_form_20_chars")
          .required("contact_form_required"),
      }),

      fields: [
        {
          name: "firstName",
          label: "contact_form_label_name",
          placeholder: "",
          initialValue: "",
          prefix: <Icon icon={User} />,
        },
        {
          name: "phone",
          label: "contact_form_label_phone",
          placeholder: "",
          initialValue: "",
          prefix: <Icon icon={Phone} />,
        },
        {
          name: "email",
          label: "contact_form_label_email",
          placeholder: "",
          type: "email",
          initialValue: "",
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: "message",
          label: "contact_form_label_message",
          placeholder: "",
          multiline: true,
          initialValue: "",
        },
      ],
    },
  },
  footer: {
    title: "forsen_sl",
    direction: "contact_direction",
    phone: "phone",
    email: "email",
  },
  copyright: "© 2020 forsensl",
};
