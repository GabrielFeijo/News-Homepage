const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
	// Criação de usuários
	const users = await prisma.user.createMany({
		data: [
			{
				id: '66482b6d5a047bdaff5e91bc',
				email: 'john.doe@example.com',
				name: 'John Doe',
			},
			{
				id: '66482b73c5beb10bca5f38f6',
				email: 'jane.smith@example.com',
				name: 'Jane Smith',
			},
			{
				id: '66482b76e4a6634c4a76ae12',
				email: 'robert.brown@example.com',
				name: 'Robert Brown',
			},
			{
				id: '66482b7b33b1831eb1b37a43',
				email: 'emily.davis@example.com',
				name: 'Emily Davis',
			},
			{
				id: '66482b8062c8b47cc8cf4c45',
				email: 'michael.wilson@example.com',
				name: 'Michael Wilson',
			},
		],
	});

	console.log('Created users:', users);

	const posts = await Promise.all([
		prisma.post.create({
			data: {
				id: '66482c778f962ef6ba135451',
				slug: 'global-warming',
				title: 'Global Warming: An Imminent Threat',
				description:
					'Scientists warn that global warming is accelerating at an unprecedented rate.',
				body: 'The effects of global warming are becoming increasingly evident as we witness more frequent and severe weather events, rising sea levels, and changing ecosystems. Scientists emphasize the urgent need for global cooperation to reduce greenhouse gas emissions and transition to sustainable energy sources. Without immediate action, the consequences could be catastrophic for future generations.',
				imageURL: 'https://example.com/global-warming.jpg',
				category: 'HEALTH',
				authorId: '66482b6d5a047bdaff5e91bc',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482c8163a1b1ded06ce510',
				slug: 'tech-revolution',
				title: 'The Revolution in Technology',
				description:
					'New advancements in AI and machine learning are set to transform industries.',
				body: 'The technological landscape is undergoing a dramatic transformation with the rise of artificial intelligence and machine learning. These advancements are revolutionizing industries by automating tasks, improving decision-making, and enhancing customer experiences. From healthcare to finance, AI is driving innovation and efficiency. As we move forward, it is crucial to address ethical considerations and ensure that these technologies are used responsibly.',
				imageURL: 'https://example.com/tech-revolution.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482c882ec867dc3be0efdf',
				slug: 'health-tips',
				title: '10 Tips for a Healthier Life',
				description:
					'Experts share their top tips for maintaining a healthy lifestyle.',
				body: 'Living a healthy life involves a combination of balanced diet, regular exercise, adequate sleep, and mental well-being. Experts recommend incorporating more fruits and vegetables into your diet, staying hydrated, and finding an exercise routine that you enjoy. Additionally, managing stress through mindfulness practices and maintaining social connections are key to overall well-being. Small, consistent changes can lead to significant improvements in health.',
				imageURL: 'https://example.com/health-tips.jpg',
				category: 'HEALTH',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482c90552e247b56423699',
				slug: 'economic-outlook',
				title: 'Economic Outlook for 2024',
				description:
					'Economists predict a mixed outlook for the global economy in the coming year.',
				body: 'The global economy is facing a period of uncertainty as we enter 2024. Factors such as geopolitical tensions, inflationary pressures, and the aftermath of the COVID-19 pandemic continue to influence economic performance. While some regions may experience growth driven by technological advancements and consumer spending, others may face challenges due to supply chain disruptions and labor market shifts. It is crucial for policymakers to navigate these complexities to foster economic stability and growth.',
				imageURL: 'https://example.com/economic-outlook.jpg',
				category: 'ECONOMY',
				authorId: '66482b7b33b1831eb1b37a43',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482c970616f98efb38d67c',
				slug: 'space-exploration',
				title: 'The Future of Space Exploration',
				description:
					'NASA and private companies are planning new missions to Mars and beyond.',
				body: 'Space exploration is entering an exciting new era with ambitious plans from both NASA and private companies like SpaceX. Upcoming missions aim to explore Mars, establish lunar bases, and even venture beyond our solar system. These efforts are driven by advancements in technology and a renewed interest in understanding our place in the universe. The future of space exploration holds great potential for scientific discovery, technological innovation, and human achievement.',
				imageURL: 'https://example.com/space-exploration.jpg',
				category: 'SPACE',
				authorId: '66482b8062c8b47cc8cf4c45',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482ca0b1cec8352b44fb09',
				slug: 'ai-in-healthcare',
				title: 'AI in Healthcare: Revolutionizing Patient Care',
				description:
					'AI technology is being increasingly used to improve patient outcomes and streamline healthcare processes.',
				body: 'Artificial intelligence is making significant strides in the healthcare sector by enhancing diagnostic accuracy, personalizing treatment plans, and improving patient outcomes. AI algorithms can analyze vast amounts of medical data to identify patterns and predict disease progression. Additionally, AI-powered tools are streamlining administrative tasks, allowing healthcare professionals to focus more on patient care. As AI continues to evolve, it holds the promise of transforming healthcare delivery and improving public health.',
				imageURL: 'https://example.com/ai-in-healthcare.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cabf59b0fdb0e02e2db',
				slug: 'quantum-computing-breakthrough',
				title: 'Quantum Computing Breakthrough Achieved',
				description:
					'Researchers have made significant advances in quantum computing, potentially revolutionizing numerous industries.',
				body: 'Quantum computing is poised to revolutionize various industries by solving complex problems that are beyond the capabilities of classical computers. Recent breakthroughs in quantum computing technology have brought us closer to practical applications in fields such as cryptography, material science, and drug discovery. These advances promise to accelerate innovation and open up new possibilities for scientific and technological progress.',
				imageURL: 'https://example.com/quantum-computing.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cb40e804dcf90e93edd',
				slug: 'cybersecurity-trends-2024',
				title: 'Top Cybersecurity Trends to Watch in 2024',
				description:
					'Experts discuss the emerging cybersecurity trends and threats that businesses need to be aware of.',
				body: 'As the digital landscape evolves, cybersecurity remains a critical concern for businesses and individuals alike. In 2024, emerging trends include the increasing use of artificial intelligence in cybersecurity, the growing threat of ransomware attacks, and the importance of securing remote work environments. Experts emphasize the need for proactive measures, continuous monitoring, and robust incident response plans to mitigate these threats and protect sensitive data.',
				imageURL: 'https://example.com/cybersecurity-trends.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cbbba794c639b86dff5',
				slug: '5g-rollout',
				title: 'The Global Rollout of 5G: What to Expect',
				description:
					"The 5G network is set to transform communication and connectivity worldwide. Here's what you need to know.",
				body: 'The rollout of 5G technology promises to revolutionize communication and connectivity by offering faster speeds, lower latency, and greater capacity. This next-generation network is expected to enable advancements in areas such as autonomous vehicles, smart cities, and the Internet of Things (IoT). As 5G infrastructure continues to expand globally, it will drive innovation and create new opportunities across various industries.',
				imageURL: 'https://example.com/5g-rollout.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482ccc960634db66bfe065',
				slug: 'future-of-virtual-reality',
				title: 'The Future of Virtual Reality: What Lies Ahead',
				description:
					'Virtual reality is set to become more immersive and widespread. Explore the future possibilities of VR technology.',
				body: 'Virtual reality (VR) technology is evolving rapidly, offering more immersive and interactive experiences. Future advancements in VR are expected to enhance fields such as gaming, education, and remote work by providing realistic simulations and environments. As VR hardware becomes more affordable and accessible, its adoption is likely to increase, paving the way for innovative applications and transformative experiences.',
				imageURL: 'https://example.com/future-of-vr.jpg',
				category: 'TECH',
				authorId: '66482b73c5beb10bca5f38f6',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cd54454d0b6edbdf8f6',
				slug: 'future-of-the-web-3-0',
				title: 'The Bright Future of Web 3.0?',
				description:
					'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
				body: 'Web 3.0 represents the next stage in the evolution of the internet, aiming to create a more decentralized and user-centric web. By leveraging blockchain technology and decentralized applications, Web 3.0 seeks to give users more control over their data and online interactions. However, challenges such as scalability, interoperability, and user adoption remain. While the potential is immense, realizing the full promise of Web 3.0 will require overcoming significant technological and societal hurdles.',
				imageURL: 'https://i.imgur.com/t7Ksoos.jpeg',
				category: 'TECH',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		// Novas notícias de PC
		prisma.post.create({
			data: {
				id: '66482ce9a41f31476e7d0603',
				slug: 'best-pc-builds-2024',
				title: 'The Best PC Builds for 2024',
				description:
					'A guide to the best PC builds for gaming, productivity, and more in 2024.',
				body: 'Building a PC tailored to your specific needs and budget can significantly enhance your computing experience. In 2024, the best PC builds for gaming, productivity, and creative work feature the latest processors, high-performance graphics cards, and fast storage solutions. Whether you are looking to build a top-tier gaming rig or a powerful workstation, this guide provides recommendations to help you make informed decisions.',
				imageURL: 'https://i.imgur.com/TT5krWL.jpeg',
				category: 'PC',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482ceec35486bef2e10c74',
				slug: 'latest-gpu-releases',
				title: 'Latest GPU Releases: What You Need to Know',
				description:
					'An overview of the latest GPU releases and their performance benchmarks.',
				body: 'The latest GPU releases offer significant improvements in performance, efficiency, and features. With advancements in ray tracing, AI-powered rendering, and enhanced gaming capabilities, these new graphics cards are designed to meet the demands of modern applications. This overview provides insights into the performance benchmarks and key specifications of the latest GPUs, helping you choose the best option for your needs.',
				imageURL: 'https://i.imgur.com/j1mh1ou.jpeg',
				category: 'PC',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cf16f3d6b11116de81f',
				slug: 'pc-gaming-trends-2024',
				title: 'PC Gaming Trends to Watch in 2024',
				description:
					'Upcoming trends in the PC gaming world that every gamer should be aware of.',
				body: 'The PC gaming landscape is constantly evolving, with new trends shaping the way games are developed and played. In 2024, key trends include the rise of cloud gaming, the increasing popularity of VR and AR games, and advancements in AI-driven game mechanics. Additionally, the growing emphasis on cross-platform play and community-driven content is transforming the gaming experience. Staying informed about these trends can help gamers and developers stay ahead of the curve.',
				imageURL: 'https://i.imgur.com/oCUf3d7.jpeg',
				category: 'PC',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cf5c47586f0e21df588',
				slug: 'building-budget-pc',
				title: 'Building a Budget PC: Tips and Tricks',
				description:
					'How to build a powerful PC on a budget without sacrificing performance.',
				body: 'Building a budget PC that delivers great performance requires careful planning and smart choices. By focusing on key components such as the CPU, GPU, and memory, you can create a system that meets your needs without breaking the bank. This guide provides tips and tricks for selecting cost-effective parts, optimizing performance, and avoiding common pitfalls. With the right approach, you can build a powerful PC on a budget.',
				imageURL: 'https://i.imgur.com/TT5krWL.jpeg',
				category: 'PC',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
		prisma.post.create({
			data: {
				id: '66482cfa9e940209fbda31c3',
				slug: 'pc-hardware-upgrades-2024',
				title: 'Top PC Hardware Upgrades for 2024',
				description:
					'The best hardware upgrades to keep your PC running at peak performance in 2024.',
				body: 'Upgrading your PC hardware is essential to ensure optimal performance and longevity. In 2024, the top hardware upgrades include the latest processors, high-speed SSDs, and powerful graphics cards. Additionally, upgrading your cooling solutions and power supply can enhance system stability and efficiency. This guide highlights the best upgrades to keep your PC running smoothly and efficiently in the coming year.',
				imageURL: 'https://i.imgur.com/oCUf3d7.jpeg',
				category: 'PC',
				authorId: '66482b76e4a6634c4a76ae12',
			},
		}),
	]);

	console.log('Created posts:', posts);

	// Criação de comentários
	const comments = await Promise.all([
		prisma.comment.create({
			data: {
				comment: 'This is a very insightful article!',
				postId: '66482c778f962ef6ba135451',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'I am very concerned about global warming.',
				postId: '66482c778f962ef6ba135451',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'The advancements in AI are truly fascinating.',
				postId: '66482c8163a1b1ded06ce510',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'I need to implement these health tips!',
				postId: '66482c882ec867dc3be0efdf',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Thanks for the great economic insights.',
				postId: '66482c90552e247b56423699',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Space exploration is the future!',
				postId: '66482c970616f98efb38d67c',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'AI in healthcare is a game changer!',
				postId: '66482ca0b1cec8352b44fb09',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Quantum computing will change everything!',
				postId: '66482cabf59b0fdb0e02e2db',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Cybersecurity is more important than ever.',
				postId: '66482cb40e804dcf90e93edd',
			},
		}),
		prisma.comment.create({
			data: {
				comment: "Can't wait for 5G to be everywhere!",
				postId: '66482cbbba794c639b86dff5',
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'VR technology is so exciting!',
				postId: '66482ccc960634db66bfe065',
			},
		}),
		prisma.comment.create({
			data: {
				comment:
					"Web 3.0 represents a new era of internet freedom. I'm hopeful that it will lead to a more inclusive and democratic online space",
				postId: '66482cd54454d0b6edbdf8f6',
			},
		}),
		prisma.comment.create({
			data: {
				comment:
					"I'm skeptical about the promises of Web 3.0. Will it truly empower users, or will it just create new forms of centralization?",
				postId: '66482cd54454d0b6edbdf8f6',
			},
		}),
		prisma.comment.create({
			data: {
				comment:
					'I believe Web 3.0 has the potential to level the playing field and promote innovation. But we need to address issues like scalability and usability.',
				postId: '66482cd54454d0b6edbdf8f6',
			},
		}),
	]);

	console.log('Created comments:', comments);
};

main()
	.then(() => {
		console.log('Seed do banco de dados realizado com sucesso!');
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
