import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.fernandaseib.com.br', // Substitua pelo seu domínio final
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}