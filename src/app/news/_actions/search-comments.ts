'use server';

import { db } from '@/lib/prisma';

export const searchForComments = async ({ postId }: { postId: string }) => {
	const comment = await db.comment.findMany({
		where: { postId },
	});

	return comment;
};
