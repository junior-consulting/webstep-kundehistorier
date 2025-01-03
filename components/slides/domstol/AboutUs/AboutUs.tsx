import React, { useContext } from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Text } from '../../../common/Typography'
import { DeviceContext } from '../../../common/Device'
import Link from 'next/link'

const AboutUs = () => {
    const { isMobile } = useContext(DeviceContext)


    return (
        <section className={styles.section} >
            {isMobile && <div className={styles.caseLink}>
                <Link href={'/Arealize'}>Arealize</Link>
                <div className={styles.rectangle}></div>
                <Link href={'/Domstol'}>Domstol</Link>
            </div>}
            <div className={styles.media}>
                <motion.div
                    className={styles.weaponShield}
                    initial={isMobile ? {} : { x: -550 }}
                    whileInView={{ x: 0, z: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={'/assets/domstol/images/weapon-shield.jpg'}
                        layout="fixed"
                        width={250}
                        height={350}
                        alt={'weaponShield'}
                    />
                </motion.div>
                <motion.div
                    className={styles.bookStack}
                    initial={isMobile ? {} : { x: -650 }}
                    whileInView={{ x: 0, z: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <video
                        width="250px"
                        height="350px"
                        autoPlay
                        muted
                        loop
                        title='bookStack'
                    >
                        <source src={require('../../../../public/assets/domstol/videos/Webstap_DA_loop_1_1208x1920.mp4')} />
                    </video>

                </motion.div>
            </div>
            <div className={styles.textSection}>
                <motion.h1
                    className={styles.title}
                    initial={isMobile ? {} : { x: 420, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    DOMSTOL-
                    <br />
                    ADMINISTRASJONEN
                </motion.h1>
                <motion.div
                    className={styles.description}
                    initial={isMobile ? {} : { x: 420, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Text isOverlay>
                        Domstoladministrasjonen, DA, bygger systemene
                        som samler, sikrer og deler informasjonen. De
                        forvalter tilliten, sikrer uavhengigheten, møter
                        kravene og innfrir forventningene. På våre vegne
                        - alle oss i Norge.
                    </Text>
                    <Text isOverlay>
                        Å jobbe for DA betyr oppgaver med
                        mening. Mange oppgaver. For tjenester som betyr
                        noe.
                    </Text>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs
