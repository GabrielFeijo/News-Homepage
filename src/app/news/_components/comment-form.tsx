'use client';
import { useRef } from 'react';
import { Button } from '../../../components/ui/button';
import TextArea from './textarea';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { createNewComment } from '@/app/news/_actions/create-comment';
import { Comment } from '@prisma/client';

interface FormData {
	comment: string;
}

const CommentForm = ({
	addNewComment,
	postId,
}: {
	addNewComment: (comment: Comment) => void;
	postId: string;
}) => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit: SubmitHandler<FormData> = async (data) => {
		if (!data.comment) return;

		const comment = await createNewComment({
			message: data.comment,
			postId,
		});

		addNewComment(comment);

		formRef.current?.reset();
	};

	return (
		<Form
			ref={formRef}
			onSubmit={handleSubmit}
			className='space-y-2 border p-4 text-right rounded-lg'
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<TextArea
				className='rounded-lg w-full resize-none outline-none'
				placeholder='Write your comment...'
				rows={3}
				name='comment'
			/>
			<Button type='submit'>Comment</Button>
		</Form>
	);
};

export default CommentForm;
