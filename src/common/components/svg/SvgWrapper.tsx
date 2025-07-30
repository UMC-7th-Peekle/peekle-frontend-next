import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Svg들의 공통 스타일을 정의하는 컴포넌트. size 말고는 딱히 없어보임
export function SvgWrapper({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <Slot className={cn("size-6 inline-block", className)} {...props} />;
}
