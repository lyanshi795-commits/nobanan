"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, Download, X } from "lucide-react"

export function ImageEditor() {
  const [image, setImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setIsProcessing(true)
    setAnalysisResult(null)
    setGeneratedImage(null)

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: image,
          prompt: prompt,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to process image')
      }

      const data = await response.json()

      // 处理返回的图片和文本
      if (data.images && data.images.length > 0) {
        // 如果有生成的图片，显示第一张
        setGeneratedImage(data.images[0].url)
        if (data.analysis) {
          setAnalysisResult(data.analysis)
        }
      } else if (data.analysis) {
        setAnalysisResult(data.analysis)
        // 如果原来有上传的图片，就把它显示在输出区域
        if (image) {
          setGeneratedImage(image)
        }
      }
    } catch (error) {
      console.error('Error:', error)
      setAnalysisResult(error instanceof Error ? error.message : 'Error processing image. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const clearImage = () => {
    setImage(null)
    setPrompt("")
    setAnalysisResult(null)
    setGeneratedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDownload = () => {
    const imageToDownload = generatedImage || image
    if (!imageToDownload) return

    const link = document.createElement('a')
    link.href = imageToDownload
    link.download = `edited-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="editor" className="mx-auto max-w-5xl">
      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="grid gap-6 p-6 lg:grid-cols-2">
          {/* Upload Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{image ? 'Original Image' : 'Upload Image'}</h3>
              {image && (
                <Button variant="ghost" size="sm" onClick={clearImage}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {!image ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex h-[400px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 transition-colors hover:bg-muted/50"
              >
                <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">Click to upload image</p>
                <p className="mt-1 text-xs text-muted-foreground">PNG, JPG up to 10MB (Optional)</p>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
              </div>
            ) : (
              <div className="relative h-[400px] overflow-hidden rounded-lg border border-border">
                <img src={image || "/placeholder.svg"} alt="Uploaded" className="h-full w-full object-contain" />
              </div>
            )}
          </div>

          {/* Result/Prompt Area */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{generatedImage ? 'Analysis Result' : 'Main Prompt'}</h3>

            {generatedImage ? (
              <div className="relative h-[400px] overflow-hidden rounded-lg border border-green-500/50 bg-green-500/5">
                <img src={generatedImage} alt="Analyzed" className="h-full w-full object-contain" />
              </div>
            ) : (
              <Textarea
                placeholder="Example: What is in this image? Describe it in detail..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[200px] resize-none bg-background"
              />
            )}

            <div className="space-y-3">
              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isProcessing}
                className="w-full h-12 text-base font-medium"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    {generatedImage ? 'Analyze Again' : 'Generate Now'}
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                disabled={!generatedImage && !image}
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download {generatedImage ? 'Image' : 'Image'}
              </Button>
            </div>

            <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">💡 Tip:</span> Describe what image you want to generate, or upload an image and ask to edit it. Powered by third-party AI models. Not affiliated with or sponsored by any AI provider.
              </p>
            </div>

            {analysisResult && (
              <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                <h4 className="font-semibold text-sm">AI Analysis:</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysisResult}</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
