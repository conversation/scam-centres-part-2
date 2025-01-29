import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Tweet1() {
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })

    observer.observe(document.querySelector('.tweet1')!)

    window.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <div className='tweet1 flex w-[min(100%,750px)] justify-center'>
      <blockquote className='twitter-tweet'>
        <p lang='en' dir='ltr'>
          Australian police warned students of Chinese backgrounds to be aware of a &#39;virtual kidnapping&#39; scam
          that has obtained millions in payments from unsuspecting victims{' '}
          <a href='https://t.co/bV2PR5EaX0'>https://t.co/bV2PR5EaX0</a>{' '}
          <a href='https://t.co/y7ZRNhljbx'>pic.twitter.com/y7ZRNhljbx</a>
        </p>
        &mdash; Reuters (@Reuters){' '}
        <a href='https://twitter.com/Reuters/status/1288042763943120896?ref_src=twsrc%5Etfw'>July 28, 2020</a>
      </blockquote>{' '}
    </div>
  )
}
