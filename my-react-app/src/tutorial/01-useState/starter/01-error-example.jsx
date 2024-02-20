const ErrorExample = () => {
  let count = 0;
  const handleClick=()=>{
    count= count + 1;
    console.log(count)
  }
  return (
  <div>
    <h2>{count}</h2>
  <button onClick={handleClick } className="btn"> Click me</button>
  </div>
  );
};

export default ErrorExample;
