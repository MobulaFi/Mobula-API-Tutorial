import { Flex } from "@chakra-ui/react";
import { BarChart, LineChart } from "echarts/charts";
import {
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TimeSelected } from "../../interfaces/chart";
import { useDefault } from "./series";

interface EChartProps {
  data: [number, number][];
  options?: echarts.EChartsCoreOption;
  width?: number | string;
  height?: number | string;
  noDataZoom?: boolean;
  noAxis?: boolean;
  extraSeries?: echarts.SeriesModel[];
  timeframe: TimeSelected;
  type?: string;
  unit?: string;
  unitPosition?: "before" | "after";
  leftMargin?: string[];
  bg?: string;
  transactions?: any[] | null;
  extraData?: {
    data: [number, number][];
    name: string;
    color?: string;
  }[];
}

echarts.use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TooltipComponent,
  TitleComponent,
  GridComponent,
  DataZoomComponent,
  GraphicComponent,
  MarkLineComponent,
  LegendComponent,
]);

const EChart: React.FC<EChartProps> = ({
  data,
  options,
  height,
  width,
  extraSeries = [],
  timeframe,
  type,
  unit,
  bg,
  noDataZoom = false,
  noAxis = false,
  unitPosition = "before",
  leftMargin = ["0%", "0%"],
  transactions = null,
  extraData = null,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const id = useMemo(() => uuid(), []);
  const isMobile =
    (typeof window !== "undefined" ? window.innerWidth : 0) < 768;

  const { tooltip, xAxis, yAxis, dataZoom, series } = useDefault({
    data,
    timeframe,
    isMobile,
    type,
    unit,
    noDataZoom,
    noAxis,
    unitPosition,
    transactions,
    extraData,
  });

  const createInstance = useCallback(() => {
    const instance = echarts.getInstanceByDom(document.getElementById(id));

    return (
      instance ||
      echarts.init(document.getElementById(id), null, {
        renderer: "canvas",
      })
    );
  }, [id]);

  useEffect(() => {
    const chart = createInstance();
    if (chart)
      chart.setOption(
        {
          backgroundColor: bg || "transparent",
          textStyle: {
            color: "rgba(255,255,255,0.8)",
          },
          grid: {
            bottom: "15%",
            left: isMobile ? leftMargin[0] : leftMargin[1],
            right: "0.5%",
            containLabel: true,
          },
          tooltip,
          xAxis,
          yAxis,
          dataZoom,
          ...options,
          series: [...series, ...extraSeries],
        },
        true
      );
  }, [data, options, timeframe, noDataZoom, transactions, extraData]);

  useEffect(() => {
    const chart = createInstance();
    window.onresize = () => {
      chart.resize();
    };

    const parent = parentRef.current;
    if (parent) {
      parent.addEventListener("touchend", () => {
        chart.dispatchAction({
          type: "hideTip",
        });
      });
    }
  }, []);

  return (
    <Flex
      ref={parentRef}
      id={id}
      className="no-swipe"
      style={{ height: height || "500px", width: width || "100%" }}
    />
  );
};

export default EChart;
