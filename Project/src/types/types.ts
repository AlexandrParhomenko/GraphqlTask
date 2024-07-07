export interface GithubData {
    incomplete_results: boolean
    items: GithubDataItems[]
    total_count: number

}

export interface GithubDataItems {
    full_name: string
    stargazers_count: string
    updated_at: string
    owner: Owner
    language: string
    description: string
}

export interface Owner {
    html_url: string
    avatar_url: string
    login: string
}