import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  light?: boolean;
}

export default function Divider({ className, light = false }: DividerProps) {
  return (
    <div className={cn("flex items-center justify-center py-2", className)}>
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="12"
          x2="46"
          y2="12"
          stroke={light ? "#D4B896" : "#C8782A"}
          strokeWidth="1"
        />
        <path
          d="M60 4 C54 4 50 8 50 12 C50 16 54 20 60 20 C66 20 70 16 70 12 C70 8 66 4 60 4 Z M60 8 C60 8 64 10 64 12 C64 14 60 16 60 16 C60 16 56 14 56 12 C56 10 60 8 60 8 Z"
          fill={light ? "#D4B896" : "#C8782A"}
        />
        <line
          x1="74"
          y1="12"
          x2="120"
          y2="12"
          stroke={light ? "#D4B896" : "#C8782A"}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
