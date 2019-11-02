import React from 'react';

export default function Title(props) {
    let titleColor;
    if (props.style && props.style.color) {
        titleColor = props.style.color
    } else {
        titleColor = 'black';
    }

    if (props.small) {
        return (
            <h6 style={{color: titleColor}}>{props.children}</h6>
        );
    } else {
        return (
            <h1 style={{color: titleColor}}>{props.children}</h1>
        );
    }
}












// import React from 'react';

// export default function Title(props) {
//     return ( let titleColor ;
//         if (props.style && props.style.color) {
//             titleColor = props.style.color
//         } else {
//             titleColor = 'black';
//         }
    
//         if (props.small) {
//             return (
//                 <h6 style={{color: titleColor}}>{props.children}</h6>
//             );
//         } else {
//             return (
//                 <h1 style={{color: titleColor}}>{props.children}</h1>
//             );
//     )
// }
// }