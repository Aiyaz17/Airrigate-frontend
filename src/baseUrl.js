module.exports = () => {
  console.log(process.env.REACT_ENV);
  if (process.env.REACT_ENV === "development") return "http://localhost:5000";
  if (process.env.REACT_ENV === "production")
    return "https://airrigate.onrender.com";
};
