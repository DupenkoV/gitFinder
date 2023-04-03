export type GitHubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string | null,
    company: string | null,
    blog: string,
    location: string | null,
    bio: string | null,
    twitter: string | null,
    repos: number,
    followers: number,
    following: number,
    created: string
}

export type GitHubError = {
    message: string,
    documentation_url: string,
}

export type LocalGitHubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string | null,
    company: string | null,
    blog: string,
    location: string | null,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
}