import { ImageResponse } from 'next/og'
import React from 'react'

export const GET = () => {
  const tagline = 'Digital Agency for Web, Marketing & Video'
  return new ImageResponse(
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fffefa',
        fontFamily: 'sans-serif',
      },
      children: React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        },
        children: [
          React.createElement('span', {
            style: {
              fontSize: 64,
              fontWeight: 700,
              color: '#183b32',
              marginBottom: 8,
            },
            children: 'Digi InFusion',
          }),
          React.createElement('span', {
            style: { fontSize: 24, color: '#66736e' },
            children: tagline,
          }),
        ],
      }),
    }),
    {
      width: 1200,
      height: 630,
    }
  )
}