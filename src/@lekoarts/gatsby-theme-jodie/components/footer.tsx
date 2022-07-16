/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui";
import { readableColor } from "polished";
import useSiteMetadata from "../../hooks/use-site-metadata";

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata();
  const {
    theme: { rawColors },
  } = useThemeUI();

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  );

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [
          `100%`,
          `100%`,
          `100%`,
          get(t, `sidebar.normal`),
          get(t, `sidebar.wide`),
        ],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <div>
          <a href="http://nischmanagement.se/magda-wolde-selassie">
            Nisch Management
          </a>
          &nbsp;- Nordics
        </div>
        <div>
          <a href="https://www.newmadison.fr/women/management/3111-magda-wolde-selassie/">
            New Madison
          </a>{" "}
          &nbsp;- France
        </div>
        <div>
          <a href="https://core-management.eu/women/magda-wolde-selassie/">
            Core Management
          </a>
          &nbsp;- Germany
        </div>
        <div>
          <a href="https://www.theclawmodels.com/profile/675_2_magda_selassie?city=milan&board=women&category=all">
            The Claw
          </a>
          &nbsp;- Italy
        </div>
        <div>
          <a href="https://www.wilhelmina.com/london/women/development/3823-magda-wolde-selassie/">
            Wilhelmina
          </a>
          &nbsp;- UK
        </div>
      </div>
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      {/* <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
