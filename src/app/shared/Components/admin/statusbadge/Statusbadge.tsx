import { Badge } from "@/components/ui/badge";

export const getStatusBadge = (status: RecentShipment["status"]) => {
  const statusConfig = {
    delivered: {
      variant: "default" as const,
      className: "bg-green-100 text-green-800 hover:bg-green-100",
    },
    transit: {
      variant: "default" as const,
      className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    },
    pending: {
      variant: "default" as const,
      className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    },
    delayed: { variant: "destructive" as const, className: "" },
  };

  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} className={config.className}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};
