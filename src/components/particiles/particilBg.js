'use client';
import { Engine } from '@tsparticles/engine'; // Check if this import is necessary
import { useCallback } from 'react';
import Particles from 'react-tsparticles'; // Ensure correct import
import { loadFull } from 'tsparticles'; // Ensure correct import

export default function ParticleBg() {
	const particlesInit = useCallback(async main => {
		console.log(main); // Debug: Check what 'main' is
		await loadFull(main);
	}, []);

	const particlesLoad = useCallback(container => {
		console.log(container); // Debug: Check if the container is loaded correctly
	}, []);

	return (
		<Particles
			className='w-full h-full absolute translate-x-0 z-0'
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoad}
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: '',
					},
				},
				fpsLimit: 130,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 150,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#68e2e',
					},
					links: {
						color: '#09f7d3',
						distance: 150,
						enable: true,
						opacity: 0.6,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 120,
					},
					opacity: {
						value: 0.8,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
