import { mapEvents } from './../data/events';
import icons from './../data/icons';

const sameAs = icons.filter(icon => icon.id !== 'presspack').map((icon) => {
  return icon.href;
});

const staticMeta = {
  name: 'The Killer Limit',
  title: 'The Killer Limit - A Rock Rap Hip hop group from Leeds, UK',
  description: 'A dynamic & collaborative writing style has helped The Killer Limit achieve their unique sound which includes: interesting rhythms, unusual song structures, and, a sprinkling of hip hop.',
  url: 'https://thekillerlimit.uk',
  logoObject: `{
    "@type":"ImageObject",
    "url": "https://thekillerlimit.uk/assets/img/hero-bg.jpg",
    "width": "1334",
    "height": "2000"
  }`,
  imageObject: `{
    "@type":"ImageObject",
    "url": "https://thekillerlimit.uk/assets/img/hero-bg.jpg",
    "width": "1334",
    "height": "2000"
  }`,
  image: `https://thekillerlimit.uk/assets/img/hero-bg.jpg`,
  sameAs: JSON.stringify(sameAs),
}

export const helmetMeta = [
  {name: "description", content: staticMeta.description},
  {property: "og:title", content: staticMeta.title},
  {property: "og:description", content: staticMeta.description},
  {property: "og:image", content: staticMeta.image},
  {property: "og:type", content: "website"},
  {property: "og:site_name", content: staticMeta.name},
  {property: "og:url", content: staticMeta.url},
  {property: "twitter:card", content: 'summary_large_image'},
  {property: "twitter:title", content: staticMeta.title},
  {property: "twitter:description", content: staticMeta.description},
  {property: "twitter:image", content: staticMeta.image},
  {property: "twitter:site", content: '@thekillerlimit'},
  {property: "twitter:creator", content: '@thekillerlimit'},
  {property: "twitter:url", content: staticMeta.url},
];

export const helmetScript = [
  [
    {type: "application/ld+json", innerHTML: staticMeta.logoObject},
    {type: "application/ld+json", innerHTML: staticMeta.imageObject},
    {type: "application/ld+json", innerHTML: mapEvents(state.pastShows)},
    {type: "application/ld+json", innerHTML: `{
      "@context": "http://schema.org",
      "@type": "MusicGroup",
      "name": "${staticMeta.name}",
      "url": "${staticMeta.url}",
      "email": "thekillerlimit@gmail.com",
      "member": [
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Tiph"
          },
          "startDate": "2015",
          "roleName": ["rapping", "vocals"]
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "CJ"
          },
          "startDate": "2020",
          "roleName": ["lead vocals"]
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Mark Rinder"
          },
          "startDate": "2015",
          "roleName": ["guitar", "backing vocals"]
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Liam Sullivan"
          },
          "startDate": "2015",
          "roleName": ["drums"]
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Matthew Hickey"
          },
          "startDate": "2015",
          "roleName": ["synthesizers", "piano"]
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Joe Pagan"
          },
          "startDate": "2015",
          "roleName": ["bass", "backing vocals"]
        }
      ],
      "numberOfEmployees": "6",
      "sameAs": ${staticMeta.sameAs},
      "foundingLocation": {
        "@context": "http://schema.org/",
        "@type": "Place",
        "address": "Leeds, GB"
      },
      "image": ${staticMeta.imageObject},
      "logo": ${staticMeta.logoObject},
      "genre": [
        "Rap",
        "Rock",
        "Hip Hop",
        "Rap Rock"
      ],
      "areaServed": "GB"
    }`}
  ]
];


