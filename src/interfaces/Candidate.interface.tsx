export interface Candidate {
  login: string;
  name: string;
  username: string;
  avatar_url: string;
  html_url: string;
  email: string;
  blog: string;
  twitter_username: string | null;
  company: string;
  location: string;
  hireable: boolean | null;
  bio: string | null;
}