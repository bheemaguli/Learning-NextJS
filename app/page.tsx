import Link from "next/link"
import {
  Check,
  Code2,
  FileJson,
  FileText,
  HelpCircle,
  Play,
  Video,
} from "lucide-react"

import { Card } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <Card className="w-100 rounded-none border-none shadow-none bg-slate-100 py-6">
      <h2 className="text-5xl font-bold text-center text-slate-800 drop-shadow-sm">
        For Students with{" "}
        <span className="underline decoration-zen-color-67895ed decoration-4 ease-in duration-300">
          Classical Training
        </span>
      </h2>
      <h2 className="text-5xl font-bold text-center mx-auto text-slate-600 drop-shadow-xl mt-6">
        Performing Moonlight Sonata (1st Movement){" "}
        <span className="underline decoration-4 decoration-zen-color-8c6b022 ease-in duration-300">
          is compulsory
        </span>
      </h2>
      <div className="grid grid-cols-2 items-center mt-10">
        <div>
          <Link
            href="https://www.youtube.com/watch?v=sbTVZMJ9Z2I"
            target="_blank"
            role="button"
            className="bg-zen-color-cbaae35 items-center mx-auto w-[400px] flex text-2xl font-bold text-primary-foreground py-2 h-11 px-8 rounded-none hover:bg-zen-color-cbaae35/90 shadow-[3px_3px_0px_rgb(0,0,0)] hover:shadow-[6px_6px_0px_rgb(0,0,0)] ease-in duration-100"
          >
            <Play className="mr-3" />
            Hear the 1st Movement
          </Link>
          <br />
        </div>
        <Card className="mx-2 p-6 bg-zen-color-67895ed/[.15] rounded-none border-2 border-zen-color-67895ed text-zen-color-67895ed text-xl font-bold">
          <ul className="list-none">
            <li className="mt-1">
              <Link href="/" className="flex items-center">
                <HelpCircle className="mr-4" />
                Random point 1
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="flex items-center">
                <FileText className="mr-4" />
                Random point 2
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="flex items-center">
                <FileJson className="mr-4" />
                Random point 3
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="flex items-center">
                <Check className="mr-4" />
                Random point 4
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="flex items-center">
                <Video className="mr-4" />
                Random point 5
              </Link>
            </li>
            <li className="mt-5">
              <Link href="/" className="flex items-center">
                <span className="flex drop-shadow-md">
                  <Code2 className="mr-4" />
                  Random point 6
                </span>
              </Link>
            </li>
          </ul>
        </Card>
      </div>
      <Link
        href="tel:9140402493434:"
        className="bg-slate-500 items-center mx-auto w-[750px] mt-6 flex text-2xl font-bold text-primary-foreground py-2 h-11 px-8 rounded-none hover:bg-slate-600 shadow-[3px_3px_0px_rgb(0,0,0)] hover:shadow-[6px_6px_0px_rgb(0,0,0)] ease-in duration-100"
      >
        Having Questions? Call the professor @ +91 40402 493434
      </Link>
    </Card>
  )
}
