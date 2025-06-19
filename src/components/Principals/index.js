'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const principals = [
	{
		name: 'Zinsser',
		logo: '/assets/Principals/Zinsser.png',
		website: 'https://www.zinsser-analytic.com/en',
	},
	{
		name: 'SEAL Analytics',
		logo: '/assets/Principals/SealAnalytics.png',
		website: 'https://seal-analytical.com/en/',
	},
	{
		name: 'HTI Smart Automation',
		logo: '/assets/Principals/HTI.png',
		website: 'https://hti-automation.com/en/',
	},
	{
		name: 'LlamaJET',
		logo: '/assets/Principals/LlamaJet.png',
		website: 'https://llamajet.com/',
	},
	{
		name: 'WaterID',
		logo: '/assets/Principals/WaterID.png',
		website: 'https://primelab.org/',
	},
];

const Principals = () => {
	return (
		<section id='principals' className={styles.principalsSection}>
			<motion.div
				className={styles.container}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className={styles.title}>Our Key Principals</h2>
				<div className={styles.logosContainer}>
					{principals.map((principal, index) => (
						<motion.div
							key={principal.name}
							className={styles.logoWrapper}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<a
								href={principal.website}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.logoLink}
							>
								<Image
									src={principal.logo}
									alt={`${principal.name} logo`}
									width={200}
									height={100}
									className={styles.logo}
									style={{ objectFit: 'contain' }}
								/>
							</a>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Principals;