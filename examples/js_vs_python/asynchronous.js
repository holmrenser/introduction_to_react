// Let's assume we want to make a request to a slow DB
function slowServiceAPI(requestString, callback) {
  const result = doSomethingSlow(requestString);
  callback(result);
}

// This function returns immediately
function sendRequestToSlowService(requestString) {
  // Pass callback as argument using anonymous lambda function
  slowServiceAPI(requestString, (result) => {
    // This is only printed when we reveiv the result
    console.log(result);
  });
}

// Promises can be chained and avoid nesting callbacks
function usePromiseForSlowService(requestString) {
  return new Promise((resolve, reject) => {
    try {
      slowServiceAPI(requestString, (result) => resolve(result));
    } catch {
      reject("error");
    }
  });
}

// Promises expose API that can be chained
usePromiseForSLowService("requestString")
  .then((initialResult) => someOtherPromiseAPI(initialResult))
  .then((result) => console.log(result));

// Alternatively: keyword 'await' makes code synchronous
const result = await usePromiseForSLowService("requestString");
