export type FullCardProps = {
  imageUrl?: string;
  username: string;
  userPhoto?: string;
  comments: PostComments;
};
export interface PostComments {
  username: string;
  message?: string;
  userPhoto?: string;
  replies?: PostComments[];
}
