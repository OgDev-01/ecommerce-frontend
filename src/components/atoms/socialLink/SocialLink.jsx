
export const SocialLink = ({ urlPath, socialName }) => {
  {
    switch (socialName) {
      case "instagram":
        return (
          <a href={urlPath}>
            <img src='/images/icons/Instagram.png' alt={socialName} />
          </a>
        );
      case "youtube":
        return (
          <a href={urlPath}>
            <img src='/images/icons/Youtube.png' alt={socialName} />
          </a>
        );
      case "twitter":
        return (
          <a href={urlPath}>
            <img src='/images/icons/Twitter.png' alt={socialName} />
          </a>
        );

      default:
        return "no social icon provided";
    }
  }
};
