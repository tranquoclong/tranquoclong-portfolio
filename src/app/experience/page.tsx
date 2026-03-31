import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | tranquoclong",
  description:
    "Explore the professional journey of tranquoclong - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | tranquoclong",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://tranquoclong.id.vn/experience",
    siteName: "tranquoclong",
    images: [
      // {
      //   url: "https://tranquoclong.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "tranquoclong Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | tranquoclong",
    description:
      "Check out tranquoclong's past work and achievements in frontend development.",
    //   images: ["https://tranquoclong.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://tranquoclong.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
