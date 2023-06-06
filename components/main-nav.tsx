import * as React from "react"
import Link from "next/link"
import { Waves } from "lucide-react"

import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Waves className="h-6 w-6 bg-zen-color-primary w-10" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
