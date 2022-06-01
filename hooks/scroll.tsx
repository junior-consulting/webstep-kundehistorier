import { useCallback, useEffect, useRef } from 'react';

export enum ScrollDirection {
    Up = "UP",
    Down = "DOWN"
}

interface useScrollParams {
    handleScroll: (direction: ScrollDirection) => void,
    threshold?: number,
    resetTime?: number
}


/**
 * hook for checking if the user attempt to scoll vertically
 *
 * @param handleScroll function to run when user is scrolling, takes one parameter of type ScrollDirection 
 * @param threshold threshold before scroll should be triggered
 * @param resetTime seconds before scroll can be triggered again
 * @returns The direction the user scrolls
 */
const useScroll = ({ handleScroll, threshold = 25, resetTime = 0.5 }: useScrollParams): void => {
    const scrollingTimer = useRef<any>()

    const onScroll = useCallback((e: WheelEvent) => {
        if (Math.abs(e.deltaY) > threshold) {
            //deactivate eventlistener to limit how often handleScroll can be triggered
            window.removeEventListener("wheel", onScroll)

            clearTimeout(scrollingTimer.current) //prevents eventslisteners with an old onScoll function to be triggered

            //reactivate eventlistener after specified amount of time
            scrollingTimer.current = setTimeout(() => window.addEventListener("wheel", onScroll), resetTime * 1000)

            const direction = e.deltaY < 0 ? ScrollDirection.Up : ScrollDirection.Down
            handleScroll(direction)
        }
    }, [handleScroll, resetTime, threshold])



    useEffect(() => {
        window.addEventListener("wheel", onScroll)

        return () => {
            window.removeEventListener("wheel", onScroll)
            clearTimeout(scrollingTimer.current)
        }
    }, [onScroll]);
};

export default useScroll;