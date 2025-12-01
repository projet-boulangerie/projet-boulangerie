import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ModelViewerElement = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  alt?: string;
  poster?: string;
  autoplay?: boolean;
  ar?: boolean;
  exposure?: string | number;
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "interaction-prompt"?: string;
  "environment-image"?: string;
  "shadow-intensity"?: string | number;
  "shadow-softness"?: string | number;
  "camera-orbit"?: string;
  "camera-target"?: string;
  "field-of-view"?: string;
  "min-field-of-view"?: string;
  "max-field-of-view"?: string;
  "ar-modes"?: string;
  "touch-action"?: string;
  "disable-zoom"?: boolean;
  "tone-mapping"?: string;
};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
}
