export type TimeSelected = "24H" | "7D" | "30D" | "3M" | "1Y" | "ALL";
export type ChartType = "price" | "liquidity" | "volume" | "market_cap";

export interface UseDefaultProps {
  data: [number, number][];
  transactions: any[] | null;
  timeframe: TimeSelected;
  isMobile: boolean;
  type?: string;
  unit?: string;
  noDataZoom?: boolean;
  noAxis?: boolean;
  unitPosition?: "before" | "after";
  extraData?: { data: [number, number][]; name: string; color?: string }[];
}
