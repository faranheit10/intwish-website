import {
  BarChart3,
  Gamepad2,
  Glasses,
  Network,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  gamepad: Gamepad2,
  users: Users,
  star: Star,
  network: Network,
  chart: BarChart3,
  vr: Glasses,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Gamepad2;
  return <Icon className={className} aria-hidden="true" />;
}
