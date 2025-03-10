import { motion } from "motion/react";

const RotatingCard = ({ cardBackText, setCardBackTitle, setCardBackSubtitle, frontCardComponent, backCardComponent }) => {
  return (
    <motion.div
      animate={{
        rotateY: [0, 180, 180, 0],
        // rotateY: [0, 180],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 5, // Initial delay before first animation
        times: [0, 0.25, 1.75, 2], // Controls timing of each keyframe
        repeatDelay: 10,
      }}
      onUpdate={(latest) => {
        // Check if a full rotation has been completed
        if (latest.rotateY === 0) {
          const index = Math.floor(Math.random() * cardBackText.length);
          setCardBackTitle(cardBackText[index].title);
          setCardBackSubtitle(cardBackText[index].subtitle);
        }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        position: "relative",
        transformOrigin: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Front side */}
      <div
        style={{
          backfaceVisibility: "hidden",
          position: "absolute",
          width: "100%",
          transform: "translateZ(1px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {frontCardComponent}
      </div>
      {/* Back side */}
      {backCardComponent}
    </motion.div>
  );
};

export default RotatingCard;
