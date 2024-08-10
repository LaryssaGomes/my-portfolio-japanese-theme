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
  image: string;
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
            src={image}
            width={100}
            height={100}
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
              <Button color="#E13A4B" href={infoLink} component="a">
                + Informação
              </Button>
              <Button color="#154363" href={projectLink} component="a">
                Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
