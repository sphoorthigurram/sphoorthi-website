import { Maximize2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MediaLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function MediaLightbox({ src, alt, caption, className }: MediaLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={`group relative h-auto w-full overflow-hidden rounded-lg border border-border p-0 ${className ?? ""}`}
          aria-label={`Expand ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-md border border-border bg-background/85 text-foreground shadow-sm backdrop-blur">
            <Maximize2 className="size-4" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[80] max-h-[92vh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto border-border bg-background p-3 sm:p-4">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Expanded project image. Close this view to return to the project details.
        </DialogDescription>
        <img src={src} alt={alt} className="max-h-[78vh] w-full rounded-md object-contain" />
        {caption ? <p className="px-2 pb-1 text-sm text-muted-foreground">{caption}</p> : null}
      </DialogContent>
    </Dialog>
  );
}