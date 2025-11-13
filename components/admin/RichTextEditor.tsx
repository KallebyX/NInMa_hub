'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  label?: string
  helperText?: string
  error?: string
  placeholder?: string
}

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-50 rounded-lg animate-pulse" />,
})

export default function RichTextEditor({
  value,
  onChange,
  label,
  helperText,
  error,
  placeholder,
}: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image'],
        [{ color: [] }, { background: [] }],
        ['blockquote', 'code-block'],
        ['clean'],
      ],
    }),
    []
  )

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
    'blockquote',
    'code-block',
  ]

  return (
    <div className="w-full">
      {label && <label className="label">{label}</label>}

      <div
        className={`rounded-lg overflow-hidden border ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder || 'Digite o conteúdo...'}
          className="bg-white"
          style={{ height: '400px', marginBottom: '42px' }}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
}
