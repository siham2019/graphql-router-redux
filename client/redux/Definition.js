import {createStore} from 'redux';

let store={
    Titre:"Description de l'Égypte. Seconde édition. Antiquités. Volume I (plaques)",
    Auteur:"Commission des sciences et des arts en Égypte",
    Date_de_création: new Date().toISOString(),
    Langue:'Français',
    Lieu:'Moyen-Orient et Afrique du Nord Égypte',
    image:'/img/s.jpg',
    Theme:"Histoire et géographie Histoire du monde antique jusqu'en 499 env. Égypte jusqu'à 640",
    Type_d_element :'Images, photographies',
    Description_materielle :'Volume avec reliure, principalement composé de plaques (parfois en couleur), environ 52 x 71 c',
    Institution:'Bibliotheca Alexandrina'
}

 const reducer = (state = store , action) => {
    switch (action.type) {
        case 'edit':
           {
               let o={...state,Titre:action.titre,Langue:action.langue}
          
            return o }
        default:
            return state
    }
}
export default createStore(reducer,store);
