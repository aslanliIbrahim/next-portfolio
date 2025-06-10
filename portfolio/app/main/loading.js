export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-bgLight dark:bg-bgDark">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-textPrimary dark:border-textGray400"></div>
    </div>
  );
}