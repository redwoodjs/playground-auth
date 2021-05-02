import { useEffect, useState } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import hljs from 'highlight.js'
import hljsDefineGraphQL from 'highlightjs-graphql'
hljsDefineGraphQL(hljs)
const md = require('markdown-it')({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  },
})

const CodeSample = ({ provider }) => {
  const [markdownCode, setMarkdownCode] = useState()

  useEffect(() => {
    async function getMarkdown() {
      try {
        const file = await import(`../../lib/code-samples/${provider.slug}.md`)
        setMarkdownCode(md.render(file.default))
      } catch {
        setMarkdownCode(null)
      }
    }
    getMarkdown()
  }, [provider.slug])

  return (
    <>
      {provider.docsUrl && (
        <p className="text-center mt-6">
          <a
            href={provider.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center flex-wrap font-medium"
          >
            How to set up {provider.name} with Redwood{' '}
            <ExternalLinkIcon className="h-3 w-3 ml-1" />
          </a>
        </p>
      )}
      {markdownCode ? (
        <div
          className="markdown mt-6"
          dangerouslySetInnerHTML={{ __html: markdownCode }}
        />
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-medium mt-6 mb-2">Help Wanted</h3>
          <p className="text-sm text-gray-600">
            Want to add the example code for {provider.name}? Learn how to{' '}
            <a
              href="https://github.com/redwoodjs/playground-auth/blob/main/CONTRIBUTING.md"
              className="font-medium"
            >
              contribute demo code for an Authentication Provider
            </a>
          </p>
        </div>
      )}
    </>
  )
}

export default CodeSample
