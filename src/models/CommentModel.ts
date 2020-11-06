export class CommentModel {
  comment: {
    id: number;
    timestamp: string;
    commentText: string;
  };
  userLevel: number;
  userReputation: number;
  username: string;
  userDescription: string;
  userImageUrl: string;
}
