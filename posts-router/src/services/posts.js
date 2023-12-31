import httpService from "./httpService";

httpService.setCommonHeader("secret", process.env.NEXT_PUBLIC_API_SECRET);

export function getPosts(userId, userWatching ){

const path = userId
  ? `/posts/?user-id=${userId}`
  : `/posts/?user-watching=${userWatching}`;
  return httpService.get(path);
}

export async function getPost(postId) {
 return httpService.get(`/posts/${postId}`);
}

export function savePost(post){
   return httpService.post('/posts',post);
}

export function updatePost(postId, newPost){
   return httpService.put(`/posts/${postId}`,newPost);
}

export function deletePost(postId) {
 return httpService.delete(`/posts/${postId}`);
}


