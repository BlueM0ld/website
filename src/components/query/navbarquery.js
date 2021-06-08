import React from "react";

import { graphql, StaticQuery } from "gatsby";
import { Navbar } from "../objects/navbar";

const NavbarQuery = () =>{
  return(
    <StaticQuery
          query={graphql`
          query SiteQuery {
              site {
                siteMetadata {
                  title
                  menubar {
                    name
                    link
                  }
                }
              }
            }
         `}
      render={data =>
          <Navbar links={data.site.siteMetadata.menubar}/>
        }
      />
  )
  }
  
export default NavbarQuery;