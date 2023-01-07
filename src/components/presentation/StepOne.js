import List from "utils/List";

const data = ["Text 1", "Text 2", "Text 3"];

const StepOne = () => {
  return (
    <>
      <div>placeholder for content</div>
      <div>List example</div>
      <List data={data} />
    </>
  );
};

export default StepOne;
