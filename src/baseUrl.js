module.exports = () => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") return "http://localhost:5000";
  if (process.env.NODE_ENV === "production")
    return "https://airrigate.onrender.com";
};
