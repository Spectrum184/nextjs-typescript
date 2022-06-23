import '../styles/globals.css'
import { createEmotionCache, theme } from '@/utils/index'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import '../styles/index.css'
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
const clientSideEmotionCache = createEmotionCache()
const MyApp = (props: MyAppProps) => {
	const { Component, pageProps } = props
	const emotionCache = clientSideEmotionCache

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
