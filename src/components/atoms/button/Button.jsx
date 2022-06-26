import React from "react";
import { ButtonFullWidth, ButtonDefault } from "./styles";
import Links from "../Link";

export const Button = ({ variants = "default", icon, urlPath, text }) => {
  if (variants === "full-width") {
    return (
      <ButtonFullWidth>
        <Links path={urlPath}>
          {icon ? (
            <span>
              {icon.position === "left" && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
              <p>{text}</p>
              {icon.position === "right" && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
            </span>
          ) : (
            <span>
              <p>{text}</p>
            </span>
          )}
        </Links>
      </ButtonFullWidth>
    );
  }
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <ButtonDefault>
        <Links path={urlPath}>
          {icon ? (
            <span>
              {icon.position === "left" && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
              <p>{text}</p>
              {icon.position === "right" && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
            </span>
          ) : (
            <span>
              <p>button</p>
            </span>
          )}
        </Links>
      </ButtonDefault>
    </div>
  );
};
