import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minh Quang Bui — Mechatronics Engineering Portfolio" },
      { name: "description", content: "Portfolio of Minh Quang Bui — Mechatronics Engineering student specializing in automotive safety, manufacturing, 3D printing, CAD/CAM, and robotics." },
      { property: "og:title", content: "Minh Quang Bui — Mechatronics Portfolio" },
      { property: "og:description", content: "Hands-on Mechatronics Engineering student. Automotive • Manufacturing • 3D Printing • CAD/CAM." },
    ],
  }),
  component: Portfolio,
});
