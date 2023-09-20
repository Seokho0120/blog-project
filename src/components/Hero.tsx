import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Prictures of the author'
        width={250}
        height={250}
        priority
        // 홈페이지에서 가장 상징적이고 먼저 보여줘야하기 때문에(브랜드 이미지) priority 속성 사용 -> nextjs에서 가장 먼저 다운받음
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm River"}</h2>
      <h3 className='text-xl font-semibold'>Fronted Developer</h3>
      <p>이직준비 빡쎄다 열심히 하자!</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
