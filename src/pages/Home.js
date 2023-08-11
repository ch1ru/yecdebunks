import React from "react";
import background from '../imgs/background.jpeg'
import ArticlePreview from "../components/ArticlePreview";
import PageTransition from "../components/PageTransition";
import DefinitionCard from "../components/DefinitionCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import Card from "../components/Card";

export function Home() {

    const [DefinitionRef, inViewDef] = useInView()
    const [AIGRef, inViewAIG] = useInView()
    const controlDef = useAnimation()
    const controlAIG = useAnimation()

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
      };

      const titleVariant = {
        initial: {
          opacity: 0,
          y:24
        },
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.80,
            ease: [0.61, 1, 0.88, 1],
          },
        },
      }

    useEffect(() => {
        if (inViewAIG) {
          controlAIG.start("visible");
        } 

        if (inViewDef) {
            controlDef.start("visible");
        } 

      }, [inViewAIG, inViewDef]);

    return (
        <PageTransition>
            <section>
                <img src={background} className="h-screen w-screen shadow-lg absolute z-0" />
                
                <motion.div animate="enter" initial="initial" variants={titleVariant}>
                    <div className="h-screen flex-col justify-center w-full">
                    <h1 className="pt-96  text-center text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-gray-300">YEC Debunks</h1>
                    <h3 className="text-center text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Debunking religious pseudoscience</h3>
                    </div>
                </motion.div>
            </section>

            <div className="lg:mx-60 md:mx-12 mx-8">
                
                <section className="text-justify">
                    <h2 class='text-center text-3xl pt-6 mt-16'>About</h2>
                    <p className="mt-8 text-center">Religious fundamentalists believe that the Bible, Qur'an or other holy book is a divine revelation and that any scientific evidence that contradicts it must be rejected. They take a literal interpretation of the cosmology, mythology, phrophesy and recorded events in the holy book. When many Christians read the creation stories found in Genesis, they may have no problem in determining the fable-like nature of them (the talking serpent and choice between magical trees). Most Christians also have no issue recognising similar creation motifs in other religious traditions, many of which predate and inspire the ones in the Hebrew Bible or Qur'an. Fundamentalists however must preserve the illusion that every part of their holy book is literally true (with a few caveats) or else their faith is unfounded, and God is made to look weak.
                    This online resource provides some debunks of fundamentalist pseudoscience, which generally center around young earth creationism and a global flood.</p>
                    
                </section>

                <section>
                    <motion.div ref={DefinitionRef} animate={controlDef} initial="hidden" variants={boxVariant}>
                        <DefinitionCard />
                    </motion.div>
                </section>

                <section class="text-center">
                <h2 class='text-center text-3xl pt-6 mt-10'>Creation "science"</h2>
                <p class="mt-8 text-justify">
                    As an attempt to reconcile the Bible with modern scientific discoveries, institutions such as Answers in Genesis, Institute of Creation Research and Creation Ministries International exist to try to disprove mainstream science which contradicts the Bible. They also try to profer alternative hypotheses which attempt to provide evidence for ID (intelligent design) and supernatural events in the Bible. The grassroots equivalent consist of many individual fundamentalists who teach at Bible groups, make online videos or write short books or pamphlets often stemming from the articles and "research" from these larger organizations. Unfortunately, without citing sources and passing 3rd hand knowledge causes problems. Take for example the statement: "The amount of salt in the oceans supports a younger earth". At surface level, one may take this claim seriously. But let's take this one statement and ask some questions:  
                </p>
                <br></br>
                <div class="border-2 border-dashed p-6 border-gray-500">
                <h2 class="font-bold mb-6">"The amount of salt in the oceans supports a younger earth"</h2>
                <p class=" font-bold">1. Citation please?</p>
                <p class=" italic">E. Halley 1715</p>
                <p class=" font-bold">2. Is the method of using ocean salinity as a clock reliable?</p>
                <p class="italic">Absolutely not, it was shown to be a flawed method due to salt deposition as minerals, thereby skewing dates drastically. It also requires one to calculate the rate at which salt is added via river systems which is very hard to provide an accurate value for. It was precluded by more recent techniques showing the earth to be much older (4.5Ga)</p>
                <p class="font-bold">3. Can it be used as evidence for a young earth?</p>
                <p class="italic">It never was to begin with. Reproductions of Halley's technique ranged in the tens of millions... young by modern standards by orders of magnitude older than YECs like to claim.</p>
                </div>
                <p class="m-12">The security in "God's word" can cause fundamentalists to relax scientific rigour when making claims like the one above. Unfortunately, you can't just believe something is true and make empty assertions or flawed arguments to back up that theological belief. </p>
                </section>

                <section>
                    <motion.div ref={AIGRef} animate={controlAIG} initial="hidden" variants={boxVariant}>
                        <Card />
                    </motion.div>
                </section>

                <section>
                    <h2 class='text-center text-3xl pt-6 mt-12 mb-2'>Read Articles</h2>
                    <ArticlePreview />
                </section>

                
            </div>
        </PageTransition>
    )
}