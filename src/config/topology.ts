interface ITopology {
    production: {
        gitHubRepos: string;
        baseUrl: string;
    };
    development: {
        baseUrl: string;
        gitHubRepos: string;
    };
}
const topology = () => {
    const links: ITopology = {
        production: {
            baseUrl: 'https://api.github.com',
            gitHubRepos: 'https://api.github.com/users/alonzo245/repos',
        },
        development: {
            baseUrl: 'http://localhost:3000',
            gitHubRepos: '/developer-portfolio-assignment/data/repos.json',
        },
    };

    const env = process.env.NODE_ENV;
    return links[env as keyof ITopology];
};

export default topology;
