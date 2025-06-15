"use client";
import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";

interface BotStatusProps {
  isOnline?: boolean;
}

export default function BotStatus({ isOnline = false }: BotStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <Badge 
        variant={isOnline ? "success" : "destructive"}
        className="flex items-center gap-1.5"
      >
        <Circle 
          className={`h-2 w-2 fill-current ${isOnline ? 'animate-pulse' : ''}`} 
        />
        {isOnline ? "Online" : "Offline"}
      </Badge>
    </div>
  );
} 