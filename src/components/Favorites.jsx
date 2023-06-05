import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeFav } from "../redux/actions/actions";
import { filterCards, orderCards } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import { act } from "react-dom/test-utils";

function Favorites({ myFavorites, onClose, removeFav }) {
  const dispatch = useDispatch();
  const handleOrder = function (event) {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  function closeFavorite(id) {
    onClose(id);
    removeFav(id);
  }
  return (
    <div>
      <div>
        <select name="order" onChange={handleOrder}>
          <option value="A">A</option>
          <option value="D">D</option>
        </select>
        <select name="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
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
                onClose={() => closeFavorite(element.id)}
              ></Card>
            );
          })}
      </div>
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
    removeFav: (id) => d(removeFav(id)),
  };
}

export default connect(mapState, mapDispatch)(Favorites);
