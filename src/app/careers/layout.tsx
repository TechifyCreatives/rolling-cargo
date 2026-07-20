import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the Rolling Cargo team. Explore open roles in logistics, operations, customs clearance and customer service across our Kenyan and international offices.",
  path: "/careers",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
