import { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function () {
  const [rData, setrData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setrData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const newData = Array.from(rData);
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);

    setrData(newData);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="dropabble">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {rData.map((d, i) => (
                <Draggable key={d.id} draggableId={d.id.toString()} index={i}>
                  {(provided) => (
                    <div
                      className="user"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <h3>{d.name}</h3>
                      <p>{d.email}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
