import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useMediaQuery } from "react-responsive"
import DesktopLayout from "../components/desktop/DesktopLayout"
import MobileLayout from "../components/mobile/MobileLayout"

const IndexPage: React.FC<PageProps> = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1225px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <main >
      {isDesktopOrLaptop && <DesktopLayout/>}
      {isTabletOrMobile && <MobileLayout/>}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About | Zohaib Ahmed</title>
