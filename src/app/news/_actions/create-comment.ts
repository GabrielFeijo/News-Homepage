'use server';

import { db } from '@/lib/prisma';

export const createNewComment = async ({
	message,
	postId,
}: {
	message: string;
	postId: string;
}) => {
	const comment = await db.comment.create({
		data: { comment: message, postId },
	});

	return comment;
};
