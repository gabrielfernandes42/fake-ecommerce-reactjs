import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            possimus magni sed blanditiis non accusantium? Officia quibusdam
            animi libero impedit. Dicta aspernatur veniam totam aut dolores
            ducimus quia mollitia reiciendis.
          </span>
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            possimus magni sed blanditiis non accusantium? Officia quibusdam
            animi libero impedit. Dicta aspernatur veniam totam aut dolores
            ducimus quia mollitia reiciendis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Fake Store</div>
          <div className="cpyright">Copyright 2023</div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="Peyment" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
