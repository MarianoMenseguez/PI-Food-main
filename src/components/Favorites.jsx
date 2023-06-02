import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeFav } from "../redux/actions/actions";

function Favorites({ myFavorites, onClose, removeFav }) {
    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
    return (
    <div>
      {myFavorites &&
        myFavorites.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              name={element.name}
              status={element.status}
              species={element.species}
              gender={element.gender}
              origin={element.origin.name}
              image={element.image}
              onClose={()=>closeFavorite(element.id)}
            ></Card>
          );
        })}
    </div>
  );
}
function mapState(st) {
  return {
    myFavorites: st.myFavorites,
  };
}
function mapDispatch(d) {
    return {
      removeFav: (id)=>d(removeFav(id))
    };
  }

export default connect(mapState, mapDispatch)(Favorites);
