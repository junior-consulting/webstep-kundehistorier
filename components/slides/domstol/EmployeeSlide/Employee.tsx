import React, { useEffect, useState } from 'react'
import styles from './Employee.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import ProgressBar from '../../../common/DottedProgressBar'
import Image from 'next/image'
import { EmployeeData } from './EmployeeData'

// const Employees = [EmployeeBirgitte, EmployeeCalle].map((Employee, index) => <Employee key={index} />)

const RotatingElement: React.FC<any> = ({ className, children, ...options }) => {
    return (
        <motion.div
            initial={{
                rotateX: -90
            }}
            animate={{
                rotateX: 0
            }}
            exit={{
                rotateX: 90
            }}
            transition={{
                duration: 0.5,
                ease: 'linear'
            }}
            className={className}
            {...options}
        >
            {children}
        </motion.div>
    )
}

const Employee = () => {
    const [currentEmployee, setCurrentEmployee] = useState<number>(0);

    //Empty divs are used to create a smoother enter animation, as content will not
    const [img, setImg] = useState<JSX.Element>(
        <div style={{ height: 305, width: 305 }} />
    )
    // const [firstName, setFirstName] = useState<JSX.Element>();
    // const [link, setLink] = useState<string>("");
    const [fullName, setFullName] = useState<JSX.Element>(<div style={{ height: 16 * 3.125, width: 250 }} />);
    const [quote, setQuote] = useState<JSX.Element>(
        <div style={{ height: 200, width: 250 }} />
    );
    const [role, setRole] = useState<JSX.Element>();


    useEffect(() => {
        const delay = 321
        const currentEmployeeData = EmployeeData[currentEmployee]

        const imgTimeout = setTimeout(() => {
            setImg(
                <RotatingElement className={styles.images} key={"img" + currentEmployee}>
                    <Image src={currentEmployeeData.img} alt=""
                        width={305}
                        height={305}
                    />
                </RotatingElement>
            )
        }, delay)
        // const linkTimeout = setTimeout(() => {
        //     setLink(currentEmployeeData.url)
        //     setFirstName(
        //         <RotatingElement key={"employee" + currentEmployee} className={styles.name}>
        //             {currentEmployeeData.firstname}
        //         </RotatingElement>
        //     )
        // }, 2 * delay)
        const quoteTimeout = setTimeout(() => {
            setQuote(
                <RotatingElement className={styles.quote} key={"quote" + currentEmployee}>
                    <p>
                        {currentEmployeeData.quote}
                    </p>
                </RotatingElement>
            )

        }, 2 * delay)

        const fullnameTimeout = setTimeout(() => {
            setFullName(
                <RotatingElement className={styles.name} key={"name" + currentEmployee}>
                    <p>
                        {currentEmployeeData.firstname + " " + currentEmployeeData.lastname}
                    </p>
                </RotatingElement>
            )
        }, 3 * delay)

        const roleTimeout = setTimeout(() => {
            setRole(
                <RotatingElement key={"role" + currentEmployee}>
                    <span>{currentEmployeeData.role}</span>
                </RotatingElement>
            )
        }, 4 * delay)

        return () => {
            clearTimeout(imgTimeout)
            // clearTimeout(linkTimeout)
            clearTimeout(fullnameTimeout)
            clearTimeout(quoteTimeout)
            clearTimeout(roleTimeout)
        }

    }, [currentEmployee]);

    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>MØT VÅRE WEBSTEPPERE</h1>
            <div className={styles.container}>
                <div className={styles.employees}>
                    <AnimatePresence exitBeforeEnter>
                        {img}
                    </AnimatePresence>

                    {/* <div className={styles.moreInfo}>
                        Les mer om{" "}
                        <AnimatePresence exitBeforeEnter>
                            {firstName}
                        </AnimatePresence>
                        <Link href={link}>her</Link>
                    </div> */}
                </div>
                <div className={styles.textSection}>
                    <AnimatePresence exitBeforeEnter>
                        {quote}
                    </AnimatePresence>

                    <AnimatePresence exitBeforeEnter>
                        {fullName}
                    </AnimatePresence>
                    <p className={styles.title}>
                        <AnimatePresence exitBeforeEnter>
                            {role}
                        </AnimatePresence>
                        <motion.span
                            initial={{ rotateX: -90 }}
                            animate={{ rotateX: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: 'linear',
                                delay: 0.321 * 4 //to line up with initial role animation
                            }}
                        >
                            , Webstep
                        </motion.span>
                    </p>
                </div>
            </div>
            <ProgressBar progress={currentEmployee} size={EmployeeData.length} onClick={(value) => setCurrentEmployee(value)} />
        </section>
    )
}

export default Employee
