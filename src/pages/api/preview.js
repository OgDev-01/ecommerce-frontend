import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { linkResolver, createClient } from '../../../prismicio'

export default async function handler(req, res) {
  const client = createClient({ req })

  await setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client, linkResolver })
}