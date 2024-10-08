// import classNames from "classnames/bind";
import { Col, ListGroup, ListGroupItem } from "reactstrap";

//import Odometer from "react-odometerjs";
// import "odometer/themes/odometer-theme-minimal.css";
import MoreInfoButton from "../../components/MoreInfoButton";

const PricingPlan = (props: { basis: string | number }) => {
  const plan = props;

  return (
    <Col lg="4" className="">
      {/* classNames(`pricing-plan plan-${plan.name} ${plan.class}`, {
        "best-value": plan.best
      }) */}
      {/* classNames("p-5", { "py-md-6": plan.best }) */}
      <div className="">
        <div className="text-center">
          <h4
            className={`bold text-capitalize text-${
              plan ? "primary" : "alternate"
            }`}
          >
            {/* {name} */}
          </h4>
          <p>{/* {desc} */}</p>

          <div className="pricing-details">
            <span className="pricing-value">
              <span className="price">
                {/* <Odometer duration={500} value={plan} /> */}
              </span>
            </span>
          </div>

          <MoreInfoButton
            className={`btn btn-${plan ? "" : "outline-"}alternate mb-3`}
            text="All"
            to="#!"
          />
        </div>

        <hr />

        <div className="d-none d-md-flex">
          <ListGroup flush className="list-group-no-border">
            <ListGroupItem>Lorem ipsum dolor sit amet</ListGroupItem>
            <ListGroupItem>Dicta doloremque</ListGroupItem>
            <ListGroupItem>Consectetur fuga inventore</ListGroupItem>
            <ListGroupItem>Alias animi, assumenda atque</ListGroupItem>
            <ListGroupItem>Accusamus adipisci aspernatur</ListGroupItem>
          </ListGroup>
        </div>

        <div className="d-md-none">
          <button
            type="button"
            className="more-link btn btn-link d-flex align-items-center mx-auto"
            data-toggle="modal"
            data-target="#basic-plan-modal-{{ plan.name }}"
          >
            View plan details
          </button>
          <div className="modal" id="basic-plan-modal-{{ plan.name }}">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title bold text-capitalize">plan</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body plan-features">
                  <ListGroup flush className="text-center">
                    <ListGroupItem className="border-top-0">
                      Lorem ipsum dolor sit amet
                    </ListGroupItem>
                    <ListGroupItem>Dicta doloremque</ListGroupItem>
                    <ListGroupItem>Consectetur fuga inventore</ListGroupItem>
                    <ListGroupItem>Alias animi, assumenda atque</ListGroupItem>
                    <ListGroupItem>Accusamus adipisci aspernatur</ListGroupItem>
                    <ListGroupItem>Delectus earum iste nobis</ListGroupItem>
                    <ListGroupItem>Accusamus alias amet at</ListGroupItem>
                    <ListGroupItem>Accusamus alias aliquid</ListGroupItem>
                    <ListGroupItem>Animi blanditiis eveniet</ListGroupItem>
                    <ListGroupItem>Ab aliquid amet consequatur</ListGroupItem>
                  </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PricingPlan;
