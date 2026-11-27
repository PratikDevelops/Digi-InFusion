import React from 'react'

function sanitize(text: string) {
  return text.replace(/</g, '\\u003c')
}

interface JsonLdProps {
  type: string
  data: Record<string, unknown>
}

export const JsonLd = ({ type, data }: JsonLdProps) => {
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c')
  return <script type='application/ld+json'>{json}</script>
}