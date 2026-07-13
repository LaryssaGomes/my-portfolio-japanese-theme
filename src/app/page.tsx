import { SectionLake } from "@/components/background-section/backgorund-lake";
import { SectionSakura } from "@/components/background-section/backgorund-sakura";
import { MountainDivider } from "@/components/background-section/mountain-divider";
import { ExperienceTimeline } from "@/components/background-section/experience-timeline";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Main } from "@/components/main/main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <SectionLake />
      <MountainDivider />
      <ExperienceTimeline />
      <SectionSakura />
      <Footer />
    </>
  );
}
