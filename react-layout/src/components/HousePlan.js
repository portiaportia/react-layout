import "../css/HousePlan.css";
import React, { useState } from "react";
import EditHousePlan from "./EditHousePlan";
import DeleteHousePlan from "./DeleteHousePlan";

const HousePlan = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [housePlan, setHousePlan] = useState(props);
  const [showHousePlan, setShowHousePlan] = useState(true);

  const imageSrc = `http://localhost:3001/images/${props.main_image}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editHousePlan = (housePlan) => {
    setHousePlan(housePlan);
  };

  const hideHousePlan = (housePlan) => {
    setShowHousePlan(false);
  };

  return (
    <>
      {showHousePlan ? (
        <div>
          {showDeleteDialog ? (
            <DeleteHousePlan
              closeDialog={closeDeleteDialog}
              name={housePlan.name}
              _id={housePlan._id}
              hideHousePlan={hideHousePlan}
            />
          ) : (
            ""
          )}

          {showEditDialog ? (
            <EditHousePlan
              closeDialog={closeEditDialog}
              editHousePlan={editHousePlan}
              _id={housePlan._id}
              name={housePlan.name}
              size={housePlan.size}
              main_image={housePlan.main_image}
              bedrooms={housePlan.bedrooms}
              bathrooms={housePlan.bathrooms}
              features={housePlan.features}
            />
          ) : (
            ""
          )}

          <section className="house-plan columns">
            <section className="feature-image">
              <img src={imageSrc} alt={housePlan.name} />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Size: {housePlan.size}</p>
              <p>Bedrooms: {housePlan.bedrooms}</p>
              <p>Bathrooms: {housePlan.bathrooms}</p>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HousePlan;
