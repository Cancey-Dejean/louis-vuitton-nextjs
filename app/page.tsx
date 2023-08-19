import VideoBanner from "@/components/VideoBanner"

export default function Home() {
  return (
    <main className="">
      <VideoBanner
        primary
        imgOption="image"
        title="Louis Vuitton Blossom"
        imageSrc="/images/jewelry_blossom.webp"
        buttons={[
          { url: "#", label: "Discover the Collection" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        imgOption="video"
        title="LV by the Pool"
        videoSrc="/videos/video2.mp4"
        buttons={[
          { url: "#", label: "Discover the Collection" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        imgOption="video"
        title="Taurillon Monogram and Monogram Macassar"
        videoSrc="/videos/video3.mp4"
        buttons={[{ url: "#", label: "Explore the Collection" }]}
      />

      <VideoBanner
        imgOption="video"
        title="The Capucines"
        videoSrc="/videos/video4.mp4"
        buttons={[{ url: "#", label: "Discover the Bag" }]}
      />

      <VideoBanner
        imgOption="video"
        title="Tambour"
        videoSrc="/videos/video5.mp4"
        buttons={[
          { url: "#", label: "Explore the Collection" },
          { url: "#", label: "Discover the Campaign" },
        ]}
      />

      <VideoBanner
        imgOption="video"
        title="Idylle Blossom"
        videoSrc="/videos/video6.mp4"
        buttons={[
          { url: "#", label: "Discover the Collection" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        imgOption="image"
        title="Pacific Chill"
        imageSrc="/images/fragrances.webp"
        buttons={[
          { url: "#", label: "Shop the Fragrance" },
          { url: "#", label: "Explore the Campaign" },
        ]}
      />

      <VideoBanner
        imgOption="image"
        title="LV Academy"
        imageSrc="/images/academy.jpeg"
        buttons={[{ url: "#", label: "Discover the Collection" }]}
      />
    </main>
  )
}
