import { useState } from 'react'
import { login } from "./utils";
import "./styles.css";

// ================ FORMULAIRE DE CONNEXION ====================
//
// Directives :
// * Vous avez un formulaire de connexion incomplet.
// * Vous n'êtes pas autorisé à ajouter d'éléments HTML supplémentaires.
// * Vous n'êtes pas autorisé à utiliser des refs.
//
// Tâches :
//  * Le bouton de connexion doit déclencher l'action login() importée ci-dessus et lui transmettre les données requises.
//  * Désactivez le bouton de connexion si l'email est vide OU si le mot de passe contient moins de 6 lettres.
//  * Désactivez le bouton de connexion pendant que l'action de connexion est en cours.
//  * Affichez un message d'erreur provenant de login() si la connexion échoue. L'erreur doit être effacée à chaque nouvelle tentative de connexion de l'utilisateur.
//  * Affichez une boîte d'alerte (alerte JavaScript native) si la connexion réussit. Enquêtez sur la fonction login pour savoir comment se connecter avec succès.

export default function LoginForm() {

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"} />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input id={"password"} type={"password"} />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage"></div>

      <div className="button">
        <button>Login</button>
      </div>
    </div>
  );
}
