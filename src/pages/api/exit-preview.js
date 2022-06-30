import { exitPreview } from '@prismicio/next'

export default async function handler(req, res) {
  exitPreview({ req, res })
}