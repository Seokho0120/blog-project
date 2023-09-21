import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '석호에게 메일 보내기',
};

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/Seokho0120' },
  { icon: <AiFillLinkedin />, url: 'https://github.com/Seokho0120' },
  { icon: <AiFillYoutube />, url: 'https://github.com/Seokho0120' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>seokho0120@gamil.com</p>
      <ul className='flex gap-5 my-2'>
        {LINKS.map((link, index) => (
          <a
            href={link.url}
            target='_blank'
            rel='noreferrer'
            key={index}
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
