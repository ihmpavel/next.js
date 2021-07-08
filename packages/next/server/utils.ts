import { BLOCKED_PAGES } from '../shared/lib/constants'

export function isBlockedPage(pathname: string): boolean {
  return BLOCKED_PAGES.includes(pathname)
}

export function cleanAmpPath(pathname: string): string {
  if (pathname.match(/\?amp=(y|yes|true|1)/)) {
    pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?')
  }
  if (pathname.match(/&amp=(y|yes|true|1)/)) {
    pathname = pathname.replace(/&amp=(y|yes|true|1)/, '')
  }
  pathname = pathname.replace(/\?$/, '')
  return pathname
}

export function isValidHostname(value: string) {
  if (typeof value !== 'string') {
    return false
  }

  if (value.endsWith('.')) {
    value = value.slice(0, -1)
  }

  const validHostnameCharacters = /^[a-zA-Z0-9-.]{1,253}$/g
  if (!validHostnameCharacters.test(value)) {
    return false
  }

  const labels = value.split('.')
  const isValid = labels.every(function (label) {
    const validLabelCharacters = /^(?!-)([a-zA-Z0-9-]{1,63})(?<!-)$/g
    return validLabelCharacters.test(label)
  })

  return isValid
}
