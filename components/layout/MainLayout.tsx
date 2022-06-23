import Header from '../common/Header'
import Footer from '../common/Footer'
import React, { FC } from 'react'
import Stack from '@mui/material/Stack'

interface PropsType {
	children: React.ReactNode
}

const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<Stack minHeight={'100vh'}>
			<Header></Header>
			{children}
			<Footer></Footer>
		</Stack>
	)
}

export default MainLayout
