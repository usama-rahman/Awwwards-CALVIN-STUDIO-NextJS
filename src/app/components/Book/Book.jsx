import "./book.css";
import B from "../img/9.jpg";
import Image from "next/image";

const Book = () => {
  return (
    <div className="b">
      <div className="row">
        <div className="column">
          <h2 className="b-c">Single category</h2>
          <p className="b-c1">£195 + VAT</p>
          <a href="#" className="myButton-b">
            book now
          </a>
        </div>
        <div className="column">
          <h2 className="b-d">two category</h2>
          <p className="b-c2">£261 + VAT</p>
          <a href="#" className="myButton-bd">
            book now
          </a>
        </div>
        <div className="column">
          <h2 className="b-e">three category</h2>
          <p className="b-c3">£349 + VAT</p>
          <a href="#" className="myButton-be">
            book now
          </a>
        </div>
      </div>
      <div className="b-footer">
        <h1 className="b-fin">calvin studio</h1>
        <h1 className="b-fin-2">calvin studio</h1>
        <Image src={B} alt="" className="b-img" />
      </div>
      <div className="b-footer2">
        <div className="b-left">
          <div className="b-location">
            <p className="b-address">
              calvin - ny usa <br />
              576th ave, 14th floor new <br />
              york iny 10017 <br />
              email - info@registeredcars.lk
              <br />
              <br />
              calvin - cardiff (uk) <br />
              pitman street, pontcanna, <br />
              cardiff, cf119dj <br />
              email - info@registeredcars.lk
              <br />
              <br />
              calvin - london (uk) <br />
              clapham, london <br />
              email - info@registeredcars.lk
            </p>
          </div>
        </div>
        <div className="b-right">
          <div className="b-location-two">
            <p className="b-address-two">
              calvin - jakarta (indonesia) <br />
              jalan pelepah indah riaya <br />
              jakarta, indonesia 1420 <br />
              email - info@registeredcars.lk
              <br />
              <br />
              calvin - registered office <br />
              (uk) the coach house, 1 the <br />
              convent, rising lane, <br />
              lapworth, warwickshire, b93 <br />
              odj
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
