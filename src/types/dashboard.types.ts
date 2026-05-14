// Types
interface StatCardData {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ElementType;
  color: string;
  description: string;
  hoverColor: string;
}

interface RevenueData {
  month: string;
  revenue: number;
  shipments: number;
}

interface ShipmentStatusData {
  name: string;
  value: number;
  color: string;
}

interface RecentShipment {
  id: string;
  client: string;
  route: string;
  status: "delivered" | "transit" | "pending" | "delayed";
  amount: number;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  pageSubtitle?: string;
  activeMenuItem?: string;
}
