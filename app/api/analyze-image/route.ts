import { NextRequest, NextResponse } from 'next/server'
import { OpenRouter } from '@openrouter/sdk'

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, prompt } = await request.json()

    if (!imageUrl || !prompt) {
      return NextResponse.json(
        { error: 'Image URL and prompt are required' },
        { status: 400 }
      )
    }

    const result = await openrouter.chat.send({
      model: "google/gemini-3-pro-image-preview",
      messages: [
        {
          role: "user",
          content: `${prompt}\n\nImage: ${imageUrl}`
        }
      ],
      modalities: ["image", "text"]
    })

    const message = result.choices[0].message

    // 返回文本分析结果
    const textResult = message.content || ''

    return NextResponse.json({ result: textResult })
  } catch (error) {
    console.error('Error analyzing image:', error)
    return NextResponse.json(
      { error: 'Failed to analyze image' },
      { status: 500 }
    )
  }
}
