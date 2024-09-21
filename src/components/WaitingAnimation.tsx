interface WaitingAnimationProps {
    secondary?: boolean
}

export default function WaitingAnimation ({secondary}: WaitingAnimationProps) {

    return (
        <div className={`waiting-container${secondary ? '-secondary' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}