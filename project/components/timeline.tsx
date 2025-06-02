import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Timeline connector */}
          {index < items.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 -ml-px h-full w-0.5 bg-border" />
          )}
          
          <div className="relative flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-primary shadow-sm">
              {item.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-1.5">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}