export function Logo(): JSX.Element {
  return (
    <div className="w-20 h-full flex items-center justify-center">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width={0}
        version="1.1"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-contrast text-2xl flex items-center justify-center"
      >
        <path d="M6 0l-6 8h6l-4 8 14-10h-8l6-6z" />
      </svg>
    </div>
  );
}
