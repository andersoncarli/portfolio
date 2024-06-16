import Link from 'next/link'

export default function AboutPage() {
  return (
    <section className="py-20">
      <h2>About Me</h2>
      <p>I am a seasoned software engineer with a passion for building efficient and scalable web applications.</p>
      <p>This portfolio was built using NextJS, TailwindCSS and is hosted at Vercel.</p>
      <p>You can access its souce code <strong><Link href="https://github.com/andersoncarli/portfolio">Here</Link></strong></p>
    </section>
  );
}
