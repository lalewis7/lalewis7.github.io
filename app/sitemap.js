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
            url: 'https://arthurlewis.net/resume/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    ]
}