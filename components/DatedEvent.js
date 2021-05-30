import React from "react";

export default function DatedEvent(props) {
  const { datedEvent } = props;
  return (
    <div className="grid grid-cols-3 gap-4 pb-8">
      <h4 className="text-xl text-gray-300 hidden md:block">
        {datedEvent.dates}
      </h4>
      <div className="col-span-3 md:col-span-2">
        <h4 className="text-xl font-semi-bold">
          <span>{datedEvent.title}</span>
          <span className="text-xl text-gray-500"> @{datedEvent.place}</span>
        </h4>
        <h4 className="text-xl text-gray-300 md:hidden">{datedEvent.dates}</h4>
        <span>{datedEvent.description} </span>
        {datedEvent.lists ? (
          <div
            className={
              "sm:grid grid-cols-" + datedEvent.lists.length + " gap-4"
            }
          >
            {datedEvent.lists.map((list, index) => (
              <ul key={index} className="list-disc list-inside">
                {list.map((item, index2) => (
                  <li key={index2}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        ) : (
          ""
        )}
        <span>{datedEvent.finalDescrition}</span>
      </div>
    </div>
  );
}
