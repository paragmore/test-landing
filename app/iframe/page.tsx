export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <iframe
          id="surface-iframe"
          src="https://dev.withsurface.com/s/cmhmh2ibp000xl40b0ynyiupg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
}
