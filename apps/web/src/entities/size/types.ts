export interface Size {
  available: boolean;
  description: string;
  disk: number;
  memory: number;
  price_hourly: string;
  price_monthly: number;
  regions: string[];
  slug: string;
  transfer: number;
  vcpu: number;
}
