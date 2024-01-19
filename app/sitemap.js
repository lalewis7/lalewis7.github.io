import config from '@/config'

export default function sitemap() {
    return [
        {
            url: 'https://arthurlewis.net',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://arthurlewis.net/about/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority:1,
        },
        {
            url: 'https://arthurlewis.net/portfolio/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://arthurlewis.net/resume/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...config.projects.map(project => ({
            url: `https://arthurlewis.net/portfolio/${project.pathname}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority:1,
        }))
    ]
}