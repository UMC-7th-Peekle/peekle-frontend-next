import { SvgWrapper } from "./SvgWrapper";

interface MenuIconProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
}

export function MenuIcon({ isOpen = false, ...props }: MenuIconProps) {
  return (
    <SvgWrapper {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 상단 선 - 45도 회전해서 X의 위쪽 선이 됨 */}
        <path
          d="M22 4V6.10526H2V4H22Z"
          fill="currentColor"
          className={`transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        {/* 중간 선 - 투명해져서 사라짐 */}
        <path
          d="M22 11V13.1053H2V11H22Z"
          fill="currentColor"
          className={`transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        {/* 하단 선 - -45도 회전해서 X의 아래쪽 선이 됨 */}
        <path
          d="M22 18.7368V20.8421H2V18.7368H22Z"
          fill="currentColor"
          className={`transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </svg>
    </SvgWrapper>
  );
}
