interface Props {
  contentShown: "MORSE" | "TEXT" | "BOTH";
  textContent: string;
  morseContent: string;
}

const MessageBubble = ({ textContent, morseContent, contentShown }: Props) => {
  const showText = contentShown === "TEXT" || contentShown === "BOTH";
  const showMorse = contentShown === "MORSE" || contentShown === "BOTH";

  return (
    <div className="max-w-xs rounded-2xl bg-blue-500 px-4 py-2 text-white shadow-sm">
      {showText && <p className="text-sm leading-snug">{textContent}</p>}
      {showMorse && (
        <p className="mt-1 font-mono text-xs tracking-widest text-blue-100">
          {morseContent}
        </p>
      )}
    </div>
  );
};

export default MessageBubble;
