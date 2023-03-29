export const generateConfig = () => {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "https://localhost",
  };
};

export const generateAnotherConfig = () => {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "https://localhost",
    time: new Date(),
  };
};
