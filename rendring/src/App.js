import './App.css';
// import ChildOne from './components/optimization/ChildOne';
// import GrandParent from './components/optimization/GrandParent';
// import ParentOne from './components/optimization/ParentOne';
// import ArrayUseState from './components/ArrayUseState';
// import UseState from './components/UseState';
// import UseReducer from './components/UseReducer';
// import ObjectUseState from './components/ObjectUseState';
// import Parent from './components/parent-child/Parent';
import ParentTwo from './components/optimization/ParentTwo';



function App() {
  return (
    // <ObjectUseState />
    // <ArrayUseState />

    // <Parent />

    // ! Same Element Reference
    // <ParentOne />

    // <ParentOne>
    //   <ChildOne />
    // </ParentOne>

    // <GrandParent />

    // ! memo
    <ParentTwo />
  );
}

export default App;
