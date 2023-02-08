import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/polycaps-whale-sea-dreams-mat_wwqzfj?_a=ATAEtAA0"
            alt=""
          />
          <Link to="/products/1" className="link">
            <button>Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/customizing-mechanical-keyboards_myudde?_a=ATAEtAA0"
            alt=""
          />
          <Link to="/products/1" className="link">
            <button>Sale</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/hippo-themed-build_zegklw?_a=ATAEtAA0"
            alt=""
          />
          <Link to="/products/1" className="link">
            <button>Sale</button>
          </Link>
        </div>
      </div>
      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/keycap-build-polycaps-code_dqjmph?_a=ATAEtAA0"
                alt=""
              />
              <Link to="/products/1" className="link">
                <button>Sale</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/polycaps-corn-keycap-set_niyrss?_a=ATAEtAA0"
                alt=""
              />
              <Link to="/products/1" className="link">
                <button>Sale</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/7-22-22-why-mech-keys-are-so-expensive/hippo-switch-close-up_tv94gt?_a=ATAEtAA0"
            alt=""
          />
          <Link to="/products/1" className="link">
            <button>Sale</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
