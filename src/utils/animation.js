import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            // how the animation behaves when it hits the viewport (enter leave enterBack leaveBack)
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        }
    })
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    // keep current rotation angle and state
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    // animate the view1
    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    // animate the view2
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}