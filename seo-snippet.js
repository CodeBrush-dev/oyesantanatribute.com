// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.oyesantanatribute.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.oyesantanatribute.com/","title_tag":"Oye Santana tribute & Santana classics | Oye Santana","meta_description":"Oye Santana tribute band celebrating Carlos Santana music and Santana classics with high-energy Latin rock band shows and live music performances across the UK."},{"page_url":"https://www.oyesantanatribute.com/the-band-1","title_tag":"Santana guitarist & Latin rock band | Oye Santana","meta_description":"Meet the Oye Santana tribute band musicians, including signature Santana guitarist Milan Webb, delivering authentic Carlos Santana music with Latin dance rhythm."},{"page_url":"https://www.oyesantanatribute.com/listen","title_tag":"Oye Santana tribute music & Santana classics | Listen","meta_description":"Listen to Oye Santana tribute recordings of Carlos Santana music and Santana classics. Enjoy our Latin rock band sound and buy CDs at our live music performances."},{"page_url":"https://www.oyesantanatribute.com/gallery-1","title_tag":"Live music performances & Latin rock band | Gallery","meta_description":"View Oye Santana tribute live music performances in our gallery. Experience the energy, Latin dance rhythm and celebration of Santana classics on stage."},{"page_url":"https://www.oyesantanatribute.com/copy-of-gallery","title_tag":"Music tribute band press kit | Oye Santana","meta_description":"Download the Oye Santana tribute to Santana press kit. Discover our Latin rock band, live music performances, Santana guitarist profile and show information."},{"page_url":"https://www.oyesantanatribute.com/videos","title_tag":"Oye Santana tribute live music performances | Videos","meta_description":"Watch Oye Santana tribute videos featuring Carlos Santana music, Santana classics and Latin dance rhythm from our live music performances and shows."},{"page_url":"https://www.oyesantanatribute.com/tour-dates","title_tag":"Oye Santana live music performances | Tour dates","meta_description":"See Oye Santana tribute tour dates and book tickets for live music performances celebrating Carlos Santana music and Santana classics with a vibrant Latin rock band."},{"page_url":"https://www.oyesantanatribute.com/contact","title_tag":"Book Oye Santana tribute to Santana | Contact","meta_description":"Contact Oye Santana tribute band for bookings and enquiries. Hire a Latin rock band performing Carlos Santana music, Santana classics and vibrant live shows."},{"page_url":"https://www.oyesantanatribute.com/copy-of-the-band","title_tag":"Oye Santana tribute to Santana | Privacy & terms","meta_description":"Read privacy policy and terms for Oye Santana tribute to Santana music tribute band and Latin rock band website, mailing list and booking information."}],"keywords":["Oye Santana tribute","Carlos Santana music","Latin rock band","Santana classics","Live music performances","Music tribute band","Latin dance rhythm","Celebrate Santana","Tribute to Santana","Santana guitarist"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://www.oyesantanatribute.com/#musicgroup",
  "name": "Oye Santana",
  "url": "https://www.oyesantanatribute.com/",
  "description": "Oye Santana are a tribute band celebrating the music of iconic Latin rock legend Carlos Santana, delivering over two hours of powerful, authentic performances of Santana classics including Smooth, Maria Maria, Black Magic Woman, Samba Pa Ti and more, from Woodstock to the Grammy award winning Supernatural.",
  "genre": [
    "Latin rock",
    "Tribute band"
  ],
  "sameAs": [],
  "image": [
    "https://static.wixstatic.com/media/07bb8a_eafb9c3502c347afb2798d8185e52723~mv2.jpg/v1/crop/x_0,y_171,w_12000,h_7573/fill/w_983,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oye%20santana%2C%20santana%2C%20Carlos%20santana%2C%20santana%20tribute%20band%2C%20latin%20rock%20music.jpg",
    "https://static.wixstatic.com/media/07bb8a_63624e5b397f4c4d988309375cc0abf0~mv2.png/v1/crop/x_0,y_22,w_1668,h_659/fill/w_459,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oye%20santana%2C%20santana%2C%20Carlos%20santana%2C%20santana%20tribute%20band%2C%20latin%20rock%20music_edited.png",
    "https://static.wixstatic.com/media/07bb8a_0710018e3b6a4403afa1aac9687b8466~mv2.png/v1/fill/w_233,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NTMA-Winner-Logo-482.png"
  ],
  "member": [
    {
      "@type": "Person",
      "name": "Milan Webb",
      "jobTitle": "Guitars, Vocals, Percussion"
    },
    {
      "@type": "Person",
      "name": "Hector Gomez",
      "jobTitle": "Vocals"
    },
    {
      "@type": "Person",
      "name": "Auriol Langbridge",
      "jobTitle": "Vocals"
    },
    {
      "@type": "Person",
      "name": "Pete Lockwood",
      "jobTitle": "Drums"
    },
    {
      "@type": "Person",
      "name": "Paul Murphy",
      "jobTitle": "Percussion"
    },
    {
      "@type": "Person",
      "name": "Jon Quirk",
      "jobTitle": "Bass"
    },
    {
      "@type": "Person",
      "name": "Martin Lawrie",
      "jobTitle": "Keyboards"
    }
  ],
  "event": [
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Ropetackle Arts Centre",
      "startDate": "2026-03-21",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute to the music of Carlos Santana at The Ropetackle Arts Centre.",
      "location": {
        "@type": "Place",
        "name": "The Ropetackle Arts Centre"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates",
        "availability": "https://schema.org/LimitedAvailability"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at De Bosuil, Weert",
      "startDate": "2026-04-25",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute to the music of Carlos Santana at De Bosuil, Weert, NL.",
      "location": {
        "@type": "Place",
        "name": "De Bosuil",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Weert",
          "addressCountry": "NL"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana & Clapton at The Brook Southampton",
      "startDate": "2026-06-13",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform Santana & Clapton music live at The Brook Southampton.",
      "location": {
        "@type": "Place",
        "name": "The Brook Southampton"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Wilde Theatre, South Hill Park, Bracknell",
      "startDate": "2026-06-19",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at The Wilde Theatre, South Hill Park, Bracknell.",
      "location": {
        "@type": "Place",
        "name": "The Wilde Theatre, South Hill Park",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bracknell"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at Pizza Express LIVE Holborn",
      "startDate": "2026-06-21",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at Pizza Express LIVE Holborn.",
      "location": {
        "@type": "Place",
        "name": "Pizza Express LIVE Holborn"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Beaverwood Chislehurst",
      "startDate": "2026-07-03",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at The Beaverwood Chislehurst.",
      "location": {
        "@type": "Place",
        "name": "The Beaverwood",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chislehurst"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Acapela Club, Cardiff",
      "startDate": "2026-07-17",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at The Acapela Club, Cardiff.",
      "location": {
        "@type": "Place",
        "name": "The Acapela Club",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cardiff"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at Huntingdon Hall, Worcester",
      "startDate": "2026-07-18",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at Huntingdon Hall, Worcester.",
      "location": {
        "@type": "Place",
        "name": "Huntingdon Hall",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Worcester"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at All Saints Church, Wokingham Music Club",
      "startDate": "2026-10-02",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at All Saints Church, Wokingham Music Club.",
      "location": {
        "@type": "Place",
        "name": "All Saints Church, Wokingham Music Club"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at Trading Boundaries",
      "startDate": "2026-10-23",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at Trading Boundaries.",
      "location": {
        "@type": "Place",
        "name": "Trading Boundaries"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at Trading Boundaries",
      "startDate": "2026-10-24",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at Trading Boundaries.",
      "location": {
        "@type": "Place",
        "name": "Trading Boundaries"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Earl Haig, Cardiff",
      "startDate": "2026-11-06",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at The Earl Haig, Cardiff.",
      "location": {
        "@type": "Place",
        "name": "The Earl Haig",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cardiff"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at The Hub at Hampton",
      "startDate": "2026-11-27",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at The Hub at Hampton.",
      "location": {
        "@type": "Place",
        "name": "The Hub at Hampton"
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    },
    {
      "@type": "Event",
      "name": "Oye Santana Live at Chapel Arts, Bath",
      "startDate": "2026-12-12",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "description": "Oye Santana perform their live tribute at Chapel Arts, Bath.",
      "location": {
        "@type": "Place",
        "name": "Chapel Arts",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bath"
        }
      },
      "performer": {
        "@id": "https://www.oyesantanatribute.com/#musicgroup"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.oyesantanatribute.com/tour-dates"
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Close your eyes and you can’t tell the difference",
      "author": {
        "@type": "Person",
        "name": "Andy Percy"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Santana’s legacy in the best possible hands",
      "author": {
        "@type": "Person",
        "name": "Pete Feenstra"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Oye Santana not only raised the roof, they raised the bar for all future bands that follow them at this iconic venue",
      "author": {
        "@type": "Person",
        "name": "Paul Endacott"
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
