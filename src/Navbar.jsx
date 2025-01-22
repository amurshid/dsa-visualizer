import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
      <ul>
        <li><Link to="/" className="title">dsa-visualizer</Link></li>
        <li>
          <a href="#data-structures">data structures</a>
          <ul>
            <li><Link to="/linked-list">linked list</Link></li>
            <li><Link to="/stack">stack</Link></li>
            <li><Link to="/queue">queue</Link></li>
          </ul>
        </li>
        <li>
          <a href="#hashing">hashing</a>
          <ul>
            <li><a href="#hash-table">hash table</a></li>
            <li><a href="#hash-map">hash map</a></li>
            <li><a href="#hash-set">hash set</a></li>
          </ul>
        </li>
        <li>
          <a href="#trees">trees</a>
          <ul>
            <li><a href="#heap">heap</a></li>
            <li><a href="#binary-search-tree">binary search tree</a></li>
            <li><a href="#avl-tree">avl tree</a></li>
            <li><a href="#b-tree">b tree</a></li>
          </ul>
        </li>
        <li>
          <a href="#graphs">graphs</a>
          <ul>
            <li><a href="#directed">directed</a></li>
            <li><a href="#undirected">undirected</a></li>
            <li><a href="#weighted">weighted</a></li>
            <li><a href="#unweighted">unweighted</a></li>                
          </ul>
        </li>
        <li>
          <a href="#sorting">sorting</a>
          <ul>
            <li><a href="#bubble-sort">bubble sort</a></li>
            <li><a href="#selection-sort">selection sort</a></li>
            <li><a href="#insertion-sort">insertion sort</a></li>
            <li><a href="#merge-sort">merge sort</a></li>
            <li><a href="#quick-sort">quick sort</a></li>
            <li><a href="#heap-sort">heap sort</a></li>
          </ul>
        </li>
        <li>
          <a href="#searching">searching</a>
          <ul>
            <li><a href="#depth-first-search">depth first search</a></li>
            <li><a href="#breadth-first-search">breadth first search</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    );
  }
  
  export default Navbar;
  