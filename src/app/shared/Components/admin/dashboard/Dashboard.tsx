"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Users } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  recentShipments,
  revenueData,
  shipmentStatusData,
  stats,
} from "@/data/data";
import { StatCard } from "../statcarddata/Statcarddata";
import { getStatusIcon } from "../statusicon/Statusicon";
import { getStatusBadge } from "../statusbadge/Statusbadge";
import { containerVariants, itemVariants } from "@/variants/animations";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Monitor your cargo operations and business performance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </motion.div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue performance</CardDescription>
                </div>
                <select className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="6months">Last 6 months</option>
                  <option value="12months">Last 12 months</option>
                </select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(221, 83%, 53%)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(221, 83%, 53%)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted"
                    />
                    <XAxis
                      dataKey="month"
                      className="stroke-muted-foreground"
                    />
                    <YAxis className="stroke-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(221, 83%, 53%)"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Shipment Status Pie Chart */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Shipment Status</CardTitle>
                <CardDescription>Current shipment distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={shipmentStatusData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      dataKey="value"
                      stroke="hsl(var(--background))"
                      strokeWidth={2}
                    >
                      {shipmentStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {shipmentStatusData.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-muted-foreground">
                        {item.name}:{" "}
                        <span className="font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Shipments Table */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Shipments</CardTitle>
                <CardDescription>Latest shipment activities</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Shipment ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Route
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentShipments.map((shipment) => (
                      <tr
                        key={shipment.id}
                        className="border-b hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(shipment.status)}
                            <span className="font-medium">{shipment.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">
                          {shipment.client}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {shipment.route}
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(shipment.status)}
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          KSh {shipment.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((action, index) => (
            <motion.div key={action.title} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`p-2 ${action.color
                        .replace("bg-", "bg-")
                        .replace("-500", "-100")} rounded-lg`}
                    >
                      <action.icon
                        className={`w-5 h-5 ${action.color.replace(
                          "bg-",
                          "text-"
                        )}`}
                      />
                    </div>
                    <CardTitle className="text-base">{action.title}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">
                    {action.description}
                  </CardDescription>
                  <Button
                    className={`w-full ${action.color} ${action.hoverColor}`}
                  >
                    {action.title === "New Shipment"
                      ? "Create Shipment"
                      : action.title === "Fleet Status"
                      ? "View Fleet"
                      : "Manage Clients"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
