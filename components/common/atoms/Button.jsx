export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-[1.5rem] py-[0.75rem] rounded-[0.5rem] ml-[1.5rem] font-semibold leading-6 text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}