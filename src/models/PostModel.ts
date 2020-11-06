import {CommentModel} from './CommentModel';

export class PostModel{
  post: {
    id: number;
    views: number;
    likes: number;
    dislikes: number;
    popularity: number;
    title: string;
    description: string;
    htmlTemplate: string;
    imageURL: string;
    section: string;
    timestamp: string;
    comments: CommentModel[];
  };

  userLevel: number;
  userReputation: number;
  username: string;
  userDescription: string;
  userImageUrl: string;
}
