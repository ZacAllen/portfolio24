"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { Modal, Typography, Button, styled, CircularProgress, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import { projects } from "@/utils/helpers/projectsConfig";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";
import Link from "next/link";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledImage = styled(Image)({
  filter: `drop-shadow(2px 5px 2px black)`,
});

const StyledContainer = styled("div")(({ theme, bgColor }) => ({
  background: `${bgColor}`,
}));

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.mainFont,
  fontSize: "3rem",
  color: "white",
  textShadow: "1px 1px 2px black",
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
}));
const Description = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  color: "white",
  fontSize: "16px",
}));
const Stack = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  fontSize: "18px",
  color: "white",
}));
const Type = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  backgroundColor: theme.palette.primary.light,
  padding: "4px 8px",
  borderRadius: "32px",
}));
const ProjectLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.textFont,
  color: "white",
  fontSize: "18px",
  textDecoration: "underline",
}));

const ProjectModal = ({ open, setOpen, projectName }) => {
  const [scope, animate] = useAnimate();
  const [isLoading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const { background } = useContext(DarkModeContext);

  useEffect(() => {
    setProject(projects.find((proj) => proj.name === projectName));
  }, [projectName]);

  useEffect(() => {
    // animate(scope.current, { translateY: "100vh" }, { ease: "linear", duration: 0.2 });
  }, [open]);

  const closeModal = () => {
    setLoading(true);
    // animate(scope.current, { translateY: "0vh" }, { ease: "linear", duration: 0.2 }).then(() => {
    setOpen(false);
    // });
  };

  if (!!project?.name === false) return null;

  return (
    <>
      <StyledModal open={open} onClose={() => closeModal()} disableEnforceFocus disableAutoFocus>
        <motion.div ref={scope}>
          <StyledContainer
            className="max-h-[90vh] min-h-[85vh] md:min-h-0 overflow-y-scroll md:overflow-hidden flex flex-col md:justify-center items-center relative rounded-xl p-4 md:p-8 lg:w-[60rem] md:w-[40rem] sm:w-[20rem] w-[18rem]"
            bgColor={project?.backgroundColor}
          >
            {project?.name !== "Copycat" ? (
              <>
                <div className="w-full text-left pt-8 md:pt-0">
                  <Title>{project?.name}</Title>
                  <hr></hr>
                </div>
                <div className="my-6 md:grid md:grid-cols-4 gap-8 w-full">
                  <div className="flex items-center justify-center md:col-span-2 relative md:max-w-full md:w-full h-[10rem] md:h-[20rem] my-4 md:my-0">
                    {isLoading && <CircularProgress />}
                    <StyledImage
                      src={project?.fullImage}
                      layout="fill"
                      objectFit="cover"
                      alt={`${project?.name}-image`}
                      onLoad={() => setLoading(false)}
                    />
                  </div>
                  <div className="md:col-span-2 w-full my-4 md:my-0">
                    <Stack className="!text-[24px]">Tools & Tech Stack:</Stack>
                    <div className="w-full flex items-center gap-4 flex-wrap">
                      {project?.fullTypeline &&
                        project?.fullTypeline.split(",").map((type) => {
                          return <Type>{type}</Type>;
                        })}
                    </div>
                    <div className="my-4">
                      <Description>{project?.description}</Description>
                    </div>
                    <div className="flex flex-col mt-8 absolute">
                      {project.projectLink && (
                        <ProjectLink href={project.projectLink} target="_blank" prefetch>
                          <span className="flex items-center gap-2">View Project {<OpenInNewIcon />}</span>
                        </ProjectLink>
                      )}
                      {project.githubLink && (
                        <ProjectLink href={project.githubLink} target="_blank" prefetch>
                          <span className="flex items-center gap-2">View on Github {<OpenInNewIcon />}</span>
                        </ProjectLink>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full text-center">
                  <Title>Coming Soon</Title>
                </div>
              </>
            )}
            <CloseButton onClick={() => closeModal()}>
              <CloseIcon sx={{ color: "gray" }} />
            </CloseButton>
          </StyledContainer>
        </motion.div>
      </StyledModal>
    </>
  );
};

export default ProjectModal;
