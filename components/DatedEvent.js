import React from "react";

export default function DatedEvent() {
  return (
    <div className="grid grid-cols-3 gap-4 pb-6">
      <h4 className="text-xl text-gray-300 hidden md:block">2019 - 2020</h4>
      <div className="col-span-3 md:col-span-2">
        <h4 className="text-xl font-semi-bold">
          <span>Designer - Design Thinking</span>
          <span className="text-xl text-gray-500"> @Infotel</span>
        </h4>
        <h4 className="text-xl text-gray-300 md:hidden">2019 - 2020</h4>
        <p>
          <span>
            Développement de sites vitrines sur CMS (Wordpress, Drupal).{" "}
          </span>
          <div className="sm:grid grid-cols-2 gap-4">
            <ul className="list-disc list-inside">
              <li>Recherche Utilisateur</li>
              <li>Architecture de l'information</li>
              <li>Réalisation d'interviews utilisateurs</li>
              <li>Test utilisateurs</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Animation d'ateliers d'idéations</li>
              <li>Wireframes</li>
              <li>Maquettes</li>
              <li>Designer - Design Thinking</li>
            </ul>
          </div>
          <span>Outils : Photoshop, Wordpress, OVH, PHP </span>
        </p>
      </div>
    </div>
  );
}
