import NextHeadSeo from 'next-head-seo'
import { serviceName } from '../../constants/service'
import { FrontURL } from '../../constants/urls'

// types
export type Props = {
  path: string
  title?: string
  description?: string
  ogImagePath?: string
  noindex?: boolean
  noTitleTemplate?: boolean
  summary?: boolean
  ogImageOtherSite?: boolean
}

export const SEO: React.FC<Props> = (props) => {
  const {
    path,
    title = '',
    description = '',
    ogImagePath = '/favicons/android-chrome-192x192.png',
    ogImageOtherSite = false,
    noindex,
    noTitleTemplate,
    summary = true,
  } = props

  const pageUrl = FrontURL + path
  const ogImageUrl = ogImageOtherSite ? ogImagePath : FrontURL + ogImagePath
  const twitterCard = summary ? 'summary' : 'summary_large_image'
  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - ${serviceName}`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: '',
      }}
      twitter={{
        card: twitterCard,
      }}
    />
  )
}
