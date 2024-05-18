'use client';
import { useEffect, useState } from 'react';
import CommentForm from './comment-form';
import { Comment } from '@prisma/client';
import { searchForComments } from '@/app/news/_actions/search-comments';
import CommentCard from './comment-card';

const Comments = ({ postId }: { postId: string }) => {
	const [comments, setComments] = useState<Comment[]>([]);

	const addNewComment = (comment: Comment) => {
		setComments((prev) => [comment, ...prev]);
	};

	useEffect(() => {
		const fetchComments = async () => {
			if (!postId) return;

			const comments = await searchForComments({ postId });
			setComments(comments);
		};

		fetchComments();
	}, [postId]);

	return (
		<section className='space-y-4'>
			<h2 className='text-3xl font-bold text-slate-800'>Comments</h2>

			<CommentForm
				addNewComment={addNewComment}
				postId={postId}
			/>

			{comments.map((comment) => (
				<CommentCard
					comment={comment}
					key={comment.id}
				/>
			))}
		</section>
	);
};

export default Comments;
