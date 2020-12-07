const getEndDate = (datetime) => {
  const date = new Date(datetime);
  date.setHours(date.getHours()+5);
  return date;
}

export function mapEvents(events) {
  return JSON.stringify(
    events.map(event => {
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: `The Killer Limit at ${event.venue}, ${event.city}, ${event.country}`,
        startDate: event.datetime,
        endDate: getEndDate(event.datetime).toISOString(),
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: event.venue,
          address: {
            "@type": "PostalAddress",
            streetAddress: "100 West Snickerpark Dr",
            addressLocality: event.city,
            postalCode: "19019",
            addressRegion: "PA",
            addressCountry: event.country
          }
        },
        // image: [
        //   "https://example.com/photos/1x1/photo.jpg",
        //   "https://example.com/photos/4x3/photo.jpg",
        //   "https://example.com/photos/16x9/photo.jpg"
        // ],
        description: `The Killer Limit is coming to ${event.city} in a can’t miss performance.`,
        offers: {
          "@type": "Offer",
          url: "https://www.example.com/event_offer/12345_201803180430",
          price: "30",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2024-05-21T12:00",
        },
        performer: {
          "@type": "PerformingGroup",
          name: "The Killer Limit",
        },
        organizer: {
          "@type": "Organization",
          name: "The Killer Limit",
          url: "https://thekillerlimit.uk",
        }
      };
    })
  );
}
