import { type Event } from '@/entities/event';

export type Virtance = {
  id: number;
  name: string;
  vcpu: number;
  memory: number;
  disk: number;
  locked: boolean;
  recovery_mode: boolean;
  backups_enabled: boolean;
  status: VirtanceStatus;
  created_at: string;
  features: [];
  backup_ids: [];
  snapshot_ids: [];
  event: Event | null;
  image: {
    slug: string;
    name: string;
    distribution: string;
    regions: string[];
    public: boolean;
    created_at: string;
    type: 'distribution';
    description: string;
    min_disk_size: number;
    size_gigabytes: number;
    status: 'available';
  };
  size: {
    slug: string;
    memory: number;
    vcpu: number;
    disk: number;
    transfer: number;
    description: 'Micro';
    available: boolean;
    price_hourly: string;
    price_monthly: number;
    regions: string[];
  };
  networks: {
    v4: [
      {
        address: string;
        netmask: string;
        gateway: string;
        type: 'private';
      },
      {
        address: string;
        netmask: string;
        gateway: string;
        type: 'public';
      },
      {
        address: string;
        netmask: string;
        gateway: string;
        type: 'compute';
      },
    ];
  };
  region: {
    slug: string;
    name: string;
    available: boolean;
    features: [];
    sizes: string[];
  };
};

export type VirtanceStatus = 'active' | 'pending' | 'inactive';

export type VirtanceAction =
  | 'power_on'
  | 'power_off'
  | 'rename'
  | 'shutdown'
  | 'reset'
  | 'rebuild'
  | 'reboot'
  | 'password_reset'
  | 'snapshot'
  | 'enable_recovery_mode';

export type ActionType =
  | {
      id: number;
      action: 'power_on';
    }
  | {
      id: number;
      action: 'power_off';
    }
  | {
      id: number;
      action: 'shutdown';
    }
  | {
      id: number;
      action: 'reset';
    }
  | {
      id: number;
      action: 'reset';
    }
  | {
      id: number;
      action: 'enable_recovery_mode';
    }
  | {
      id: number;
      action: 'disable_recovery_mode';
    }
  | {
      id: number;
      action: 'resize';
      size: string;
    }
  | { action: 'rename'; id: number; name: string }
  | { action: 'rebuild'; id: number; image: string }
  | { action: 'reboot'; id: number }
  | { action: 'password_reset'; id: number; password: string }
  | { action: 'snapshot'; id: number; name: string }
  | { action: 'restore'; id: number; image: number }
  | { action: 'enable_backups'; id: number }
  | { action: 'disable_backups'; id: number };

export type VirtanceCPUMetrics = {
  name: string;
  unit: string;
  data: { sys: [number, string][]; user: [number, string][]; total: [number, string][] };
};

export type VirtanceMemoryMetrics = {
  name: string;
  unit: string;
  data: [number, string][];
};

export type VirtanceNetMetrics = {
  name: string;
  unit: string;
  data: { inbound: [number, string][]; outbound: [number, string][] };
};

export type VirtanceDiskMetrics = {
  name: string;
  unit: string;
  data: { read: [number, string][]; write: [number, string][] };
};

export type Console = {
  id: number;
  uuid: string;
  name: string;
  websocket: {
    host: string;
    port: number;
    hash: string;
  };
};

export type VirtanceHistory = {
  id: number;
  event: string | null;
  created: string;
};

export interface GetVirtancesParams {
  has_backups?: boolean;
  has_firewall?: boolean;
  has_floating_ip?: boolean;
  used_in_lb?: boolean;
  region?: string;
}
