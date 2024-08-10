import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonBaseProps {
  component?: "a" | "button";
}

interface AnchorButtonProps
  extends ButtonBaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  color: string;
}

interface RegularButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

type ButtonProps = AnchorButtonProps | RegularButtonProps;

export const Button = ({
  children,
  color,
  component = "button",
  ...props
}: ButtonProps) => {
  const commonStyles = { backgroundColor: color };

  if (component === "a" && "href" in props) {
    return (
      <Link className={styles.btn_link} style={commonStyles} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <>
        <button
          className={styles.blob_btn}
          style={commonStyles}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}

          <span className={styles.blob_btn__inner}>
            <span className={styles.blob_btn__blobs}>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
            </span>
          </span>
        </button>
        <GooFilter />
      </>
    );
  }
};

const GooFilter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style={{ display: "none" }}
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur
          in="SourceGraphic"
          result="blur"
          stdDeviation="10"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
          result="goo"
        ></feColorMatrix>
        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
      </filter>
    </defs>
  </svg>
);
