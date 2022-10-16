const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNums, meanResult, medianResult, modeResult, createRes } = require('./helpers');


app.get('/mean', (req, res, next) => {
    console.log(req.query.nums);
    if (!req.query.nums) throw new ExpressError('You must pass a query key of nums with comma-separated numbers', 400)
    const operation = 'mean'
    console.log('params', req.query.nums)
    const result = meanResult(req.query.nums)
    return res.send(createRes(operation, result));
})

app.get('/median', (req, res, next) => {
    console.log(req.query.nums);
    if (!req.query.nums) throw new ExpressError('You must pass a query key of nums with comma-separated numbers', 400)
    const operation = 'median'
    const result = medianResult(req.query.nums)
    return res.send(createRes(operation, result))
})

app.get('/mode', (req, res, next) => {
    console.log(req.query.nums);
    if (!req.query.nums) throw new ExpressError('You must pass a query key of nums with comma-separated numbers', 400)
    const operation = 'mode'
    const result = modeResult(req.query.nums)
    return res.send(createRes(operation, result))
})



// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });
  

// generic error handler
app.use(function(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message;

  return res.status(status).json({
      error: {message, status}
    });
  });



app.listen(3000, () => {
    console.log("Server running on port 3000");
});