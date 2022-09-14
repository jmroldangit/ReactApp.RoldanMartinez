import { CartWidget } from "./CartWidget";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


export default function Navbar() {
    return (
      <nav className="nav">
        <CartWidget />
        <ItemListContainer title="greeting" />
      </nav>
     
    );
  }