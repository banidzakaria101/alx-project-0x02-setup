import Header from "@/components/layout/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Project</title>
      </Head>
      <Header />
        <main className="p-4">
          <h1 className="text-3xl font-bold">Welcome To My Next.js Project</h1>
        </main>
    </>
  )
}