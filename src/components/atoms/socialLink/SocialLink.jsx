import propTypes from "prop-types";
export const SocialLink = ({ urlPath, socialName }) => {
  {
    switch (socialName) {
      case "instagram":
        return (
          <a href={urlPath}>
            <img src='/images/icons/Instagram.svg' alt={socialName} />
          </a>
        );
      case "youtube":
        return (
          <a href={urlPath}>
            <img src='/images/icons/YouTube.svg' alt={socialName} />
          </a>
        );
      case "twitter":
        return (
          <a href={urlPath}>
            <img src='/images/icons/Twitter.svg' alt={socialName} />
          </a>
        );

      default:
        return "no social name provided";
    }
  }
};

SocialLink.propTypes = {
  urlPath: propTypes.string.isRequired,
  socialName: propTypes.string.isRequired,
};
