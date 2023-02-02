export function Logo(): JSX.Element {
  return (
    <div className='flex h-full w-20 items-center justify-center'>
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth={0}
        version='1.1'
        viewBox='0 0 16 16'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
        className='flex items-center justify-center text-2xl text-primary-contrast'
      >
        <path d='M6 0l-6 8h6l-4 8 14-10h-8l6-6z' />
      </svg>
    </div>
  );
}
