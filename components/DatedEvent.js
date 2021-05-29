import React from "react";

export default function DatedEvent(props) {
  const { experience } = props;
  return (
    <div className="grid grid-cols-3 gap-4 pb-6">
      <h4 className="text-xl text-gray-300 hidden md:block">
        {experience.dates}
      </h4>
      <div className="col-span-3 md:col-span-2">
        <h4 className="text-xl font-semi-bold">
          <span>{experience.title}</span>
          <span className="text-xl text-gray-500"> @{experience.place}</span>
        </h4>
        <h4 className="text-xl text-gray-300 md:hidden">{experience.dates}</h4>
        <span>{experience.description} </span>
        {experience.lists ? (
          <div
            className={
              "sm:grid grid-cols-" + experience.lists.length + " gap-4"
            }
          >
            {experience.lists.map((list, index) => (
              <ul className="list-disc list-inside">
                {list.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        ) : (
          ""
        )}
        <span>{experience.finalDescrition}</span>
      </div>
    </div>
  );
}
