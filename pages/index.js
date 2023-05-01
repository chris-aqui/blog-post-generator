import Link from "next/link";
import Image from 'next/image';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";

export default function Home() {
  const { user } = useUser();
  useEffect(() => {
    console.log('###-User ', user)
  }, [user])

  return (
    <div>
      <h1>HomePage</h1>
      <div>
        <p>
          The AI-powered SAAS solution to generate SEO-optimized blog posts in
          minutes. Get high-quality content, without sacrificing your time.
        </p>
        {!!user ? (
          <>
            <Image src={user.picture} alt={user.name} height={50} width={50} />
            <h1> Hello {user.nickname} @ {user.email} </h1>
            <Link href="/api/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )
        }
      </div>
    </div>
  );
}


// import Image from 'next/image';
// import Link from 'next/link';
// import { Logo } from '../components/Logo';
// import HeroImage from '../public/hero.webp';

// export default function Home() {
//   return (
//     <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
//       <Image src={HeroImage} alt="Hero" fill className="absolute" />
//       <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
//         <Logo />
//         <p>
//           The AI-powered SAAS solution to generate SEO-optimized blog posts in
//           minutes. Get high-quality content, without sacrificing your time.
//         </p>
//         <Link href="/post/new" className="btn text-left">
//           Begin
//         </Link>
//       </div>
//     </div>
//   );
// }
