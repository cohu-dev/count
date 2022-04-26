import { abouts, contacts, legals } from '@/constants/footer'
import { FrontURL } from '@/constants/urls'
import { GetServerSidePropsContext } from 'next'

const generateSitemapXml = async (): Promise<string> => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
  // TODO date
  abouts.forEach((p) => {
    xml += `
            <url>
              <loc>${FrontURL}${p.href}</loc>
              <lastmod>2022-02-25</lastmod>
              <changefreq>weekly</changefreq>
            </url>
          `
  })

  legals.forEach((p) => {
    xml += `
            <url>
              <loc>${FrontURL}${p.href}</loc>
              <lastmod>2022-02-25</lastmod>
              <changefreq>weekly</changefreq>
            </url>
          `
  })

  contacts.forEach((p) => {
    xml += `
            <url>
              <loc>${FrontURL}${p.href}</loc>
              <lastmod>2022-02-25</lastmod>
              <changefreq>weekly</changefreq>
            </url>
          `
  })

  xml += `</urlset>`
  return xml
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml()
  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)
  return {
    props: {},
  }
}

const Page = () => null

export default Page
