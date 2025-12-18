"use client ";

import { create } from "zustand";

type PostMetrics = {
  hasLiked: boolean;
  commentsCount: number;
  likesCount: number;
  sharesCount: number;
  repostsCount: number;
};

type PostStore = {
  posts: Record<string, PostMetrics>;

  setHasLiked: (postId: string, hasLiked: boolean) => void;

  initPost: (postId: string, metrics: PostMetrics) => void;
  incLikes: (postId: string) => void;
  incComments: (postId: string) => void;
  incReposts: (postId: string) => void;
  incShares: (postId: string) => void;

  decLikes: (postId: string) => void;
  decComments: (postId: string) => void;
  decReposts: (postId: string) => void;
  decShares: (postId: string) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: {},

  initPost: (postId, metrics) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: state.posts[postId] ?? metrics,
      },
    }));
  },

  setHasLiked: (postId, hasLiked) => {  
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          hasLiked,
        },
      },
    }));
  },

  incLikes: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          likesCount: state.posts[postId].likesCount + 1,
        },
      },
    }));
  },

  incComments: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          commentsCount: state.posts[postId].commentsCount + 1,
        },
      },
    }));
  },

  incShares: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          sharesCount: state.posts[postId].sharesCount + 1,
        },
      },
    }));
  },

  incReposts: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          repostsCount: state.posts[postId].repostsCount + 1,
        },
      },
    }));
  },

  decLikes: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          likesCount: state.posts[postId].likesCount - 1,
        },
      },
    }));
  },

  decComments: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          commentsCount: state.posts[postId].commentsCount - 1,
        },
      },
    }));
  },

  decShares: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          sharesCount: state.posts[postId].sharesCount - 1,
        },
      },
    }));
  },

  decReposts: (postId) => {
    set((state) => ({
      posts: {
        ...state.posts,
        [postId]: {
          ...state.posts[postId],
          repostsCount: state.posts[postId].repostsCount - 1,
        },
      },
    }));
  },
}));
