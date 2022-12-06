import MyContext from "../context";

const Parent = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => (
          <div>
            <p>이름은 {value.state.name}</p>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default Parent;
