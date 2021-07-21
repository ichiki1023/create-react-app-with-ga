import { useRef, useEffect } from 'react'

const useDocumentTitle = (title: string, retainOnUnmount = false): void => {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = `Service Name | ${title}`
  }, [title])

  useEffect(
    () => () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    [retainOnUnmount],
  )
}

export default useDocumentTitle
