const testLoadBalancing = async () => {
  const requests = [];

  for (let i = 0; i < 20; i++) {
    const respo = await fetch("http://localhost:3000");
    const data = respo.text();
    console.log(data);
    requests.push(data);
  }

  const responses = await Promise.all(requests);
  responses.forEach((response, index) => {
    console.log(`Response ${index + 1}: ${response.data}`);
  });
};

testLoadBalancing();
