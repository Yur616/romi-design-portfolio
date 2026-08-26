import type { Metadata } from "next";
import { PortfolioExperience } from "../portfolio-experience";

export const metadata: Metadata = {
  title: "Твоё имя — визуальный дизайнер",
  description:
    "Портфолио визуального дизайнера: айдентика, digital и арт-дирекшн.",
};

export default function PortfolioPage() {
  return <PortfolioExperience />;
}
