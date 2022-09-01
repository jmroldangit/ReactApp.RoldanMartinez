import { CartWidget } from "./CartWidget";
import ItemListContainer from "./itemListContainer";

export default function Navbar() {
    return (
      <nav className="nav">
        <ItemListContainer title="greeting" />
      </nav>
     
    );
  }