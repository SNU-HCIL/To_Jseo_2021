import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { message2, messages } from "./message";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Box, Card, CardBody, CardHeader, Grid, Heading } from "grommet";

function App() {
  return (
    <div className="App">
      <Box style={{ backgroundColor: "rgb(189, 223, 147)" }}>
        <Heading level="2" textAlign="start" margin={{ left: "small" }}>
          🐣 재학생들의 메시지
        </Heading>
      </Box>
      <Box pad="medium" style={{ backgroundColor: "rgb(189, 223, 147)" }}>
        <Box
          pad="medium"
          style={{
            border: "1px solid white",
            borderWidth: "10px",
            borderStyle: "dotted",
          }}
        >
          <Grid
            columns={new Array(6).fill(0).map((_) => "1fr")}
            gap="medium"
            className="cont"
          >
            {Object.entries(messages).map(([id, message], i) => (
              <Popup
                trigger={
                  <img
                    src={`./asset/${id}.jpg`}
                    style={{
                      minWidth: 0,
                      width: "100%",
                      borderRadius: "50%",
                    }}
                  />
                }
                on={"hover"}
                // position={i < 6 ? "bottom center" : "top center"}
                contentStyle={{ width: "50%" }}
                keepTooltipInside=".cont"
              >
                <Box pad="small">
                  <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
                </Box>
              </Popup>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box style={{ background: "rgb(174, 119, 78)" }}>
        <Heading level="2" textAlign="start" margin={{ left: "small" }}>
          🎓 졸업생들의 메시지
        </Heading>
        <Grid
          fill={true}
          columns={new Array(3).fill(0).map((_) => "1fr")}
          pad="small"
          gap="small"
        >
          {Object.entries(message2).sort((m1, m2) => m1[1].length - m2[1].length).map(([name, message]) => (
            <Card fill={true} style={{ backgroundColor: "rgb(255, 255, 153)" }}>
              <CardHeader pad="medium" style={{ fontWeight: "bold" }}>
                {name}
              </CardHeader>
              <CardBody pad="medium">
                <p style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{message}</p>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
