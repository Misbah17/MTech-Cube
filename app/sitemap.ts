import { MetadataRoute } from "next";
import { services, caseStudies } from "@/lib/data";

const BASE_URL = "https://mtechcube.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/contact"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${BASE_URL}/work/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
