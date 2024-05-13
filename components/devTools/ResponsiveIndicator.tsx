export const ResponsiveIndicator = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className='fixed bottom-1 left-1 z-50 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground'>
        <p className='block sm:hidden'>xs</p>
        <p className='block sm:hidden'>&lt; 640</p>
        <p className='hidden sm:block md:hidden'>sm</p>
        <p className='hidden sm:block md:hidden'>640~768</p>
        <p className='hidden md:block lg:hidden'>md</p>
        <p className='hidden md:block lg:hidden'>768~1024</p>
        <p className='hidden lg:block xl:hidden'>lg</p>
        <p className='hidden lg:block xl:hidden'>1024~1280</p>
        <p className='hidden xl:block 2xl:hidden'>xl</p>
        <p className='hidden xl:block 2xl:hidden'>1280~1536</p>
        <p className='hidden 2xl:block'>2xl</p>
        <p className='hidden 2xl:block'>&gt; 1536</p>
      </div>
    )
  }
  return null
}
