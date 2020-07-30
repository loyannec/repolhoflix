import React from 'react';

function ButtonLink(props) {
    // props => { className: "dsjkhdhdhksh", href: "/" }
    return (
        <a href={props.href} className={props.className}>
            {/* bigodinho = js inside html that's inside our js */}
            {props.children}
        </a>
    );
}

export default ButtonLink;
