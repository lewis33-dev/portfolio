import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {CgArrowTopRight } from "react-icons/cg"
import {FaGithub, FaLinkedin } from "react-icons/fa6"
import { RiNextjsLine, RiNodejsLine, RiReactjsLine } from "react-icons/ri"
import { SiMysql, SiPython } from "react-icons/si"

const page = () => {
  return (
    <div>
      <section className="relative ">
        <div 
        style={{
          backgroundImage:'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D")'
        }}
        className="h-[30vh] bg-slate-900 bg-cover bg-center"></div>
        <div className="flex items-end justify-between px-4 max-w-4xl mx-auto -mt-5">
          <div className="flex flex-col items-start lg:flex-row lg:items-end gap-1">
            <div className="relative w-20 h-20 lg:w-40 lg:h-40 rounded-full border-slate-950 border-2">
              <Image
              src='/my_pic.jpg'
              alt="my_pic"
              fill
              className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-2xl">Lewis Muriungi</p>
              <div className="flex items-center gap-2 w-[280px]">
                <p>I'm a Full stack developer based in Kenya  <img src="/flag.png" alt="kenya_flag" className="w-8 inline-flex"/></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Link href='/'>
                <Button><FaLinkedin/></Button>
              </Link>
              <Link href='/'>
                <Button><FaGithub/></Button>
              </Link>
            </div>
            <div>
              <Button variant='ghost'>Email Me <CgArrowTopRight/></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 my-5 max-w-4xl mx-auto">
        <h2 className="font-bold text-xl ">Tech Stack_</h2>
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

      {/* <section className="px-4 my-5 max-w-4xl mx-auto">
        <h2 className="font-bold text-xl ">Work Experience_</h2>
        <div className="flex items-center flex-wrap gap-1.5">
          <section className=" flex items-center gap-1.5 px-2 aspect-video h-[160px] rounded-xl  shadow-xl">
            <div 
            style={{
              backgroundImage:'url("https://plus.unsplash.com/premium_photo-1670876808488-db44fb4a12d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D")'
            }}
            className="bg-slate-900 w-20 h-20 rounded-xl">

            </div>
            <div className="grid gap-1">
              <h4 className="font-semibold tex-lg">Freelance Developer</h4>
              <h4 className=" text-xs font-semibold">May 2024 - Present</h4>
            </div>
          </section>
        </div>
      </section> */}

      <section className="px-4 my-5 max-w-4xl mx-auto">
        <h2 className="font-bold text-xl ">Projects_</h2>
        <div className="flex items-center gap-1.5 pt-4">
          <section className="w-[280px] h-[300px] rounded-xl shadow-xl">
            <div 
            style={{
              backgroundImage:'url("https://plus.unsplash.com/premium_photo-1670876808488-db44fb4a12d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D")'
            }}
            className="bg-slate-900 w-full h-[150px] rounded-xl">

            </div>
            <div className="p-2 grid gap-1">
              <h4 className="font-semibold tex-lg">Title</h4>
              <p className="text-sm line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est nisi repellat consectetur, facilis eligendi voluptates deleniti in, dolorum hic doloremque officiis ratione illum praesentium voluptate aliquam, unde delectus nihil.</p>
              <div className="flex items-center gap-1">
                <RiNextjsLine className="w-6 h-6"/>
                <RiNextjsLine className="w-6 h-6"/>
                <RiNextjsLine className="w-6 h-6"/>
                <RiNextjsLine className="w-6 h-6"/>
                ...
              </div>
              <div className="flex gap-1.5">
                <Link href='/projects/1'>
                  <Button>Case Study <CgArrowTopRight/></Button>
                </Link>
                <Button variant='link'>Source Code <CgArrowTopRight/></Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default page