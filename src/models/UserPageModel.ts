import {PostModel} from './PostModel';

export class UserPageModel{
  id: number;
  level: number;
  reputation: number;
  username: string;
  description: string;
  htmlTemplate: string;
  imageUrl: string;
  registrationDate: string;
  // posts: PostModel[];
}
