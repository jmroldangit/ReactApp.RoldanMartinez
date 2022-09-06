import { CartWidget } from "./CartWidget";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

export default function Navbar() {
    return (
      <nav className="nav">
        <ItemListContainer title="greeting" />
      </nav>
     
    );
  }