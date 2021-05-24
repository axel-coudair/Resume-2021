import Header from '../components/Header'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
      <Layout title="Axel Coudair | Développeur Full stack">
        <Header className="fixed"></Header>
      </Layout>
  )
}
