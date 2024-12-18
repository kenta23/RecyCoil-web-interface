"use client"


import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { ChartConfig } from "@/components/ui/chart"
import { useEffect, useMemo } from "react";


export default function PieChart({
  title,
  icon,
  value,
  fill,
}: {
  title: string;
  icon: React.ReactNode;
  value: number;
  fill: string;
}) {
  const chartData = [{ value, fill }];

  // const chartConfig = {
  //   title: {
  //     label: title,
  //   },
  //   safari: {
  //     label: "Safari",
  //     color: "hsl(var(--chart-2))",
  //   },
  // } satisfies ChartConfig;




  return (
    <Card className="flex bg-transparent border-transparent outline-none flex-col">
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square w-full max-w-sm">
          <ResponsiveContainer>
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={value + 90} //fuel produced value
              innerRadius={80}
              outerRadius={120}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="value" background cornerRadius={10} />

              <PolarRadiusAxis
                className=""
                tick={false}
                tickLine={false}
                axisLine={false}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].value.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {icon} {title}
        </div>
      </CardFooter>
    </Card>
  );
}
