import ClassLayout from "../template/ClassLayout";
import Exe1 from "./exe_1/Exe1";
import Exe2 from "./exe_2/Exe2";
import Exe4 from "./exe_4/Exe4";

const ReactComponents = () => {
  return (
    <div>
      <ClassLayout name="React Components">
        <Exe1></Exe1>
        <Exe2></Exe2>
        <Exe4 />
      </ClassLayout>
    </div>
  );
};

export default ReactComponents;
