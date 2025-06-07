export interface Example {
  id: number;
  name: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  label: string;
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}