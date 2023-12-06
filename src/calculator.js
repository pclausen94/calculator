// Calculator.js
import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const Calculator = () => {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (expression === "0" && value !== ".") {
      setExpression(value.toString());
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleEvaluate = () => {
    try {
      // Replace % with / 100 for percentage calculation
      const expressionWithPercentage = expression.replace(/%/g, "/100");
      setResult(eval(expressionWithPercentage).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setExpression("0");
    setResult("");
  };

  const handleBackspace = () => {
    setExpression((prevExpression) =>
      prevExpression.length === 1 ? "0" : prevExpression.slice(0, -1)
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" paragraph>
          {expression === "" ? "0" : expression}
        </Typography>

        <Typography variant="h2" paragraph>
          {result}
        </Typography>
        <Grid container spacing={2}>
          {/* Top row */}
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={handleBackspace}>
              ⌫
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={handleClear}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("%")}
            >
              %
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("/")}
            >
              /
            </Button>
          </Grid>
          {/* Row 2 */}
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("7")}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("8")}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("9")}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("*")}
            >
              *
            </Button>
          </Grid>
          {/* Row 3 */}
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("4")}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("5")}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("6")}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("-")}
            >
              -
            </Button>
          </Grid>
          {/* Row 4 */}
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("1")}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("2")}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("3")}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("+")}
            >
              +
            </Button>
          </Grid>
          {/* Row 5 */}
          <Grid item xs={6} key={"0"}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick("0")}
              style={{ gridColumn: "span 2" }}
            >
              0
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(".")}
            >
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleEvaluate}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Calculator;
