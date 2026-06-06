import { useOrbitKeyframes } from "../Utils";
import {
    Apple, Cherry, Grape, Citrus, Banana, Carrot, LucideIcon, Icon
} from "lucide-react";

const DEFAULT_FRUITS = [Apple, Cherry, Grape, Citrus, Banana, Carrot];

interface Props {
    fruits?: LucideIcon[];
    radius?: number;
    durationMs?: number;
    keepUpright?: boolean;
    message?: string;
}

export function Loader({
                                fruits = DEFAULT_FRUITS,
                                radius = 36,
                                durationMs = 1800,
                                keepUpright = true,
                                message = "Loading...",
                            }: Props) {
    useOrbitKeyframes();

    const count = fruits.length;
    const size = (radius + 20) * 2;

    return (
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <div
                role="status"
                aria-label={message}
                style={{
                    position: "relative",
                    width: size,
                    height: size,
                    animation: `fl-spin ${durationMs}ms linear infinite`,
                }}
            >
                {fruits.map((Icon, i) => {
                    const angleDeg = (i / count) * 360;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad);
                    const y = radius * Math.sin(angleRad);

                    return (
                        <span
                            key={i}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                fontSize: "1.4rem",
                                lineHeight: 1,
                            }}
                        >
              <span
                  style={{
                      display: "inline-block",
                      animation: keepUpright
                          ? `counter-spin ${durationMs}ms linear infinite`
                          : undefined,
                  }}
              >
            <Icon size={22} color={"#478048"} strokeWidth={1.5}/>
              </span>
            </span>
                    );
                })}
            </div>

            <span style={{ fontSize: "0.875rem", color: "gray" }}>
        {message}
      </span>
        </div>
    );
}