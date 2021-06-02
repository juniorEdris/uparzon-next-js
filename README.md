## https://nextjs.org/docs/api-reference/next/image#priority

const myLoader = ({ src, width, quality }) => {
return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
