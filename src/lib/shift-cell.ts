import { ShiftType } from "@/lib/mock-data/hr-shifts";

export interface ShiftCellConfig {
  label: string;
  icon: string;
  bg: string;
  text: string;
}

export const SHIFT_CELL: Record<ShiftType, ShiftCellConfig> = {
  morning:   { label: "Morn",  icon: "Sun",       bg: "bg-primary",       text: "text-primary-foreground" },
  afternoon: { label: "Aftr",  icon: "Sunset",    bg: "bg-success",       text: "text-white"              },
  graveyard: { label: "Grave", icon: "Moon",       bg: "bg-info",          text: "text-white"              },
  off:       { label: "OFF",   icon: "BedDouble",  bg: "bg-surface-muted", text: "text-text-muted"         },
};
