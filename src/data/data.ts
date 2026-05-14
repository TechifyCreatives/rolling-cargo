import {
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  DollarSign,
  FileText,
  HelpCircle,
  Home,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Plane,
  Search,
  Settings,
  Shield,
  Ship,
  Truck,
  Users,
} from "lucide-react";
import { GalleryItem, Category } from "../types/gallery.types";
import { AboutContent, AboutQuote } from "@/types/about.types";
import { NotFoundContent } from "@/types/not-found.types";
import { AirCargoContent } from "@/types/air-cargo-text.types";
import { AppDownloadContent } from "@/types/app-download.types";
import { BannerContent } from "@/types/banner.types";
import { Job } from "@/types/carreers.types";
import { BlogPost } from "@/types/blog.types";
import { Office } from "@/types/contact.types";
import { CustomClearanceContent } from "@/types/customs.types";
import { FAQItem } from "@/types/faq.types";
import { Country } from "@/types/footer.types";
import { SolutionItem } from "@/types/solution.types";
import { Handshake, Wallet } from "lucide-react";

// Configuration
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

// Navigation data
export const NAVIGATION_LINKS = {
  services: [
    { name: "About Us", href: "/about-us", icon: Building2 },
    { name: "Our Services", href: "/our-services", icon: Truck },
    { name: "Air Cargo", href: "/air-cargo", icon: Plane },
    { name: "Sea Cargo", href: "/sea-cargo", icon: Ship },
    { name: "Online Shopping", href: "/online-shopping", icon: Package },
    { name: "Custom Clearance", href: "/custom-clearance", icon: Shield },
    { name: "Gallery", href: "/gallery", icon: Camera },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
  ],
  quickLinks: [
    { name: "Track Shipment", href: "/tracking", icon: Search },
    { name: "Cost Estimator", href: "/cost-estimator", icon: DollarSign },
    { name: "Updates", href: "/blog", icon: Bell },
    { name: "Gallery", href: "/gallery", icon: Camera },
  ],
  company: [
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Feedback", href: "/feedback", icon: MessageSquare },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Us", href: "/contact-us", icon: Phone },
    { name: "Terms & Conditions", href: "/terms-&-conditions", icon: FileText },
    { name: "Privacy Policy", href: "/privacy", icon: Shield },
  ],
} as const;

// Gallery data
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Air Cargo Operations",
    description:
      "Modern air freight handling at international airport with state-of-the-art equipment and efficient logistics management systems.",
    category: "air-cargo",
    tags: ["logistics", "aviation", "cargo"],
    image: "/RC Jan-14.jpg",
    date: "2024-01-15",
    views: 1247,
    likes: 89,
    type: "image",
  },
  {
    id: 2,
    title: "Container Ship Loading",
    description:
      "Massive container ship being loaded at port with state-of-the-art equipment and efficient logistics management systems.",
    category: "sea-cargo",
    tags: ["shipping", "containers", "port"],
    image: "/RC Jan-13.jpg",
    date: "2024-01-20",
    views: 892,
    likes: 67,
    type: "image",
  },
  {
    id: 3,
    title: "Warehouse Operations",
    description:
      "State-of-the-art warehouse management system with efficient storage and automation.",
    category: "warehouse",
    tags: ["storage", "automation", "efficiency"],
    image: "/RC Jan-21.jpg",
    date: "2024-01-25",
    views: 654,
    likes: 45,
    type: "image",
  },
  {
    id: 4,
    title: "Logistics Management",
    description:
      "Advanced logistics management system with real-time tracking and efficient routing.",
    category: "logistics",
    tags: ["tracking", "routing", "efficiency"],
    image: "/RC Jan-17.jpg",
    date: "2024-02-01",
    views: 321,
    likes: 23,
    type: "image",
  },
  {
    id: 5,
    title: "Aviation Safety",
    description:
      "State-of-the-art aviation safety systems and protocols in action.",
    category: "aviation",
    tags: ["safety", "protocols", "aviation"],
    image: "/RC Jan-83.jpg",
    date: "2024-02-05",
    views: 456,
    likes: 34,
    type: "image",
  },
  {
    id: 6,
    title: "Global Network",
    description:
      "Worldwide logistics network visualization with real-time tracking and efficient routing.",
    category: "network",
    tags: ["global", "connectivity", "routes"],
    image: "/RC Jan-69.jpg",
    date: "2024-02-10",
    views: 1345,
    likes: 112,
    type: "image",
  },
  {
    id: 7,
    title: "Routing Optimization",
    description:
      "Advanced routing optimization algorithms for efficient route planning.",
    category: "routing",
    tags: ["optimization", "routing", "efficiency"],
    image: "/RC Jan-71.jpg",
    date: "2024-02-15",
    views: 765,
    likes: 56,
    type: "image",
  },
  {
    id: 8,
    title: "Safety Protocols",
    description:
      "Implementation of safety protocols in logistics operations for secure transportation.",
    category: "safety",
    tags: ["safety", "protocols", "logistics"],
    image: "/RC Jan-18.jpg",
    date: "2024-02-20",
    views: 543,
    likes: 39,
    type: "image",
  },
  {
    id: 9,
    title: "Cargo Handling",
    description:
      "Efficient cargo handling systems with advanced technology and automation.",
    category: "cargo",
    tags: ["handling", "automation", "technology"],
    image: "/RC Jan-37.jpg",
    date: "2024-02-25",
    views: 678,
    likes: 48,
    type: "image",
  },
  {
    id: 10,
    title: "Port Operations",
    description:
      "State-of-the-art port operations with efficient loading and unloading systems.",
    category: "port",
    tags: ["port", "operations", "efficiency"],
    image: "/RC Jan-40.jpg",
    date: "2024-03-01",
    views: 890,
    likes: 67,
    type: "image",
  },
  {
    id: 11,
    title: "Container Logistics",
    description:
      "Advanced container logistics systems with real-time tracking and efficient routing.",
    category: "containers",
    tags: ["containers", "logistics", "tracking"],
    image: "/RC Jan-53.jpg",
    date: "2024-03-05",
    views: 432,
    likes: 29,
    type: "image",
  },
  {
    id: 12,
    title: "Automation in Logistics",
    description:
      "Implementation of automation technologies in logistics operations for improved efficiency.",
    category: "automation",
    tags: ["automation", "efficiency", "logistics"],
    image: "/RC Jan-57.jpg",
    date: "2024-03-10",
    views: 567,
    likes: 38,
    type: "image",
  },
  {
    id: 13,
    title: "Tracking Systems",
    description:
      "Real-time tracking systems for efficient logistics management and cargo monitoring.",
    category: "tracking",
    tags: ["tracking", "logistics", "monitoring"],
    image: "/RC Jan-59.jpg",
    date: "2024-03-15",
    views: 789,
    likes: 45,
    type: "image",
  },
  {
    id: 14,
    title: "Shipping Efficiency",
    description:
      "Strategies for improving shipping efficiency and reducing costs in logistics operations.",
    category: "efficiency",
    tags: ["shipping", "efficiency", "cost-reduction"],
    image: "/RC Jan-62.jpg",
    date: "2024-03-20",
    views: 890,
    likes: 56,
    type: "image",
  },
  {
    id: 15,
    title: "Logistics Solutions",
    description:
      "Comprehensive logistics solutions for businesses with a focus on efficiency and reliability.",
    category: "solutions",
    tags: ["logistics", "solutions", "business"],
    image: "/RC Jan-65.jpg",
    date: "2024-03-25",
    views: 1023,
    likes: 78,
    type: "image",
  },
  {
    id: 16,
    title: "Global Shipping Network",
    description:
      "Visualization of a global shipping network with real-time tracking and efficient routing.",
    category: "network",
    tags: ["global", "shipping", "network"],
    image: "/RC Jan-72.jpg",
    date: "2024-03-30",
    views: 1345,
    likes: 89,
    type: "image",
  },
  {
    id: 17,
    title: "Cargo Safety Measures",
    description:
      "Implementation of safety measures in cargo handling and transportation for secure logistics.",
    category: "safety",
    tags: ["safety", "cargo", "logistics"],
    image: "/RC Jan-83.jpg",
    date: "2024-04-05",
    views: 456,
    likes: 34,
    type: "image",
  },
  {
    id: 18,
    title: "Efficient Routing Systems",
    description:
      "Advanced routing systems for efficient logistics management and cargo transportation.",
    category: "routing",
    tags: ["routing", "efficiency", "logistics"],
    image: "/RC Jan-86.jpg",
    date: "2024-04-10",
    views: 678,
    likes: 45,
    type: "image",
  },
  {
    id: 19,
    title: "Cargo Handling Equipment",
    description:
      "State-of-the-art cargo handling equipment for efficient logistics operations.",
    category: "cargo",
    tags: ["handling", "equipment", "logistics"],
    image: "/RC Jan-96.jpg",
    date: "2024-04-15",
    views: 890,
    likes: 67,
    type: "image",
  },
  {
    id: 20,
    title: "Port Logistics",
    description:
      "Efficient port logistics systems with advanced technology and automation.",
    category: "port",
    tags: ["port", "logistics", "automation"],
    image: "/RC Jan-101.jpg",
    date: "2024-04-20",
    views: 432,
    likes: 29,
    type: "image",
  },
  {
    id: 21,
    title: "Drone Overview of Logistics Center",
    description:
      "Aerial drone footage showing operations inside a modern logistics center.",
    category: "logistics",
    tags: ["drone", "aerial", "logistics"],
    video: "https://www.youtube.com/watch?v=v18Lv-fg2g4",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    date: "2024-04-25",
    views: 789,
    likes: 56,
    type: "video",
  },
  {
    id: 22,
    title: "Cargo Ship Timelapse",
    description: "Timelapse of cargo ship loading at night under floodlights.",
    category: "shipping",
    tags: ["ship", "night", "cargo"],
    video: "https://www.youtube.com/watch?v=gB6QhVuuQ9U",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    date: "2024-04-26",
    views: 987,
    likes: 65,
    type: "video",
  },
  {
    id: 23,
    title: "Warehouse Automation Demo",
    description:
      "Video demonstration of automated warehouse systems in action.",
    category: "automation",
    tags: ["robotics", "automation", "warehouses"],
    video: "https://www.youtube.com/watch?v=WpjT6ZMTJC4",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    date: "2024-04-27",
    views: 654,
    likes: 43,
    type: "video",
  },
];

// Categories data(Gallery)
export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "All Categories",
    count: GALLERY_ITEMS.length,
  },
  {
    id: "air-cargo",
    name: "Air Cargo",
    count: GALLERY_ITEMS.filter((item) => item.category === "air-cargo").length,
  },
  {
    id: "sea-cargo",
    name: "Sea Cargo",
    count: GALLERY_ITEMS.filter((item) => item.category === "sea-cargo").length,
  },
  {
    id: "warehouse",
    name: "Warehouse",
    count: GALLERY_ITEMS.filter((item) => item.category === "warehouse").length,
  },
  {
    id: "cargo",
    name: "Cargo",
    count: GALLERY_ITEMS.filter((item) => item.category === "cargo").length,
  },
  {
    id: "logistics",
    name: "Logistics",
    count: GALLERY_ITEMS.filter((item) => item.category === "logistics").length,
  },
  {
    id: "aviation",
    name: "Aviation",
    count: GALLERY_ITEMS.filter((item) => item.category === "aviation").length,
  },
  {
    id: "shipping",
    name: "Shipping",
    count: GALLERY_ITEMS.filter((item) => item.category === "shipping").length,
  },
  {
    id: "containers",
    name: "Containers",
    count: GALLERY_ITEMS.filter((item) => item.category === "containers")
      .length,
  },
  {
    id: "port",
    name: "Port",
    count: GALLERY_ITEMS.filter((item) => item.category === "port").length,
  },
  {
    id: "storage",
    name: "Storage",
    count: GALLERY_ITEMS.filter((item) => item.category === "storage").length,
  },
  {
    id: "automation",
    name: "Automation",
    count: GALLERY_ITEMS.filter((item) => item.category === "automation")
      .length,
  },
  {
    id: "efficiency",
    name: "Efficiency",
    count: GALLERY_ITEMS.filter((item) => item.category === "efficiency")
      .length,
  },
  {
    id: "tracking",
    name: "Tracking",
    count: GALLERY_ITEMS.filter((item) => item.category === "tracking").length,
  },
  {
    id: "routing",
    name: "Routing",
    count: GALLERY_ITEMS.filter((item) => item.category === "routing").length,
  },
  {
    id: "safety",
    name: "Safety",
    count: GALLERY_ITEMS.filter((item) => item.category === "safety").length,
  },
  {
    id: "protocols",
    name: "Protocols",
    count: GALLERY_ITEMS.filter((item) => item.category === "protocols").length,
  },
];

// Dashboard data
export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 45000, shipments: 120 },
  { month: "Feb", revenue: 52000, shipments: 135 },
  { month: "Mar", revenue: 48000, shipments: 128 },
  { month: "Apr", revenue: 61000, shipments: 165 },
  { month: "May", revenue: 55000, shipments: 142 },
  { month: "Jun", revenue: 67000, shipments: 178 },
];

// Shipment status data
export const shipmentStatusData: ShipmentStatusData[] = [
  { name: "Delivered", value: 342, color: "hsl(142, 76%, 36%)" },
  { name: "In Transit", value: 125, color: "hsl(221, 83%, 53%)" },
  { name: "Pending", value: 43, color: "hsl(48, 96%, 53%)" },
  { name: "Delayed", value: 18, color: "hsl(0, 84%, 60%)" },
];

// Recent shipments data
export const recentShipments: RecentShipment[] = [
  {
    id: "RC001",
    client: "Safaricom Ltd",
    route: "Nairobi → Mombasa",
    status: "delivered",
    amount: 15000,
  },
  {
    id: "RC002",
    client: "KCB Bank",
    route: "Mombasa → Kisumu",
    status: "transit",
    amount: 22000,
  },
  {
    id: "RC003",
    client: "Equity Bank",
    route: "Nairobi → Eldoret",
    status: "pending",
    amount: 18500,
  },
  {
    id: "RC004",
    client: "East African Breweries",
    route: "Mombasa → Nairobi",
    status: "delivered",
    amount: 31000,
  },
];

export const stats: StatCardData[] = [
  {
    title: "Total Revenue",
    value: "KSh 2.8M",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-gradient-to-r from-green-500 to-green-600",
    hoverColor: "hover:bg-green-600",
    description: "View detailed revenue reports",
  },
  {
    title: "Active Shipments",
    value: "168",
    change: "+8.2%",
    changeType: "positive",
    icon: Package,
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    hoverColor: "hover:bg-blue-600",
    description: "Create a new shipment order quickly",
  },
  {
    title: "Fleet Utilization",
    value: "94%",
    change: "+5.1%",
    changeType: "positive",
    icon: Truck,
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    hoverColor: "hover:bg-green-600",
    description: "Monitor fleet performance and maintenance",
  },
  {
    title: "Active Clients",
    description: "Manage client relationships",
    value: "342",
    change: "+18.7%",
    changeType: "positive",
    icon: Users,
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    hoverColor: "hover:bg-purple-600",
  },
];

// Sidebar menu items
export const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/admin" },
  {
    id: "shipments",
    label: "Shipments",
    icon: Package,
    href: "/admin/shipments",
  },
  {
    id: "fleet",
    label: "Fleet Management",
    icon: Truck,
    href: "/admin/fleet",
  },
  { id: "clients", label: "Clients", icon: Users, href: "/admin/clients" },
  { id: "routes", label: "Routes", icon: MapPin, href: "/admin/routes" },
  { id: "reports", label: "Reports", icon: FileText, href: "/admin/reports" },
  {
    id: "schedule",
    label: "Schedule",
    icon: Calendar,
    href: "/admin/schedule",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

// Notifications data
export const notifications = [
  {
    id: 1,
    message: "New shipment RC005 has been created",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    message: "Fleet vehicle KCA 123A maintenance due",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    message: "Payment received from Safaricom Ltd",
    time: "3 hours ago",
    unread: false,
  },
];

//About Us data
export const aboutQuote: AboutQuote = {
  quoteText:
    "Our commitment to excellence in shipping sets us apart. We do not just deliver packages; we deliver peace of mind.",
  authorName: "Mohammed Abdi",
  authorTitle: "Executive Chairman and Founder.",
};

export const aboutContent: AboutContent = {
  title: "About Rolling Cargo | Trusted International Freight Forwarding in Kenya",
  description:
    "Rolling Cargo is a leading international freight forwarding company providing reliable\n" +
    "air and sea freight solutions for Kenyan businesses. For over 18 years, we have\n" +
    "partnered with companies to ensure smooth, efficient, and timely movement of\n" +
    "cargo across major global trade hubs.\n\n" +
    "Our Company\n" +
    "Founded to address the operational challenges businesses face with shipping delays,\n" +
    "inconsistent service, and unclear communication, Rolling Cargo has grown into a fully\n" +
    "integrated logistics provider.\n" +
    "Our operations are managed by a team of logistics professionals trained to support\n" +
    "business clients at every stage of the shipping process. This includes an in-house\n" +
    "clearance team to ensure smooth and compliant customs processing, a highly skilled\n" +
    "warehouse team for secure cargo handling, a centralized Call Centre for real-time\n" +
    "updates and seamless communication, a dedicated Sales Team to manage\n" +
    "quotations and shipment planning, and a Customer Service Team to provide support\n" +
    "during cargo collection.\n" +
    "By combining expertise, structured processes, and proactive communication, Rolling\n" +
    "Cargo ensures that businesses experience reliable, efficient, and risk-managed\n" +
    "freight operations giving you confidence that your shipments will arrive on time, in\n" +
    "full, and compliant with all regulatory requirements.\n\n" +
    "Our Freight Services\n" +
    "We offer tailored shipping services to meet business needs:\n" +
    "Air Freight – Fast, secure shipping for time-sensitive cargo\n" +
    "Sea Freight – Cost-effective solutions for bulk shipments\n" +
    "Rolling Cargo facilitates imports from key sourcing destinations, including:\n" +
    "China, United Arab Emirates, United Kingdom, Turkey, Netherlands, South Africa, Italy.\n\n" +
    "Why Businesses Trust Rolling Cargo\n" +
    "Rolling Cargo is more than a logistics provider, we are a strategic partner for\n" +
    "businesses that value reliability, transparency, and efficiency. Our structured\n" +
    "processes and professional teams manage shipments from origin to destination,\n" +
    "ensuring accurate tracking, proactive communication, and timely delivery.\n" +
    "See how we've helped businesses just like yours. Watch our client success stories on\n" +
    "YouTube.\n" +
    "With Rolling Cargo, companies can confidently expand their trade operations\n" +
    "knowing their cargo is in the hands of experienced logistics professionals who\n" +
    "understand the demands of modern business.",
};

// Not Found page data
export const notFoundContent: NotFoundContent = {
  heading: "404",
  subheading: "Page Not Found",
  description:
    "Oops! The page you are looking for does not exist or has been moved.",
  ctaText: "Return to Home",
};

// Air Cargo text data
export const airCargoContent: AirCargoContent = {
  title: "Fast & Efficient.",
  description: `Air freight transport is the most reliable and efficient way to get your goods worldwide from one location to another. Rolling Cargo delivers fast, safe and sound air freight solutions. We have extensive and well-established partnerships with different industry players. This enables us to offer better and most competitive rates. We deliver using the shortest possible transit time with optimum routings that are cost efficient.
From the point of origin, to consolidation, customs clearance, all the way through to delivery to end customers, we've got your business and markets covered anywhere in the world. Through our secure cargo tracking service, customers are able to track their shipments and obtain real-time information regarding their freight anytime. We facilitate the handling, packing, customs, consolidation services and door-to-door deliveries.`,
};

// App download data
export const appDownloadContent: AppDownloadContent = {
  title: "Ship Smarter with Our Mobile App",
  description:
    "Track shipments, get real-time updates, and manage your deliveries on the go with our easy-to-use mobile app.",
  features: [
    "Real-time shipment tracking",
    "Instant notifications",
    "Easy booking and management",
    "24/7 customer support",
  ],
  ctaText: "App Coming Soon",
  ctaUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.app ",
};

// Banner data(About Us)
export const aboutUsBannerContent: BannerContent = {
  title: "About Us",
  breadcrumbs: [
    {
      label: "Homepage",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ],
};

// Banner data(Air Cargo)
export const airCargoBannerContent: BannerContent = {
  title: "Air Cargo",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Air Cargo", href: "/air-cargo" },
  ],
};

// Banner data(Sea Cargo)
export const seaCargoBannerContent: BannerContent = {
  title: "Sea Cargo",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Sea Cargo", href: "/sea-cargo" },
  ],
};

// Banner data(Apply)
export const applyBannerContent: BannerContent = {
  title: "Apply",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Apply", href: "/apply" },
  ],
};

// Banner data(Services)
export const servicesBannerContent: BannerContent = {
  title: "Services",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Services", href: "/services" },
  ],
};

// Banner data(Privacy Policy)
export const privacyPolicyBannerContent: BannerContent = {
  title: "Privacy Policy",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// Banner data(FAQ)
export const faqBannerContent: BannerContent = {
  title: "FAQ",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "FAQ", href: "/faq" },
  ],
};

// Banner data(Shipping)
export const shippingBannerContent: BannerContent = {
  title: "Shipping",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Shipping", href: "/shipping" },
  ],
};

// Banner data(Terms)
export const termsBannerContent: BannerContent = {
  title: "Terms & Conditions",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Terms & Conditions", href: "/terms-&-conditions" },
  ],
};

// Banner data(Tracking)
export const trackingBannerContent: BannerContent = {
  title: "Tracking",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Tracking", href: "/tracking" },
  ],
};

// Banner data(Blog)
export const blogBannerContent: BannerContent = {
  title: "Blog",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Blog", href: "/blog" },
  ],
};

// Banner Data (Feedback)
export const feedbackBannerContent: BannerContent = {
  title: "feedback",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Feedback", href: "/feedback" },
  ],
};

// Banner Data (Online Shopping)
export const onlineShoppingBannerContent: BannerContent = {
  title: "Online Shopping",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Online Shopping", href: "/online-shopping" },
  ],
};

// Banner (Cost Estimator)
export const costEstimatorBannerContent: BannerContent = {
  title: "Cost Estimator",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Cost Estimator", href: "/cost-estimator" },
  ],
};

// Banner (Contact)
export const contactBannerContent: BannerContent = {
  title: "Contact Us",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

// Banner data(Carrers)
export const careersBannerContent: BannerContent = {
  title: "Careers",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Careers", href: "/careers" },
  ],
};

// Banner Data (Custom Clearence)
export const customClearenceBannerContent: BannerContent = {
  title: "Custom Clearence",
  breadcrumbs: [
    { label: "Homepage", href: "/" },
    { label: "Customs Clearance", href: "/custom-clearence" },
  ],
};

// Jobs Data (Carrers Page)
export const availableJobs: Job[] = [
  {
    title: "Marketing Executive",
    description:
      "The Marketing Executive is responsible for planning, developing, and implementing marketing campaigns to promote the company's products and services.",
    responsibilities: [
      "Develop and implement marketing campaigns across various channels.",
      "Conduct market research to identify target audiences and trends.",
      "Create and manage content for digital and print platforms.",
      "Monitor campaign performance and adjust strategies as needed.",
      "Collaborate with sales team for alignment.",
      "Coordinate events, trade shows, and promotional activities.",
      "Prepare reports on marketing activities.",
      "Stay up-to-date with marketing trends and technologies.",
    ],
    skills: [
      "Creative thinking and problem-solving abilities.",
      "Strong organizational and project management skills.",
      "Ability to analyze data and derive actionable insights.",
      "High attention to detail.",
      "Adaptability in fast-paced environments.",
    ],
  },
  {
    title: "Sales Executive",
    description:
      "The Sales Executive is responsible for driving revenue growth by identifying clients, generating leads, and closing sales.",
    responsibilities: [
      "Identify and develop new business opportunities.",
      "Build and maintain relationships with clients.",
      "Conduct sales presentations and product demos.",
      "Negotiate and close deals ensuring satisfaction.",
      "Meet and exceed sales targets.",
      "Stay updated with industry trends and competitors.",
      "Collaborate with internal teams for seamless delivery.",
      "Submit regular sales reports and forecasts.",
    ],
    skills: [
      "Strong communication and interpersonal skills.",
      "Excellent customer service and relationship-building.",
      "Results-driven mindset with motivation to meet targets.",
      "Problem-solving and strategic thinking.",
      "Resilience in fast-paced sales environments.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dangerous Goods List & Items We Don't Ship",
    excerpt:
      "Important information about items that require declaration or cannot be shipped.",
    sections: [
      {
        title: "Must be Declared",
        content: [
          "Items or substances that may pose a health, safety, property or environmental risk and are listed or classified in accordance with the KCCA Technical Instructions as dangerous goods.",
        ],
      },
      {
        title: "Declarable Items Include",
        content: [
          "Air Compressor",
          "Nail Polish",
          "Perfumes",
          "Perfumes Raw Materials",
          "Aerosols",
          "Engine",
          "Car Batteries",
          "Car Airbag",
          "Dry Ice",
          "Items Having Magnet Inside (Example Speakers)",
          "Paints",
          "Thinner",
          "Sanitizer",
          "Glue & Other Adhesives",
          "Gas Cylinder & Items Contains Gas Inside (Compressed Gas)",
          "Fire Extinguisher",
          "Pesticides",
          "Bleach",
          "Fuel & Fuel Contain Equipment Or Machine (Petrol/Diesel Etc)",
          "Cleaning Liquids & Sprays",
          "Fertilizer",
          "Chemicals",
          "Lighter Fuel",
          "Poison",
          "Oxygen Generator",
          "Laundry Products",
          "Acid",
          "Electronic Cigarette",
          "Agriculture Chemicals",
          "Hair Tonic",
          "Alcoholic Substance",
          "Charcoal",
          "Smart Wheels (Hover Boards)",
        ],
      },
      {
        title: "Items We Do Not Ship",
        content: [
          "Cigarettes",
          "Phones",
          "Money",
          "Sex Toys",
          "Ammunition/Firearms",
          "Drug substances",
          "Shisha",
          "Lithium batteries",
          "Vapes",
          "and Accessories",
        ],
      },
    ],
    category: "Shipping Policy",
    image: "/Dangerous Goods List & Items We Don't Ship.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 2,
    title: "Efficient Cargo Shipping from the UK to Kenya",
    excerpt: "How Rolling Cargo Simplifies Your Logistics",
    sections: [
      {
        title: "Overview",
        content: [
          "When shipping cargo from the UK to Kenya, efficiency and reliability are key factors. At Rolling Cargo, we provide tailored air and sea freight solutions to ensure your goods arrive on time and in perfect condition. Whether it's small packages or large commercial shipments, we handle the complexities of customs clearance, documentation, and logistics.",
        ],
      },
      {
        title: "Why Choose Rolling Cargo for UK Shipments",
        content: [
          "Affordable sea freight from the UK to Kenya",
          "Fast air freight services with guaranteed delivery timelines",
          "Streamlined customs clearance to avoid delays",
          "Expert handling of fragile and high-value goods",
        ],
      },
    ],
    category: "Shipping News",
    image: "/UKTOKENYA.png",
    author: "Rolling Cargo",
  },
  {
    id: 3,
    title: "Dubai Time Change",
    excerpt: "Stay informed about our Dubai Time Change",
    sections: [
      {
        title: "New Operating Hours",
        content: [
          "Monday to Thursday & Saturday: 8am-10:30pm",
          "Friday: 8am-12pm, open 2pm-10:30pm",
          "Sunday: Closed",
        ],
      },
      {
        title: "Important Notice",
        content: [
          "Our Dubai branch operates 6 days a week as per Dubai time change",
          "These changes align with the newly announced weekend schedule",
        ],
      },
    ],
    category: "Shipping News",
    image: "/Dubai Time Change.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 4,
    title: "Affordable Sea Freight from Turkey",
    excerpt: "The Key to Successful Kenyan Imports",
    sections: [
      {
        title: "Our Services",
        content: [
          "With Turkey becoming a leading hub for manufacturing, businesses in Kenya are increasingly sourcing products from Turkish suppliers. Rolling Cargo provides cost-effective sea freight solutions, ensuring safe, timely, and affordable transport of your goods from Turkey to Kenya. Our comprehensive service covers everything from pick-up to customs clearance, giving you peace of mind.",
        ],
      },
      {
        title: "Benefits of Using Rolling Cargo for Turkish Imports",
        content: [
          "Competitive sea freight rates from Turkey",
          "Efficient handling of bulk cargo and large volumes",
          "Secure warehousing options in Turkey",
          "Streamlined customs and clearance processes",
          "Dedicated account managers for personalised support",
        ],
      },
    ],
    category: "Shipping News",
    image: "/Blog2.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 5,
    title: "Connecting South Africa to Kenya",
    excerpt: "Road and Air Freight Solutions by Rolling Cargo",
    sections: [
      {
        title: "Our Services",
        content: [
          "As trade between South Africa and Kenya grows, the demand for reliable cargo solutions has increased. Rolling Cargo offers both road and air freight options, making it easy for businesses to transport goods safely and swiftly. Whether it's perishable items, machinery, or general cargo, our logistics experts are on hand to ensure seamless transportation, with regular updates and a commitment to meeting your deadlines.",
        ],
      },
      {
        title: "Why Rolling Cargo is the Best Choice for South Africa Imports",
        content: [
          "Flexible road and air freight services",
          "Real-time tracking and cargo management",
          "Professional handling of sensitive and high-value goods",
          "Door-to-door delivery options for added convenience",
          "Efficient cross-border shipping with minimal delays",
        ],
      },
    ],
    category: "Shipping News",
    image:
      "/aerial-view-of-green-point-in-cape-town-2023-11-27-05-30-14-utc.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 6,
    title: "Seamless Sea Freight from the Netherlands",
    excerpt: "Importing to Kenya with Rolling Cargo",
    sections: [
      {
        title: "Our Services",
        content: [
          "The Netherlands, known for its advanced logistics network, is a major trade partner with Kenya. Rolling Cargo specialises in sea freight solutions from Holland to Kenya, handling everything from agricultural products to heavy machinery. Our team ensures your cargo is loaded, transported, and cleared at the port efficiently, reducing transit times and costs.",
        ],
      },
      {
        title: "Top Reasons to Choose Rolling Cargo for Dutch Imports",
        content: [
          "Efficient sea freight routes from the Netherlands to Kenya",
          "Timely customs clearance to avoid delays at Mombasa port",
          "Handling of large-scale shipments, including heavy equipment",
          "Secure storage and warehousing in the Netherlands",
          "Expert advice on import regulations and documentation",
        ],
      },
    ],
    category: "Shipping News",
    image:
      "/Blog 4 Seamless Sea Freight from the Netherlands Importing to Kenya with Rolling Cargo.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 7,
    title: "Streamlining Cargo Imports from China to Kenya",
    excerpt: "How Rolling Cargo Supports Your Business",
    sections: [
      {
        title: "Our Services",
        content: [
          "China remains one of Kenya's largest trading partners, and importing goods from China requires a reliable logistics partner. At Rolling Cargo, we specialise in both air and sea freight services, providing a complete package from door-to-door delivery, customs clearance, and warehousing. Whether you're importing electronics, clothing, or heavy machinery, we ensure that your cargo arrives on time and within budget.",
        ],
      },
      {
        title: "Key Features of Rolling Cargo's China Import Services",
        content: [
          "Fast and reliable air freight from China to Kenya",
          "Cost-effective sea freight solutions for large shipments",
          "Full customs support to streamline import processes",
          "Real-time tracking for transparency at every stage",
          "Warehousing options in China for pre-shipment storage",
        ],
      },
    ],
    category: "Shipping News",
    image:
      "/Blog 5 Streamlining Cargo Imports from China to Kenya How Rolling Cargo Supports Your Business.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 8,
    title: "Cargo Shipping Solutions from Dubai to Kenya",
    excerpt: "Rolling Cargo Delivers Excellence",
    sections: [
      {
        title: "Our Services",
        content: [
          "Dubai is a key transit hub for global trade, and Rolling Cargo provides expert logistics solutions for businesses importing from the UAE. Whether you're moving consumer goods, electronics, or construction materials, we offer both air and sea freight options tailored to meet your needs. Our team in Dubai ensures every detail is managed, from pickup to delivery in Kenya.",
        ],
      },
      {
        title: "Why Rolling Cargo is Your Go-To Partner for Dubai Imports",
        content: [
          "Fast air freight for time-sensitive shipments",
          "Economical sea freight for larger cargo loads",
          "Secure and insured transport for valuable goods",
          "Real-time tracking and 24/7 customer support",
          "Expertise in handling customs clearance in Dubai and Kenya",
        ],
      },
    ],
    category: "Shipping News",
    image:
      "/Blog 6 Cargo Shipping Solutions from Dubai to Kenya Rolling Cargo Delivers Excellence.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 9,
    title: "How to Shop on Amazon South Africa and Ship with Rolling Cargo",
    excerpt:
      "Shop effortlessly from Amazon South Africa and get your items delivered to Kenya with Rolling Cargo.",
    sections: [
      {
        title: "Overview",
        content: [
          "Looking to buy from Amazon South Africa and get your items delivered to Kenya? Rolling Cargo makes the process smooth, affordable, and efficient.",
        ],
      },
      {
        title: "Step 1: Shop on Amazon South Africa",
        content: [
          "Go to Amazon.co.za or any other trusted South African e-commerce store. Shop as you normally would and proceed to checkout.",
        ],
      },
      {
        title: "Step 2: Use Our South Africa Delivery Address",
        content: [
          "At checkout, fill in the shipping address exactly as shown below:",
          "Name: Your Full Name C/O Orbit Import and Export",
          "Street Name: 22 Huggett Street",
          "Suburb: Kempton Park",
          "City: Johannesburg",
          "Province: Gauteng",
          "Postal Code: 1619",
          "Phone Number: +27 11 390 3555",
          "Contact Person: Adje",
        ],
      },
      {
        title: "Important Notes",
        content: [
          "Always include your full name and phone number in the delivery details. This ensures we can quickly identify your cargo and assign a waybill number for tracking and timely delivery.",
        ],
      },
      {
        title: "Step 3: We'll Handle the Shipping",
        content: [
          "Once your package arrives at our South Africa office:",
          "- We process and prepare your cargo",
          "- Ship to Kenya by air",
          "- Handle customs clearance",
          "- Notify you once it's ready for pickup or delivery",
        ],
      },
      {
        title: "Why Choose Rolling Cargo?",
        content: [
          "- Weekly flights from Johannesburg to Nairobi",
          "- Competitive airfreight rates",
          "- Efficient customs clearance",
          "- Excellent customer service and updates",
        ],
      },
    ],
    category: "Shipping Guide",
    image: "/AMAZONSOUTHAFRICA.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 10,
    title: "How to Shop on Amazon Dubai and Ship with Rolling Cargo",
    excerpt:
      "Want to shop from Amazon UAE and have your items delivered to Kenya? Let Rolling Cargo handle everything.",
    sections: [
      {
        title: "Overview",
        content: [
          "Want to access amazing products and prices from Amazon UAE? Rolling Cargo makes it easy to shop, ship, and receive your items in Kenya — fast and stress-free.",
        ],
      },
      {
        title: "Step 1: Shop on Amazon.ae",
        content: [
          "Head to Amazon.ae, sign in or create an account, and browse products just like you would on Amazon US or UK.",
        ],
      },
      {
        title: "Step 2: Use Our Dubai Office Address at Checkout",
        content: [
          "When you're ready to check out, enter this delivery address:",
          "Rolling Cargo – Office Address",
          "City: Dubai",
          "District/Area: Deira",
          "Street: Sabkha Road",
          "Landmark: Behind Sabkha Bus Station",
          "Building Name: Sabkha Building",
          "Floor & Room: 1st Floor, Room 118",
          "Office Telephone: +971 4 2965 432",
          "Contact Person: Your Name & Phone Number / Aisha Nzila, +971 55 919 6774",
        ],
      },
      {
        title: "Important Notes",
        content: [
          "Please include your full name and phone number in the delivery address. This allows us to quickly identify your package and assign it a waybill number for tracking.",
        ],
      },
      {
        title: "Step 3: Let Rolling Cargo Handle the Rest",
        content: [
          "Once your package arrives, we'll:",
          "- Receive and process it",
          "- Clear it through customs",
          "- Air/Sea ship it to Kenya",
          "- Notify you for pickup or delivery",
        ],
      },
      {
        title: "Why Shop via Rolling Cargo?",
        content: [
          "- Buy directly from Amazon Dubai without needing a UAE address",
          "- Affordable, reliable, and frequent airfreight schedules",
          "- Personal tracking and updates via WhatsApp",
        ],
      },
    ],
    category: "Shipping Guide",
    image: "/AMAZONDUBAI.jpg",
    author: "Rolling Cargo",
  },
  {
    id: 11,
    title:
      "Top 10 Online Stores in the UK and How to Ship to Kenya with Rolling Cargo",
    excerpt:
      "Discover the top online stores in the UK and how Rolling Cargo helps you shop and ship to Kenya hassle-free.",
    sections: [
      {
        title: "Overview",
        content: [
          "Looking to shop from the UK? Rolling Cargo makes shipping simple! Here are 10 popular UK stores our clients shop from:",
        ],
      },
      {
        title: "Top 10 UK Online Stores",
        content: [
          "1. Amazon UK",
          "2. eBay UK",
          "3. Marks & Spencer",
          "4. ASOS",
          "5. Argos",
          "6. Next",
          "7. John Lewis",
          "8. JD Sports",
          "9. Boohoo",
          "10. Sports Direct",
        ],
      },
      {
        title: "How It Works",
        content: [
          "1. Shop online and use our UK warehouse address as your delivery destination.",
          "2. We consolidate, ship, and clear your items.",
          "3. Your order arrives safely in Kenya – fast, secure, and affordable.",
        ],
      },
      {
        title: "Fast and Reliable Shipping",
        content: [
          "✈️ Our UK flights depart every Friday. Shopping has never been easier.",
        ],
      },
    ],
    category: "Shopping Guide",
    image: "/Top10onlinestoresinUK.png",
    author: "Rolling Cargo",
  },
  {
    id: 12,
    title: "Ship from the UK to Kenya — Fast, Simple, and Worry-Free",
    excerpt:
      "Shipping from the UK for the first time? Rolling Cargo makes it easy. From choosing trusted shops to ensuring your packages reach Kenya safely, we've got you covered.",
    sections: [
      {
        title: "Introduction",
        content: [
          "Shipping from the UK for the first time? Rolling Cargo makes it easy. From choosing trusted shops to ensuring your packages reach Kenya safely, we've got you covered.",
        ],
      },
      {
        title: "Step 1: Shop from Trusted UK Stores",
        content: [
          "You can buy from popular stores like Amazon UK, eBay, John Lewis, or Argos. Whether it's electronics, fashion, or home essentials, we can ship it all.",
        ],
      },
      {
        title: "Step 2: Fill the UK Warehouse Address Correctly",
        content: [
          "Your delivery details are crucial. Always enter the following at checkout:",
          "Recipient Name: [Your Full Name]",
          "Phone Number: [Your Phone Number]",
          "Warehouse Address: Rolling Cargo UK Warehouse",
          "Address 1: Unit 3, Alpha Estate",
          "Address 2: Clayton Road",
          "Town: Hayes",
          "County: Middlesex",
          "Post Code: UB3 1BB",
          "Contact: +44 7447 959259",
          "",
          "Important: Make sure to include your full name and phone number in the delivery information. This allows us to identify and trace your package immediately when it arrives at the UK warehouse. Missing or incorrect info can delay your shipment.",
        ],
      },
      {
        title: "Step 3: Track Your Shipment to Kenya",
        content: [
          "Once your items arrive at our UK warehouse, we handle:",
          "• Package consolidation",
          "• Customs clearance",
          "• Doorstep delivery in Kenya",
          "",
          "Stay updated every step of the way — from UK checkout to your home or business.",
        ],
      },
      {
        title: "Pro Tip",
        content: [
          "Double-check your delivery info at checkout. Your name and contact number ensure your package is never lost or delayed. Need help? Our team can guide you through the process.",
        ],
      },
      {
        title: "Ready to Ship from the UK?",
        content: [
          "Contact Rolling Cargo today and let us handle your international delivery from start to finish.",
        ],
      },
    ],
    category: "Shipping Guide",
    image: "/RC Jan Blog 263.png",
    author: "Rolling Cargo",
  },
  {
    id: 13,
    title: "Air Freight vs. Sea Freight: Which Shipping Method Should You Choose?",
    excerpt:
      "When it comes to international shipping, one of the most important decisions you'll make is whether to use air freight or sea freight. Each method has its benefits depending on your shipment's size, urgency, and budget.",
    sections: [
      {
        title: "Introduction",
        content: [
          "When it comes to international shipping, one of the most important decisions you'll make is whether to use air freight or sea freight. Each method has its benefits depending on your shipment's size, urgency, and budget.",
          "",
          "This guide breaks it down simply to help you make the right choice for your cargo.",
        ],
      },
      {
        title: "Air Freight: Fast and Reliable",
        content: [
          "Air freight is ideal when speed matters. It typically takes 3 to 7 days to arrive, making it the best choice for:",
          "• Urgent shipments",
          "• Small or lightweight packages",
          "• Fragile or high-value goods (e.g., electronics, designer items)",
          "• E-commerce restocks",
          "",
          "At Rolling Cargo, we offer weekly air shipments from major hubs including the UAE, UK, South Africa, China, Turkey, Netherlands and Italy.",
        ],
      },
      {
        title: "Sea Freight: Cost-Effective for Bulk Cargo",
        content: [
          "Sea freight is your go-to when you're shipping large volumes or working with a tighter budget. While delivery takes longer, it's much more affordable for:",
          "• Heavy or bulky items (e.g., furniture, machinery)",
          "• Wholesale and inventory restock",
          "• Planned or non-urgent shipments",
          "",
          "We also offer consolidation services, so you can ship multiple packages together at reduced rates.",
        ],
      },
      {
        title: "Final Tip",
        content: [
          "Your shipping method should depend on your timeline, cargo size, and budget. If you're unsure which one suits your needs, our team is ready to advise you.",
        ],
      },
      {
        title: "Need a shipping quote or assistance?",
        content: ["Talk to us directly 0709 286286"],
      },
    ],
    category: "Shipping Guide",
    image: "/RC Jan Blog 26.png",
    author: "Rolling Cargo",
  },
];

// Offices Data (Contact Us Page)
export const offices: Office[] = [
  {
    name: "Nairobi Office (Headquaters)",
    phone: "+254 709 286 286",
    email: "salesinquiries@rollingcargo.co.ke",
    address:
      "10 Funzi Road, Off Enterprise Road. P.O.BOX 14009-00100 NAIROBI - KENYA",
  },
  {
    name: "Mombasa Office",
    phone: "(+254) 709 286 286",
    email: "salesinquiries@rollingcargo.co.ke",
    address:
      "Sheikh Abdullas F. Rd, Opposite Alliance Medical Centre Bondeni, Kilifi Corner, Mombasa.",
  },
  {
    name: "UAE – Dubai",
    phone: "+97 155 919 6774",
    email: "salesinquiries@rollingcargo.co.ke",
    address:
      "Deira, Sabkha Road, Behind Sabkha Bus Station Sabkha Building 1st floor RM 118. Warehouse at Al Hamriya port side gate No.9 next to Mosque Sheikh Murr.",
  },
  {
    name: "China – Guangzhou (Air Shipment)",
    chineseName: "中国 – 广州（空运）",
    phone:
      "Helen+8618826260043 (WhatsApp), Liuan +8618826260042 (WeChat)",
    chinesePhone: "Helen+8618826260043 (WhatsApp), Liuan +8618826260042 (WeChat)",
    email: "salesinquiries@rollingcargo.co.ke",
    address:
      "CHINA AIR WAREHOUSE ADDRESS\n\nUnit 102, Building E\nShengli Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong\nHelen+8618826260043 (WhatsApp)\nLiuan +8618826260042 (WeChat)\n\nROLLING CARGO 空运地址：\n广东省佛山市南海区里水镇 东秀路胜利工业区 11 号 E 栋 102\nHelen+8618826260043 (WhatsApp)\nLiuan +8618826260042 (WeChat)\n货物外箱每箱必须标注 国外客户姓名电话号码以及空运，\n再附上装箱单发到仓库，如唛头信息不齐，仓库拒收\n（上班时间周一至周六 11 点～19 点）",
    chineseAddress:
      "CHINA AIR WAREHOUSE ADDRESS\n\nUnit 102, Building E\nShengli Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong\nHelen+8618826260043 (WhatsApp)\nLiuan +8618826260042 (WeChat)\n\nROLLING CARGO 空运地址：\n广东省佛山市南海区里水镇 东秀路胜利工业区 11 号 E 栋 102\nHelen+8618826260043 (WhatsApp)\nLiuan +8618826260042 (WeChat)\n货物外箱每箱必须标注 国外客户姓名电话号码以及空运，\n再附上装箱单发到仓库，如唛头信息不齐，仓库拒收\n（上班时间周一至周六 11 点～19 点）",
  },
  {
    name: "China – Guangzhou (Sea Shipment)",
    chineseName: "中国 – 广州（海运）",
    phone: "Lenah+8619927462062 (WhatsApp), Awei+8618826260044 (WeChat), Kevin+8619927449452 (WeChat)",
    chinesePhone:
      "Lenah+8619927462062 (WhatsApp), Awei+8618826260044 (WeChat), Kevin+8619927449452 (WeChat)",
    email: "salesinquiries@rollingcargo.co.ke",
    address: `CHINA SEA WAREHOUSE ADDRESS

Unit 101, Building E
Shengli Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong
Lenah+8619927462062 (WhatsApp)
Awei+8618826260044 (WeChat)
Kevin+8619927449452 (WeChat)
Kindly ask your supplier to write your name and number on the package,
mode of shipping sea very important thanks!

ROLLING CARGO 海运地址：
广东省佛山市南海区里水镇东秀路胜利工业区 11 号 E 栋 101
Awei+8618826260044  
Kevin+8619927449452
货物外箱每箱必须标注 国外客户姓名电话号码以及海运，
再附上装箱单发到仓库，如唛头信息不齐，仓库拒收
（上班时间周一至周六 11 点～18 点）`,
    chineseAddress: `CHINA SEA WAREHOUSE ADDRESS

Unit 101, Building E
Shengli Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong
Lenah+8619927462062 (WhatsApp)
Awei+8618826260044 (WeChat)
Kevin+8619927449452 (WeChat)
Kindly ask your supplier to write your name and number on the package,
mode of shipping sea very important thanks!

ROLLING CARGO 海运地址：
广东省佛山市南海区里水镇东秀路胜利工业区 11 号 E 栋 101
Awei+8618826260044  
Kevin+8619927449452
货物外箱每箱必须标注 国外客户姓名电话号码以及海运，
再附上装箱单发到仓库，如唛头信息不齐，仓库拒收
（上班时间周一至周六 11 点～18 点）`,
  },
  {
    name: "U.K – London",
    phone: "+44 7447 959259",
    email: "salesinquiries@rollingcargo.co.ke",
    address: "Unit 3 Alpha Estate Clayton Road Hayes Middlesex, UB3 1BB",
  },
  {
    name: "Turkey – Instanbul",
    phone: "+905526128645",
    email: "salesinquiries@rollingcargo.co.ke",
    address:
      "Saraç İshak Mah. Turanlı Sok. No:12 Safir İ˛Merkezi D. 304-312. Beyazıt v.d 3710200842 Beyazıt / İSTANBUL / TÜRKİYE.",
  },
  {
    name: "Europe – Netherlands",
    phone: "+31 610624607",
    email: "salesinquiries@rollingcargo.co.ke",
    address: "Zuid-Afrikaweg 12-K1432 DA Aalsmeer Netherlands",
  },
  {
    name: "Europe – Italy",
    phone: "+393716953158",
    email: "salesinquiries@rollingcargo.co.ke",
    address: "Via Montorfano 98, 20831 Seregno (MB)",
  },
  {
    name: "South Africa",
    phone: "+27 79 906 7166",
    email: "salesinquiries@rollingcargo.co.ke",
    address: "ORBIT 22 Hugget street, Kempton Park 011 390 3555",
  },
];

// Customs Clearence Page Data
export const customClearanceContent: CustomClearanceContent = {
  title: "Efficient customs Logistics.",
  description: `In the global marketplace, rapidly changing production and delivery schedule requirements have increased the liability of customs brokers to provide expert Clearance services. Rolling Cargo Ltd is widely recognized as one of Kenya's premier customs brokers.
Rolling Cargo has a longstanding professional relationship with government agencies and this hard-earned and privileged status offers a distinctive advantage when it comes to difficult negotiations of shipments and challenges posed by bureaucratic processes in Kenya.
Regardless of how quickly a shipment arrives in Kenya, the complexity of customs procedures and documentation requirements can result in undefined delays that are costly to recipients. Rolling Cargo Customs Brokers are perfectly trained to understand the complex customs procedures of each line of business.
Our customs brokerage team will be fully responsible for ensuring that the appropriate documentation is prepared well before all import and export deadlines so that costly and time-consuming delays are avoided. To further enhance this aspect of our business, Rolling Cargo Ltd maintains a bonded warehouse network across Kenya. These facilities, suitable for any type of cargo, can be reached by road, rail or air and ensure that shipments are cleared quickly upon arrival.
Our Customs Services include:
Import / Export Customs Clearance Service
Customs Evaluation of merchandise
Import Duty & Tax Assessment
Classification of goods
Customs Surveying
Import / Export Permissions of controlled goods
Payment of Customs Duties on clients behalf
Consultancy Services
Transit Customs Handling`,
};

// FAQ Page Data
export const faqData: FAQItem[] = [
  {
    question: "What shipping services do you offer?",
    answer:
      "We offer a range of services including standard ground shipping, express delivery, international shipping, and freight forwarding for larger cargo.",
  },
  {
    question: "Which countries do you ship from?",
    answer:
      "We ship your goods by providing tailored end-to-end air freight, sea freight, and courier services from UK, Italy, Netherlands, Turkey, Dubai, and China. Rolling Cargo has a robust network of partners to serve your global needs.",
  },
  {
    question: "What are your shipping rates and charges?",
    answer:
      "Charges are based on actual weight or volumetric weight of the package. We charge whichever is higher. Shipping by sea is based on Cubic per Meter (CBM). We measure using the formula Length x Width x Height (in meters).",
  },
  {
    question: "Payments to suppliers",
    answer:
      "We assist our customers pay their suppliers abroad in Turkey. All you need to do is pay at our offices and we shall pay the supplier on your behalf.",
  },
  {
    question: "What are the export charges?",
    answer:
      "Export charges are paid directly to the customs authorities. The kind of goods you are exporting will dictate the charges that will be applied. We find the correct tariff applicable based on the description of your goods. Be advised that tariffs are country-specific and can vary from one country to the other.",
  },
  {
    question:
      "What are your new working days in Dubai with the revised weekend?",
    answer: "Our Dubai office is open everyday from 9AM – 10PM.",
  },
  {
    question: "Do you ship from the USA?",
    answer:
      "Currently we don't have an office in USA, and for this reason we are unable to ship.😔",
  },
  {
    question: "How can I track my package?",
    answer:
      "You can track your package by entering your tracking number on our website or mobile app. We provide real-time updates on your shipment's location and estimated delivery time.",
  },
  {
    question: "What are your delivery timeframes?",
    answer:
      "Our delivery timeframes vary depending on the service selected and destination. Standard domestic shipping typically takes 3-5 business days, while express services can deliver within 1-2 business days. International shipping times vary by country.",
  },
  {
    question: "Do you offer insurance for valuable items?",
    answer:
      "Yes, we offer shipping insurance for valuable items. The cost is based on the declared value of your shipment. We recommend insurance for all high-value packages.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup through our website, mobile app, or by calling our customer service. We offer flexible pickup windows to accommodate your schedule.",
  },
];

// Footer Data
export const countries: Country[] = [
  {
    name: "Headquarters",
    phone: "+254 709 286 286",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "UAE - Dubai",
    phone: "+971 4 2965 432",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "China Office",
    phone: "+8618826260042",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "South Africa",
    phone: "+27 79 906 7166",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "Europe – Italy",
    phone: "+393716953158",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "Europe – Netherlands",
    phone: "+31 610624607",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "Turkey – Istanbul",
    phone: "+905526128645",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "U.K – London",
    phone: "+44 7447 959259",
    email: "salesinquiries@rollingcargo.co.ke",
  },
  {
    name: "Mombasa Office",
    phone: "+254 709 286 286",
    email: "salesinquiries@rollingcargo.co.ke",
  },
];

export const quickLinks = [
  { name: "About Us", url: "/about-us" },
  { name: "Air Cargo", url: "/air-cargo" },
  { name: "Sea Cargo", url: "/sea-cargo" },
  { name: "Online Shopping", url: "/online-shopping" },
  { name: "Blog", url: "/blog" },
  { name: "Privacy Policy", url: "/privacy" },
];

export const socialLinks = [
  {
    name: "Facebook",
    icon: "Facebook",
    url: "https://www.facebook.com/rollingcargo ",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com/rollingcargo ",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/company/rollingcargo ",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://www.instagram.com/rollingcargo ",
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    url: "https://www.tiktok.com/rollingcargo ",
  },
];

// Freight Section Data (Calculator)
export type CountryName =
  | "UK"
  | "China"
  | "Turkey"
  | "Netherlands"
  | "Italy"
  | "South Africa"
  | "Dubai";

export type SeaFreightRate =
  | number
  | { regular: number; small?: number; large?: number };

export interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
}

export const currencyMap: Record<CountryName, CurrencyInfo> = {
  UK: { code: "GBP", symbol: "£", rate: 0.79 },
  China: { code: "KSH", symbol: "KSH", rate: 1 },
  Turkey: { code: "USD", symbol: "$", rate: 1 },
  Netherlands: { code: "USD", symbol: "$", rate: 1 },
  Italy: { code: "USD", symbol: "$", rate: 1 },
  "South Africa": { code: "USD", symbol: "$", rate: 1 },
  Dubai: { code: "KSH", symbol: "KSH", rate: 1 },
};

export const airFreightRates: Record<
  CountryName,
  { baseRate: number; minimumRate?: number; currency?: string }
> = {
  UK: { baseRate: 6.49, currency: "GBP" }, // £6.49 per kg
  China: { baseRate: 12, minimumRate: 15, currency: "USD" }, // $12 per kg, $15 minimum for ≤1kg
  Turkey: { baseRate: 7.5, currency: "USD" }, // $7.5 per kg
  Netherlands: { baseRate: 11, currency: "USD" }, // $11 per kg
  Italy: { baseRate: 11, currency: "USD" }, // $11 per kg
  "South Africa": { baseRate: 13, currency: "USD" }, // $13 per kg
  Dubai: { baseRate: 8, minimumRate: 10, currency: "USD" }, // $8 per kg, $10 minimum for ≤1kg
};

export const handlingFees: Record<
  CountryName,
  { air: number; sea?: number; airCurrency?: string; seaCurrency?: string }
> = {
  UK: { air: 25, sea: 15, airCurrency: "GBP", seaCurrency: "GBP" }, // £25 air, £15 sea
  China: { air: 0, sea: 0 }, // No handling fees
  Turkey: { air: 0, sea: 10, seaCurrency: "USD" }, // $10 sea handling
  Netherlands: { air: 40, sea: 20, airCurrency: "USD", seaCurrency: "USD" }, // $40 air, $20 sea
  Italy: { air: 40, airCurrency: "USD" }, // $40 air handling
  "South Africa": { air: 0 }, // No handling fees
  Dubai: { air: 0, sea: 0 }, // No handling fees
};

export const seaFreightRates: Partial<
  Record<CountryName, SeaFreightRate & { currency?: string }>
> = {
  UK: { regular: 5, currency: "GBP" }, // £5 per CBM
  Dubai: { regular: 60000, small: 12000, currency: "KSH" }, // KSH 60,000 per CBM, KSH 12,000 for ≤0.2CBM
  China: { regular: 60000, small: 12000, currency: "KSH" }, // KSH 60,000 per CBM, KSH 12,000 for ≤0.2CBM
  Turkey: { regular: 750, currency: "USD" }, // $750 per CBM
  Netherlands: { regular: 10, currency: "USD" }, // $10 per CBM
};

export const airFreightCountries: CountryName[] = [
  "UK",
  "China",
  "Turkey",
  "Netherlands",
  "Italy",
  "South Africa",
  "Dubai",
];

export const seaFreightCountries: CountryName[] = [
  "UK",
  "China",
  "Turkey",
  "Netherlands",
  "Dubai",
];

// Solutions Data
export const solutions: SolutionItem[] = [
  {
    icon: Handshake,
    title: "Contact your supplier",
    description:
      "Liaise with your supplier, agree on the prices and items you wish to buy. Give the supplier our shipping address.",
    link: "/about-us",
  },
  {
    icon: Wallet,
    title: "We pay on your behalf",
    description:
      "Send the funds to our Rolling Cargo Account, then we remit the payments on your behalf.",
    link: "/about-us",
  },
  {
    icon: Truck,
    title: "Realtime Updates",
    description:
      "Once the package arrives at our warehouse, we will send you a message, keeping you posted on the tracking Info.",
    link: "/air-cargo",
  },
];

// Hero Data (Home page)
export const CONFIG = {
  EMAIL_JS: {
    SERVICE_ID: "service_od2wm1x",
    TEMPLATE_ID: "template_lws7abq",
    PUBLIC_KEY: "AWuVmDvp3lqD8Xks_",
  },
  PHONE_NUMBER: "+254709 286 286",
  IMAGE_TRANSITION_INTERVAL: 5000,
  POPUP_DELAY: 1000,
  SUCCESS_MESSAGE_DURATION: 2000,
} as const;

export const backgroundImages = [
  {
    src: "/banner3.jpg",
    alt: "Air and sea cargo services banner",
    priority: true,
  },
];
