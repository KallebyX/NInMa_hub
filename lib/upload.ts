import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import sharp from 'sharp'

export interface UploadOptions {
  maxSize?: number // in bytes
  allowedTypes?: string[]
  resize?: {
    width?: number
    height?: number
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
  }
}

const defaultOptions: UploadOptions = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  resize: {
    width: 1920,
    height: 1080,
    fit: 'inside',
  },
}

/**
 * Valida um arquivo de upload
 */
export function validateFile(
  file: File,
  options: UploadOptions = defaultOptions
): { valid: boolean; error?: string } {
  const opts = { ...defaultOptions, ...options }

  // Validar tamanho
  if (opts.maxSize && file.size > opts.maxSize) {
    return {
      valid: false,
      error: `Arquivo muito grande. Tamanho máximo: ${(opts.maxSize / 1024 / 1024).toFixed(2)}MB`,
    }
  }

  // Validar tipo
  if (opts.allowedTypes && !opts.allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `Tipo de arquivo não permitido. Permitidos: ${opts.allowedTypes.join(', ')}`,
    }
  }

  return { valid: true }
}

/**
 * Gera um nome de arquivo único
 */
export function generateFileName(originalName: string): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  const ext = path.extname(originalName)
  const nameWithoutExt = path.basename(originalName, ext)
  const safeName = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50)

  return `${safeName}-${timestamp}-${random}${ext}`
}

/**
 * Faz upload de um arquivo para o servidor local
 */
export async function uploadToLocal(
  file: File,
  folder: string = 'uploads',
  options: UploadOptions = defaultOptions
): Promise<{ url: string; path: string }> {
  const opts = { ...defaultOptions, ...options }

  // Validar arquivo
  const validation = validateFile(file, opts)
  if (!validation.valid) {
    throw new Error(validation.error)
  }

  // Criar diretório se não existir
  const uploadDir = path.join(process.cwd(), 'public', folder)
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true })
  }

  // Gerar nome único
  const fileName = generateFileName(file.name)
  const filePath = path.join(uploadDir, fileName)

  // Converter File para Buffer
  const bytes = await file.arrayBuffer()
  let buffer = Buffer.from(bytes)

  // Processar imagem se for uma imagem
  if (file.type.startsWith('image/') && opts.resize) {
    try {
      buffer = await sharp(buffer)
        .resize({
          width: opts.resize.width,
          height: opts.resize.height,
          fit: opts.resize.fit || 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 90 })
        .toBuffer()
    } catch (error) {
      console.error('Erro ao processar imagem:', error)
      // Continuar com o arquivo original se falhar
    }
  }

  // Salvar arquivo
  await writeFile(filePath, buffer)

  // Retornar URL pública
  const publicUrl = `/${folder}/${fileName}`

  return {
    url: publicUrl,
    path: filePath,
  }
}

/**
 * Valida URL de imagem
 */
export function isValidImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(parsed.pathname)
  } catch {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url)
  }
}

/**
 * Extrai nome do arquivo de uma URL
 */
export function getFileNameFromUrl(url: string): string {
  return path.basename(url)
}

/**
 * Converte bytes para formato legível
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
