import type { ComponentType, CSSProperties } from 'react';

export type IconComponent = ComponentType<{ size?: number; style?: CSSProperties; className?: string }>;

export type SidebarItem = {
  label: string;
  icon: IconComponent;
  active?: boolean;
};

export type SidebarSection = {
  heading?: string;
  items: SidebarItem[];
};

export type KpiMetric = {
  label: string;
  value: string;
  delta: string;
  Icon: IconComponent;
};

export type AvatarRecord = {
  avatar1: string;
  avatar3: string;
  avatar4: string;
  avatarRajesh: string;
};

export type DashboardItemWithIcon = {
  name: string;
  cat: string;
  qty: string;
  tag: string;
  cls: string;
  Icon: IconComponent;
  ic: string;
};

export type TimelineActivity = {
  t: string;
  d: string;
  ago: string;
  c: string;
  Icon: IconComponent;
};