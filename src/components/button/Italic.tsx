import Tooltip from "../tooltip/Tooltip";

function Italic({ updateEditor }: { updateEditor: Function }) {
    // function to make text italic
    function textToItalic(text: string) {
      text = `*${text}*`;
      return text;
    }
  
    return (
      <button
        aria-label="Italic"
        onClick={() => updateEditor("Italic", textToItalic)}
        className="group relative flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
      >
        <span className="text-base text-center text-primary-text-500 italic font-semibold leading-4">
          I
        </span>
        <Tooltip text="Make text to Italic" />
      </button>
    );
  }
  
  export default Italic;
  