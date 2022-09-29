import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

type RenderHtmlBlockProps = {
  title: string;
  text: string;
}

function RenderHtmlBlock({ title, text }: RenderHtmlBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  const arrowIcon = isOpen ? faArrowCircleUp : faArrowCircleDown;
  return (
    <div className="mb-2">
      <div onClick={onToggle} className="cursor-pointer hover:underline hover:text-cyan-600">
        <FontAwesomeIcon icon={arrowIcon} className="mr-2" />
        <span>{title}</span>
      </div>
      { isOpen && <div className="text-sm py-2" dangerouslySetInnerHTML={{__html: text}} /> }
    </div>
  )
}

export default RenderHtmlBlock;