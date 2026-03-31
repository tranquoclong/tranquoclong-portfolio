import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | tranquoclong",
  description:
    "Learn more about tranquoclong - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "tranquoclong",
    "About tranquoclong",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | tranquoclong",
    description:
      "Discover the story and journey of tranquoclong in the world of web development.",
    url: "https://tranquoclong.id.vn/about",
    siteName: "tranquoclong",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://tranquoclong.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "tranquoclong About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | tranquoclong",
    description:
      "Learn more about tranquoclong - Frontend Developer and tech enthusiast.",
    // images: ["https://tranquoclong.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://tranquoclong.id.vn/about",
  },
};

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
