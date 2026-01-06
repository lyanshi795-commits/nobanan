import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageUrl: referenceImageUrl } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    console.log('Processing with Gemini 2.5 Flash Image')
    console.log('Prompt:', prompt)
    console.log('Has image:', !!referenceImageUrl)

    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    // 构建消息内容
    const messageContent: any[] = [
      {
        type: 'text',
        text: prompt
      }
    ]

    // 如果有参考图片，添加到消息中
    if (referenceImageUrl) {
      messageContent.push({
        type: 'image_url',
        image_url: {
          url: referenceImageUrl
        }
      })
    }

    try {
      // 直接使用 fetch 调用 OpenRouter API
      console.log('Calling Gemini 2.5 Flash Image API...')

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3002',
          'X-Title': 'Image Editor'
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash-image',
          messages: [
            {
              role: 'user',
              content: messageContent
            }
          ]
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('OpenRouter API error:', errorText)
        throw new Error(`API request failed: ${response.status} ${errorText}`)
      }

      const data = await response.json()
      const aiResponse = data.choices?.[0]?.message?.content

      if (!aiResponse) {
        throw new Error('No response from Gemini API')
      }

      console.log('Gemini response received:', aiResponse.substring(0, 100) + '...')

      // 返回 Gemini 的文本响应
      return NextResponse.json({
        success: true,
        analysis: aiResponse,
        message: 'Image analyzed successfully'
      })

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
