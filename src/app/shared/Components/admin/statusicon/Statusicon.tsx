import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export const getStatusIcon = (status: RecentShipment["status"]) => {
  const iconMap = {
    delivered: <CheckCircle className="w-4 h-4 text-green-500" />,
    transit: <Clock className="w-4 h-4 text-blue-500" />,
    pending: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
    delayed: <Activity className="w-4 h-4 text-red-500" />,
  };
  return iconMap[status];
};
