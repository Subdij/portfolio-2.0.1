"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Groupe saint josef la salle, Troyes</li>
                <li>IUT Gustave Eiffel, BUT MMI, MEAUX</li>
            </ul>
        )
    },
    {
        title:"Certification",
        id:"certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>Certifié Google atelier numérique 2023</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500}></Image>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nostrum dolore enim neque consectetur, harum totam obcaecati sapiente quae et necessitatibus quis doloremque illum consequatur impedit natus fugit veritatis porro.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                    >
                        {" "}
                    Skills{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                    >
                        {" "}
                    education{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("certification")}
                    active={tab === "certification"}
                    >
                        {" "}
                    certification{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection