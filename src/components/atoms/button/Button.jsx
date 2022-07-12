import { ButtonFullWidth, ButtonDefault, ButtonSubmit } from "./styles";
import Links from "../Link";

export const Button = ({ variants = "default", icon, urlPath, text, type }) => {
  if (variants === "full-width") {
    return (
      <ButtonFullWidth type={type}>
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
  if (type === "submit") {
    return (
      <ButtonSubmit type={"submit"}>
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
      </ButtonSubmit>
    );
  }
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <ButtonDefault type={type}>
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
      </ButtonDefault>
    </div>
  );
};
