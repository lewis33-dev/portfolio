import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CgArrowTopRight } from "react-icons/cg"
import { RiNextjsLine, RiNodejsLine, RiReactjsLine } from "react-icons/ri"
import { SiMysql, SiPython } from "react-icons/si"

const page = () => {
  return (
    <div>
        <section className="relative ">
        <div 
        style={{
          backgroundImage:'url("https://plus.unsplash.com/premium_photo-1670876808488-db44fb4a12d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D")'
        }}
        className="h-[40vh] bg-slate-900 bg-cover bg-center">
            <div className="flex items-end justify-end absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-orange-600 text-slate-50 to-transparent p-2">
                <div className="flex items-center gap-1.5">
                    <Button>Live Site <CgArrowTopRight/></Button>
                    <Button variant='link'>Source Code <CgArrowTopRight/></Button>
                </div>
            </div>
        </div>
        
      </section>


      <section className="px-4 my-5 max-w-4xl mx-auto">
        <Link href='/'>
            <ArrowLeft/>
        </Link>
        <h2 className="font-bold text-xl pt-2 ">Tech Stack_</h2>
        <div className="flex items-center flex-wrap gap-1.5">
          <Button variant='ghost'>
            <RiNextjsLine/>
            NextJs
          </Button>
          <Button variant='ghost'>
            <RiNodejsLine/>
            NodeJs
          </Button>
          <Button variant='ghost'>
            <RiReactjsLine/>
            ReactJs
          </Button>
          <Button variant='ghost'>
            <SiPython/>
            Python
          </Button>
          <Button variant='ghost'>
            <SiMysql/>
            MySql
          </Button>
        </div>
      </section>

      <section className="px-4 my-5 max-w-4xl mx-auto">
        <h2 className="font-bold text-xl ">Details_</h2>
        <section>
        <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est nisi repellat consectetur, facilis eligendi voluptates deleniti in, dolorum hic doloremque officiis ratione illum praesentium voluptate aliquam, unde delectus nihil.</p>
        </section>
        
      </section>
    </div>
  )
}

export default page