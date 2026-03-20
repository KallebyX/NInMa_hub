import path from 'path'

export interface UploadOptions {
  maxSize?: number // in bytes
  allowedTypes?: string[]
}

const defaultOptions: UploadOptions = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
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
 * Faz upload de um arquivo para o diretório /tmp (compatível com Vercel serverless)
 * NOTA: Em produção, use um serviço de armazenamento externo (S3, Cloudinary, etc.)
 * O /tmp é temporário e não persiste entre invocações serverless.
 */
export async function uploadToLocal(
  file: File,
  folder: string = 'uploads',
  options: UploadOptions = defaultOptions
): Promise<{ url: string; path: string }> {
  const { writeFile, mkdir } = await import('fs/promises')
  const { existsSync } = await import('fs')

  const opts = { ...defaultOptions, ...options }

  // Validar arquivo
  const validation = validateFile(file, opts)
  if (!validation.valid) {
    throw new Error(validation.error)
  }

  // Usar /tmp em produção (Vercel) ou public/ em desenvolvimento
  const isVercel = process.env.VERCEL === '1'
  const uploadDir = isVercel
    ? path.join('/tmp', folder)
    : path.join(process.cwd(), 'public', folder)

  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true })
  }

  // Gerar nome único
  const fileName = generateFileName(file.name)
  const filePath = path.join(uploadDir, fileName)

  // Converter File para Buffer
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Salvar arquivo
  await writeFile(filePath, buffer)

  // Em Vercel, retornar path relativo (não é servível publicamente - usar storage externo)
  const publicUrl = isVercel
    ? `/api/uploads/${fileName}` // endpoint placeholder
    : `/${folder}/${fileName}`

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
