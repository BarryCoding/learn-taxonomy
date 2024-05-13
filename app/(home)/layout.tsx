export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container z-40 flex h-20 items-center justify-between bg-background py-6'>
        {/* TODO: nav */}
        {/* TODO: login */}
      </header>
      <main className='flex-1'>{children}</main>
      {/* TODO: footer */}
    </div>
  )
}
