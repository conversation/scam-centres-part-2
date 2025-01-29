import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function PigButcheringSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const messageInitialRef = useRef<HTMLDivElement[]>([])
  const messageDigitalCurrencyRef = useRef<HTMLDivElement[]>([])
  const messageFinalRef = useRef<HTMLDivElement[]>([])

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const messagesBubbles = [messageInitialRef.current, messageDigitalCurrencyRef.current, messageFinalRef.current]

      messagesBubbles.forEach((messageGroup) => {
        messageGroup.forEach((message) => {
          ScrollTrigger.create({
            trigger: message,
            start: 'top 70%',
            end: 'bottom bottom',
            onEnter: () => {
              message.classList.add('make_visible')
            },
            onLeaveBack: () => {
              message.classList.remove('make_visible')
            }
          })
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef}>
      <figure className='not-prose my-10' id='message_bubbles_initial'>
        <div className='mx-auto max-w-[600px] px-8 font-base'>
          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'
          >
            <p>Hello, are you the person Anna recommended to do the translation service for me?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:56 am</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'
          >
            <p>No, sorry, I do not know Anna and cannot do translation.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:56 am</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>
              No way, it is so important, how did Anna mess this up. I told her that I need a Cantonese speaker for
              today’s conference. Do you have time?
            </p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:56 am</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>
              Sorry again, but I really do not know this Anna, and I've never done a translation job, you are talking to
              the wrong person.
            </p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:57 am</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Oh, so sorry, you are not Jia Li?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:57 am</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>No, I am not Jia Li, you've got wrong number.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:57 am</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>I am so sorry, please accept my apologisies for this.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>9:57 am</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Have a nice day!</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:01 am</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageInitialRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Thank you, you too! I am so lucky you are such a nice person and didn't mind my rudeness.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:01 am</p>
            </div>
          </div>
        </div>
      </figure>

      <p>One day after this innocuous exchange the scammer got back in touch...</p>

      <figure className='not-prose mx-auto my-10 max-w-[600px] px-8 font-base'>
        <div className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'>
          <p>
            I did my conference successfully despite the small translation problem. Again, apologisies for talking so
            rudely to you and the inconvenience. How was your day? It is my first time in Hong Kong, I'm just so excited
            to e-meet you because of that "accident".
          </p>
          <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
            <p>12:04 pm</p>
          </div>
        </div>
      </figure>

      <p>
        Then the scammer began messaging the victim daily, sharing details of his life. Over the course of 2-3 months,
        they became quite close. The scammer presented himself as a succesful investor in cryptocurrency, futures
        contracts, and similar ventures – he even shared a photo.
      </p>

      <figure className='not-prose mx-auto my-10 max-w-[600px] px-8 font-base'>
        <div className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'>
          <img
            className='mb-4 rounded-md'
            loading='eager'
            alt=''
            sizes='(max-width: 599px) 100vw, (min-width: 600px) 750px, 800px'
            srcSet='
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=1  600w,
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=30&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=2 1200w,
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=15&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=3 1800w,
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=1  754w,
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=30&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=2 1508w,
          https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=15&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=3 2262w
        '
            src='https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=clip'
          />

          <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
            <p>2:43 pm</p>
          </div>
        </div>
      </figure>

      <p>As their relationship deepened, the scammer encouraged the victim to invest with him.</p>

      <figure className='not-prose my-10' id='message_bubbles_digital_currency'>
        <div className='mx-auto max-w-[600px] px-8 font-base'>
          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'
          >
            <p>The recent market of digital currency is relatively good. I am operating digital currency.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>12:04 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Are you ready to operate digital currency?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>12:05 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble my-8 grid w-full place-items-center'
          >
            <div className='loader'></div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Let me think about it for a few days.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:22 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>I don't understand, what's the point of considering this?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:22 pm</p>
            </div>
          </div>
          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>It's not a bad thing after all.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:22 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>It's ok, I'm not in a hurry.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>I'm not saying whether it's urgent or not.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>
            </div>
          </div>
          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>But I think you are suspicious of me.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:24 pm</p>
            </div>
          </div>
          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>I'm a bit blunt.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:24 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Don't like beating around the bush.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:24 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Yes.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:24 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble my-8 grid w-full place-items-center'
          >
            <div className='loader'></div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>
              I don't know why you're causing issues over something so small. It's affecting our relationship, and I
              feel something's wrong between us.
            </p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>1:19 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>
              I've already told you, if you deposit three to five thousand, I'll help you make a profit, and I’ll prove
              what I said before. The misunderstanding between us will disappear.
            </p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>1:20 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageDigitalCurrencyRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Ok, you can introduce me to your clients.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>1:20 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>
        </div>
      </figure>

      <p>
        After the victim invested her money, she soon realised that she couldn't withdraw her so-called 'profits'. She
        reported this issue to the scammer.
      </p>

      <figure className='not-prose my-10' id='message_bubbles_final'>
        <div className='mx-auto max-w-[600px] px-8 font-base'>
          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 opacity-100 drop-shadow-lg'
          >
            <p>I can't withdraw it, so I'll ask them to refund it.</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:22 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>How is it possible that it can't be withdrawn?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:22 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Awkward, huh?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>
              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p className='text-5xl'>😲</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_left relative mb-2 mr-auto rounded-b-lg rounded-r-lg bg-neutral-50 p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>Are you messing with me?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <img
              className='mb-4 rounded-md'
              loading='eager'
              alt=''
              sizes='(max-width: 599px) 100vw, (min-width: 600px) 750px, 800px'
              srcSet='
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=1  600w,
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=30&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=2 1200w,
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=15&amp;auto=format,compress&amp;cs=srgb&amp;w=600&amp;fit=crop&amp;dpr=3 1800w,
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=1  754w,
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=30&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=2 1508w,
            https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=15&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=crop&amp;dpr=3 2262w
          '
              src='https://images.theconversation.com/files/617433/original/file-20240905-20-r0bpnm.jpg?ixlib=rb-4.1.0&amp;q=45&amp;auto=format,compress&amp;cs=srgb&amp;w=754&amp;fit=clip'
            />
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>

          <div
            ref={(el) => el && messageFinalRef.current.push(el)}
            className='message_bubble message_bubble_right relative my-4 ml-auto rounded-b-lg rounded-l-lg bg-[#e2ffc7] p-3 pb-5 text-neutral-900 drop-shadow-lg'
          >
            <p>See?</p>
            <div className='absolute bottom-1 right-2 flex gap-1 text-sm text-neutral-400'>
              <p>10:23 pm</p>

              <img
                className='inline w-5'
                loading='eager'
                data-path='files/617201/original/file-20240904-16-xvj31z.png'
                alt=''
                data-params='{}'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>
        </div>
      </figure>

      <p>Predictably, the scammer then cut all ties and deleted her from his contacts.</p>
    </section>
  )
}
