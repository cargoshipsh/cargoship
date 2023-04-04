export function ContentWrapper({ children }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Main content */}
      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
