import { getTextAlign } from "utils/fonts"
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls"

export const Paragraph = ({textAlign= "left", content, textColor}) => {
    return (
        <div className="flex justify-center my-5 text-base ">
            <p className={`max-w-5xl mx-12 ${getTextAlign(textAlign)} `}
                style={{color: textColor}}
                dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrls(content)}} />
        </div>
    )
}