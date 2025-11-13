'use client'

import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { formatBytes } from '@/lib/upload'

interface ImageUploadProps {
  value?: string | null
  onChange: (url: string | null) => void
  label?: string
  helperText?: string
  error?: string
  className?: string
}

export default function ImageUpload({
  value,
  onChange,
  label,
  helperText,
  error,
  className,
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    setIsUploading(true)
    setUploadError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer upload')
      }

      onChange(data.url)
    } catch (err: any) {
      setUploadError(err.message || 'Erro ao fazer upload')
      console.error('Erro no upload:', err)
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      await handleFile(e.target.files[0])
    }
  }

  const handleRemove = () => {
    onChange(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="label">
          {label}
        </label>
      )}

      {value ? (
        // Preview da imagem
        <div className="relative group">
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
            title="Remover imagem"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        // Upload area
        <div
          className={cn(
            'relative w-full h-64 border-2 border-dashed rounded-lg transition-colors',
            dragActive
              ? 'border-primary bg-primary-50'
              : 'border-gray-300 hover:border-primary',
            error && 'border-red-500',
            isUploading && 'opacity-50 pointer-events-none'
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
            {isUploading ? (
              <>
                <Loader2 className="w-12 h-12 text-primary animate-spin" aria-hidden="true" />
                <p className="text-sm text-gray-600">Fazendo upload...</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">
                    Arraste uma imagem ou clique para selecionar
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG, GIF até 5MB
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="pointer-events-none"
                >
                  <Upload className="w-4 h-4 mr-2" aria-hidden="true" />
                  Selecionar Arquivo
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Helper text ou erro */}
      {(error || uploadError) && (
        <p className="mt-2 text-sm text-red-500" role="alert">
          {error || uploadError}
        </p>
      )}
      {helperText && !error && !uploadError && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
}
