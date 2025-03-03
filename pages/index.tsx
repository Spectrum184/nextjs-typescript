import MainLayout from '@/components/Layout'
import HomePage from '@/containers/HomePage'
import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage />
		</MainLayout>
	)
}

export default Home
