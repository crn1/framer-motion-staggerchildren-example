import Layout from '../components/Layout'

import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { motion } from 'framer-motion'

const Container = styled(motion.div)({
	width: 200,
	height: 200,
	padding: 15,
	borderRadius: 50,
	background: 'rgba(255, 255, 255, 0.5)',
	lineHeight: 0,
})

const Item = styled(motion.div)({
	width: 75,
	height: 75,
	margin: 5,
	borderRadius: '100%',
	backgroundColor: '#FFFFFF',
	display: 'inline-block',
})

const containerVariants = {
	hidden: {
		opacity: 0, scale: 0, rotate: 60,
	},
	visible: {
		opacity: 1, scale: 1, rotate: 0,
		transition: {
			delay: 0.7,
			duration: 0.2,
			when: 'beforeChildren',
			staggerChildren: 0.1,
		}
	},
}

const itemVariants = {
	hidden: {
		opacity: 0, y: 20,
	},
	visible: {
		opacity: 1, y: 0,
	},
}

const MainTypography = styled(Typography)({
	color: '#FFFFFF',
})

const Index = () => (
	<Layout>
		<Grid container item
				xs={12} md={6} lg={5} xl={4}
				spacing={4}
				alignItems='center'
				justify='center'
				alignContent='center'
		>
			<Grid item>
				<Container
						variants={containerVariants}
						initial='hidden'
						animate='visible'
				>
					{[0, 1, 2, 3].map(index => (
						<Item key={index} variants={itemVariants} />
					))}
				</Container>	
			</Grid>
			<Grid item>
				<motion.div
					initial={{ opacity: 0, }}
					animate={{ opacity: 1, }}
					transition={{ delay: 1.5 }}
				>
					<MainTypography variant='h4'>
						YourWebApp
					</MainTypography>
				</motion.div>
			</Grid>
		</Grid>
	</Layout>
);

export default Index
