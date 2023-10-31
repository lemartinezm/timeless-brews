interface MenuSvgProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  viewBox?: string;
}

export default function MenuSvg({
  width = "24",
  height = "24",
  color = "black",
  viewBox = "0 0 24 24",
}: MenuSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      color={color}
    >
      <path
        fill="currentColor"
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      />
    </svg>
  );
}
