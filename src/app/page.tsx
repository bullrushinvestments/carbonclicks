import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CarbonClicks',
  description: 'A micro-SaaS platform that helps e-commerce businesses and content creators measure their carbon footprint and offers sustainable solutions to reduce it, integrating with popular shopping carts like Shopify.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">CarbonClicks</h1>
      <p className="mt-4 text-lg">A micro-SaaS platform that helps e-commerce businesses and content creators measure their carbon footprint and offers sustainable solutions to reduce it, integrating with popular shopping carts like Shopify.</p>
    </main>
  )
}
