import React from "react";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

export interface SocialContainerProps {}

export function SocialContainer(props: SocialContainerProps): JSX.Element {
  return (
    <div className="w-20 flex justify-evenly mx-1">
      <a
        href="https://www.linkedin.com/in/felipe-ospina-webdev/"
        rel="noreferrer"
        target="_blank"
      >
        <RiLinkedinLine className="h-6 w-6 text-primary-contrast" />
      </a>
      <a
        href="https://github.com/felipeospina21"
        rel="noreferrer"
        target="_blank"
      >
        <RiGithubLine className="h-6 w-6 text-primary-contrast" />
      </a>
    </div>
  );
}
