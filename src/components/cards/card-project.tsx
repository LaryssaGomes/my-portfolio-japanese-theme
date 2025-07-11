import React from "react";
import styles from "./card-project.module.scss";
import Image from "next/image";
import { Button } from "@/components/forms/button";
import { Box } from "../BoxProject/Box";
import { Tag } from "../Tag/Tags";
interface Tag {
  color: string;
  name: string;
}

interface CardProjectProps {
  title: string;
  description: string;
  tags: Tag[];
  infoLink: string;
  projectLink: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  tags,
  infoLink,
  projectLink,
  image,
}) => {
  return (
    <Box>
      <div className={styles.box_projeto}>
        <div className={styles.box_projeto_card}>
          <Image
            priority
            src={image.url}
            width={image.width}
            height={image.height}
            alt="projeto aves"
          />
          <div className={styles.box_conteudo}>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="tags">
              {tags.map((tag, index) => (
                <Tag key={tag.name} color={tag.color}>
                  {tag.name}
                </Tag>
              ))}
            </div>
            <div className={styles.buttons}>
              {infoLink && (
                <Button color="#E13A4B" href={infoLink} component="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0,0,256,256"
                  >
                    <g transform="">
                      <g
                        fill="#ffffff"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  {"  "}
                  Ver código
                </Button>
              )}
              <Button color="#154363" href={projectLink} component="a">
                Ver site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
