import React, { useRef, useEffect } from "react";

interface EditableLineProps {
  id: string;
  socket: WebSocket;
  initialText?: string;
  className?: string;
}

const EditableLine: React.FC<EditableLineProps> = ({ id, socket, initialText = "", className }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerText = initialText;
    }
  }, [initialText]);

  const handleInput = () => {
    socket.send(JSON.stringify(message));
  };

  return (
    <div
      ref={divRef}
      contentEditable
      suppressContentEditableWarning
      onKeyDown={handleInput}
      className={className}
    />
  );
};

export default EditableLine;