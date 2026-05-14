// Components
import { Card, CardContent } from "@/components/ui/card";
import { itemVariants } from "@/variants/animations";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
export const StatCard: React.FC<StatCardData> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
}) => {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -2 }}>
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {title}
              </p>
              <p className="text-2xl font-bold mb-2">{value}</p>
              <div className="flex items-center">
                <TrendingUp
                  className={`w-4 h-4 mr-1 ${
                    changeType === "positive"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {change}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  vs last month
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-lg ${color} flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
