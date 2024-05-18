const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
	// Criação de usuários
	const users = await prisma.user.createMany({
		data: [
			{ email: 'john.doe@example.com', name: 'John Doe' },
			{ email: 'jane.smith@example.com', name: 'Jane Smith' },
			{ email: 'robert.brown@example.com', name: 'Robert Brown' },
			{ email: 'emily.davis@example.com', name: 'Emily Davis' },
			{ email: 'michael.wilson@example.com', name: 'Michael Wilson' },
		],
	});

	console.log('Created users:', users);

	// Obtenção dos usuários criados para associar aos posts
	const createdUsers = await prisma.user.findMany();

	// Criação de posts
	const posts = await Promise.all([
		prisma.post.create({
			data: {
				slug: 'global-warming',
				title: 'Global Warming: An Imminent Threat',
				description:
					'Scientists warn that global warming is accelerating at an unprecedented rate.',
				imageURL: 'https://example.com/global-warming.jpg',
				category: 'HEALTH',
				authorId: createdUsers[0].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'tech-revolution',
				title: 'The Revolution in Technology',
				description:
					'New advancements in AI and machine learning are set to transform industries.',
				imageURL: 'https://example.com/tech-revolution.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'health-tips',
				title: '10 Tips for a Healthier Life',
				description:
					'Experts share their top tips for maintaining a healthy lifestyle.',
				imageURL: 'https://example.com/health-tips.jpg',
				category: 'HEALTH',
				authorId: createdUsers[2].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'economic-outlook',
				title: 'Economic Outlook for 2024',
				description:
					'Economists predict a mixed outlook for the global economy in the coming year.',
				imageURL: 'https://example.com/economic-outlook.jpg',
				category: 'ECONOMY',
				authorId: createdUsers[3].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'space-exploration',
				title: 'The Future of Space Exploration',
				description:
					'NASA and private companies are planning new missions to Mars and beyond.',
				imageURL: 'https://example.com/space-exploration.jpg',
				category: 'SPACE',
				authorId: createdUsers[4].id,
			},
		}),
		// Novas notícias de tecnologia
		prisma.post.create({
			data: {
				slug: 'ai-in-healthcare',
				title: 'AI in Healthcare: Revolutionizing Patient Care',
				description:
					'AI technology is being increasingly used to improve patient outcomes and streamline healthcare processes.',
				imageURL: 'https://example.com/ai-in-healthcare.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'quantum-computing-breakthrough',
				title: 'Quantum Computing Breakthrough Achieved',
				description:
					'Researchers have made significant advances in quantum computing, potentially revolutionizing numerous industries.',
				imageURL: 'https://example.com/quantum-computing.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'cybersecurity-trends-2024',
				title: 'Top Cybersecurity Trends to Watch in 2024',
				description:
					'Experts discuss the emerging cybersecurity trends and threats that businesses need to be aware of.',
				imageURL: 'https://example.com/cybersecurity-trends.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: '5g-rollout',
				title: 'The Global Rollout of 5G: What to Expect',
				description:
					"The 5G network is set to transform communication and connectivity worldwide. Here's what you need to know.",
				imageURL: 'https://example.com/5g-rollout.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'future-of-virtual-reality',
				title: 'The Future of Virtual Reality: What Lies Ahead',
				description:
					'Virtual reality is set to become more immersive and widespread. Explore the future possibilities of VR technology.',
				imageURL: 'https://example.com/future-of-vr.jpg',
				category: 'TECH',
				authorId: createdUsers[1].id,
			},
		}),
		// Novas notícias de PC
		prisma.post.create({
			data: {
				slug: 'best-pc-builds-2024',
				title: 'The Best PC Builds for 2024',
				description:
					'A guide to the best PC builds for gaming, productivity, and more in 2024.',
				imageURL: 'https://example.com/best-pc-builds.jpg',
				category: 'PC',
				authorId: createdUsers[2].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'latest-gpu-releases',
				title: 'Latest GPU Releases: What You Need to Know',
				description:
					'An overview of the latest GPU releases and their performance benchmarks.',
				imageURL: 'https://example.com/latest-gpu-releases.jpg',
				category: 'PC',
				authorId: createdUsers[2].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'pc-gaming-trends-2024',
				title: 'PC Gaming Trends to Watch in 2024',
				description:
					'Upcoming trends in the PC gaming world that every gamer should be aware of.',
				imageURL: 'https://example.com/pc-gaming-trends.jpg',
				category: 'PC',
				authorId: createdUsers[2].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'building-budget-pc',
				title: 'Building a Budget PC: Tips and Tricks',
				description:
					'How to build a powerful PC on a budget without sacrificing performance.',
				imageURL: 'https://example.com/building-budget-pc.jpg',
				category: 'PC',
				authorId: createdUsers[2].id,
			},
		}),
		prisma.post.create({
			data: {
				slug: 'pc-hardware-upgrades-2024',
				title: 'Top PC Hardware Upgrades for 2024',
				description:
					'The best hardware upgrades to keep your PC running at peak performance in 2024.',
				imageURL: 'https://example.com/pc-hardware-upgrades.jpg',
				category: 'PC',
				authorId: createdUsers[2].id,
			},
		}),
	]);

	console.log('Created posts:', posts);

	// Obtenção dos posts criados para associar aos comentários
	const createdPosts = await prisma.post.findMany();

	// Criação de comentários
	const comments = await Promise.all([
		prisma.comment.create({
			data: {
				comment: 'This is a very insightful article!',
				postId: createdPosts[0].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'I am very concerned about global warming.',
				postId: createdPosts[0].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'The advancements in AI are truly fascinating.',
				postId: createdPosts[1].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'I need to implement these health tips!',
				postId: createdPosts[2].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Thanks for the great economic insights.',
				postId: createdPosts[3].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Space exploration is the future!',
				postId: createdPosts[4].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'AI in healthcare is a game changer!',
				postId: createdPosts[5].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Quantum computing will change everything!',
				postId: createdPosts[6].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'Cybersecurity is more important than ever.',
				postId: createdPosts[7].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: "Can't wait for 5G to be everywhere!",
				postId: createdPosts[8].id,
			},
		}),
		prisma.comment.create({
			data: {
				comment: 'VR technology is so exciting!',
				postId: createdPosts[9].id,
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
