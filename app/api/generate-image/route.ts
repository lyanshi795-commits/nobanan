import { NextRequest, NextResponse } from 'next/server'
import { OpenRouter } from '@openrouter/sdk'

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageUrl: referenceImageUrl } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    console.log('Processing with AI Model (Image Generation)')
    console.log('Prompt:', prompt)
    console.log('Has reference image:', !!referenceImageUrl)

    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    try {
      console.log('Calling AI Model API via native fetch...')

      const messages = [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            }
          ]
        }
      ] as any[]

      if (referenceImageUrl) {
        messages[0].content.push({
          type: "image_url",
          image_url: {
            url: referenceImageUrl
          }
        })
      }

      console.log('Sending request to OpenRouter...')

      const apiResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Image Editor Clone",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image-preview",
          messages: messages,
          modalities: ["image", "text"]
        })
      })

      if (!apiResponse.ok) {
        const errorText = await apiResponse.text()
        console.error('OpenRouter API error response:', errorText)
        throw new Error(`OpenRouter API failed (${apiResponse.status}): ${errorText}`)
      }

      const result = await apiResponse.json()
      const message = result.choices[0].message

      console.log('Full message response content length:', message.content?.length || 0)

      // 处理返回的图片和文本
      const response: any = {
        success: true,
        analysis: message.content || '',
        images: []
      }

      // 如果有生成的图片，添加到响应中
      if (message.images && message.images.length > 0) {
        response.images = message.images.map((image: any, index: number) => ({
          index: index + 1,
          url: image.image_url.url
        }))
        console.log(`Generated ${message.images.length} image(s)`)
      }

      console.log('API response processed successfully')

      return NextResponse.json(response)

    } catch (error: any) {
      console.error('Gemini API error:', error)
      return NextResponse.json(
        { error: `Gemini API failed: ${error.message}` },
        { status: 500 }
      )
    }

  } catch (error: any) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    )
  }
}
