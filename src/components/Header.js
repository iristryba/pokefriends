import React, { useEffect, useState} from "react";
import TitleImage from "./TitleImage";
import SearchBox from "./SearchBox";

const Header = ({searchChange}) => {
    const [isShrunk, setShrunk] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            setShrunk( (isShrunk) => {
                if (
                    !isShrunk &&
                    (document.body.scrollTop > 20 || //document.body => <body>
                    document.documentElement.scrollTop > 20) //documentElement = root element of the document
                ) {
                    return true;
                }

                if (
                    isShrunk &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // console.log(document.body);
    // console.log(document.documentElement);
    // console.log("Shrunk: " + isShrunk);

    return (
        <header className= {isShrunk? "shrunk" : ""}>
              <TitleImage isShrunk = {isShrunk} />
              <SearchBox searchChange = {searchChange} isShrunk = {isShrunk} />
        </header>
    )    
}

export default Header;