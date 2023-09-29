import { getFontSizeForHeading, getTextAlign } from "utils/fonts"
import React from "react"

export const Heading = ({textAlign, content, level = 2}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `font-heading text-3xl sm:${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,
    })
    return (
        <div className="max-w-5xl mx-5 my-10">
            {tag}
        </div>
    );
}