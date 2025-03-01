export default function MenuButton() {
  return (
    <button className="relative flex size-xl items-center justify-center text-xl">
      <div className="flex size-xl items-center justify-center text-background">
        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.890625 1.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
          <path d="M0.890625 9.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
          <path d="M0.890625 17.5H24.8906" stroke="currentColor" strokeWidth="3"></path>
        </svg>
      </div>
    </button>
  );
}