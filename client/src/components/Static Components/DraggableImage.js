// import React, { useRef, useState, useEffect } from 'react';

// const DraggableImage = (props) => {
//   const imageRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);
//   const [offsetX, setOffsetX] = useState(0);
//   const [offsetY, setOffsetY] = useState(0);

//   const handleMouseDown = (event) => {
//     event.preventDefault();
//     setIsDragging(true);
//     setStartX(event.clientX - offsetX);
//     setStartY(event.clientY - offsetY);
//   };

//   const handleMouseMove = (event) => {
//     if (!isDragging) return;
//     setOffsetX(event.clientX - startX);
//     setOffsetY(event.clientY - startY);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     const handleMouseMoveWindow = (event) => {
//       handleMouseMove(event);
//     };

//     const handleMouseUpWindow = () => {
//       setIsDragging(false);
//     };

//     if (isDragging) {
//       window.addEventListener('mousemove', handleMouseMoveWindow);
//       window.addEventListener('mouseup', handleMouseUpWindow);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMoveWindow);
//       window.removeEventListener('mouseup', handleMouseUpWindow);
//     };
//   }, [isDragging]);

//   return (
//     <div
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       style={{
//         position: 'relative',
//         left: offsetX,
//         top: offsetY,
//         cursor: isDragging ? 'grabbing' : 'grab',
//       }}
//     >
//       <img
//         ref={imageRef}
//         src={props.shoe}
//         alt="Draggable Img"
//         style={{ width: props.width, height: "auto" }}
//       />
//     </div>
//   );
// };

// export default DraggableImage;


import React, { useRef, useState, useEffect, useCallback } from 'react';

const DraggableImage = (props) => {
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartX(event.clientX - offsetX);
    setStartY(event.clientY - offsetY);
  };

  const handleMouseMove = useCallback(
    (event) => {
      if (!isDragging) return;
      setOffsetX(event.clientX - startX);
      setOffsetY(event.clientY - startY);
    },
    [isDragging, startX, startY]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMoveWindow = (event) => {
      handleMouseMove(event);
    };

    const handleMouseUpWindow = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMoveWindow);
      window.addEventListener('mouseup', handleMouseUpWindow);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWindow);
      window.removeEventListener('mouseup', handleMouseUpWindow);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        position: 'relative',
        left: offsetX,
        top: offsetY,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <img
        ref={imageRef}
        src={props.shoe}
        alt="Draggable Img"
        style={{ width: props.width, height: 'auto' }}
      />
    </div>
  );
};

export default DraggableImage;