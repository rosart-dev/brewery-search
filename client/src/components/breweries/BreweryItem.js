import React, { Fragment, useContext } from "react";
import GoogleMap from "../layout/GoogleMap";

const BreweryItem = ({
  brewery: {
    name,
    brewery_type,
    street,
    city,
    state,
    phone,
    website_url,
    tag_list,
    longitude,
    latitude,
    id
  }
}) => {
  const breweryType =
    brewery_type.slice(0, 1).toUpperCase() + brewery_type.slice(1);

  const phoneFormat = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <div>
      <div className="card shadow rounded cardzoom mt-3 mb-3">
        <h1
          className="card-header"
          style={{ fontFamily: "Merriweather", fontWeight: "normal" }}
        >
          {name}
        </h1>
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-8">
            <div className="card-body">
              <h4>{street}</h4>
              <h5 className="card-title">
                {city}, {state}
              </h5>
              <h6 className="card-title">
                <strong>Type: </strong>
                {breweryType}
              </h6>
              <h6 className="card-title">
                <a href={`tel://${phone}`}>{phoneFormat}</a>
              </h6>
              <h6 className="card-title">
                {tag_list.length > 0 && (
                  <Fragment>
                    <strong> Ammenities: </strong>
                    {tag_list}
                  </Fragment>
                )}
              </h6>
              <h6>
                <a href={website_url} target="_black">
                  {website_url}
                </a>
              </h6>
              <h6>
                {/* <a
                href={`https://www.google.com/maps/place/${street},${city},${state}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Maps
              </a> */}
              </h6>
              <h6>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-toggle="modal"
                  data-target={`#googleMapsModal${id}`}
                >
                  View Maps
                </button>
              </h6>
            </div>
          </div>
          <div className="d-none d-sm-block col-md-4">
            <h6 className="m-3">
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <span className="fa fa-star fa-2x checked"></span>
              <div>23 Reviews</div>
            </h6>
            <h6 className="m-2 mt-4">
              "The best place to have a great time. Amazing selection of
              beer..."<a href="#!">Read More</a>
            </h6>
          </div>
        </div>
      </div>
      {/** Modal Starts here */}
      <div
        className="modal fade"
        id={`googleMapsModal${id}`}
        role="dialog"
        aria-labelledby="googleMapsModalTitle"
        aria-hidden="true"
        style={{
          padding: "visible !important"
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="googleMapsLongTitle">
                {name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{ padding: "0", height: "450px" }}
            >
              <GoogleMap
                name={name}
                longitude={longitude}
                latitude={latitude}
              />
            </div>
          </div>
        </div>
      </div>
      {/** Modal ends here */}
    </div>
  );
};

BreweryItem.propTypes = {};

export default BreweryItem;
