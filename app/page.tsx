import Services from "@/components/Services"
import VideoBanner from "@/components/VideoBanner"

export default function Home() {
  return (
    <main className="">
      <VideoBanner
        primary
        headingElement="h1"
        imgOption="image"
        title="Louis Vuitton Blossom"
        imageSrc="/images/jewelry_blossom.webp"
        buttons={[
          { url: "#", label: "Discover the Collection" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="video"
        title="LV by the Pool"
        videoSrc="/videos/video2.mp4"
        buttons={[
          { url: "#", label: "Discover the Collection" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="video"
        title="Taurillon Monogram and Monogram Macassar"
        videoSrc="/videos/video3.mp4"
        buttons={[{ url: "#", label: "Explore the Collection" }]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="video"
        title="The Capucines"
        videoSrc="/videos/video4.mp4"
        buttons={[{ url: "#", label: "Discover the Bag" }]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="video"
        title="Tambour"
        videoSrc="/videos/video5.mp4"
        buttons={[
          { url: "#", label: "Explore the Collection" },
          { url: "#", label: "Discover the Campaign" },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="video"
        title="Silver Lockit"
        videoSrc="/videos/video7.mp4"
        buttons={[
          { url: "#", label: "Explore the Collection" },
          { url: "#", label: "Discover the Campaign" },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="image"
        title="Pacific Chill"
        imageSrc="/images/fragrances.webp"
        buttons={[
          { url: "#", label: "Shop the Fragrance" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        imgOption="image"
        title="LV Academy"
        imageSrc="/images/academy.jpeg"
        buttons={[{ url: "#", label: "Discover the Collection" }]}
      />

      <Services title="Services" />
    </main>
  )
}
