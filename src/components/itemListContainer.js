import { CartWidget } from "./CartWidget";

export default function ItemListContainer(props) {
    return (
      <>
      
        <a href="/" className="site-title">{props.title}</a>
        <ul>
          <li className="active">
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>

        </ul>
      </>
     
    );
  }