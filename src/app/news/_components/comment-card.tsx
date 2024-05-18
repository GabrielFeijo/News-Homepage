import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { faker } from '@faker-js/faker';
import { Comment } from '@prisma/client';
import { memo } from 'react';

const CommentCard = ({ comment }: { comment: Comment }) => {
	return (
		<div className='flex gap-2 items-center border p-2'>
			<Avatar className='size-14 rounded-lg object-cobver'>
				<AvatarImage
					src={faker.image.urlLoremFlickr({ category: 'cats' })}
					className='rounded-lg'
				/>
				<AvatarFallback className='rounded-lg bg-secondary text-secondary font-medium'>
					GG
				</AvatarFallback>
			</Avatar>

			<section>
				<h2 className='font-medium'>{faker.person.fullName()}</h2>
				<p>{comment.comment}</p>
			</section>
		</div>
	);
};

export default memo(CommentCard);
