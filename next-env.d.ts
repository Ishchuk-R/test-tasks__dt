/// <reference types="next" />
/// <reference types="next/types/global" />

interface Post {
  id: number;
  title: string;
  body?: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  postId: number;
  body: string;
}

type ButtonType = 'button' | 'submit' | 'reset';

type InputType = 'text' | 'number' | 'email' | 'tel' | 'url' | 'password';
