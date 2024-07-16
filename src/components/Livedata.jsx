import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const content = [
  {
    id: 1,
    title: "Fast",
    color: "orange",
    desc: "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
    number: "3,127",
    feature: "TRANSACTIONS PER SECOND",
  },
  {
    id: 2,
    title: "Decentralized",
    color: "green",
    desc: "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    number: "1512",
    feature: "VALIDATORS NODES",
  },
  {
    id: 3,
    title: "Scalable",
    color: "purple",
    desc: "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.",
    number: "284,608,450,584",
    feature: "TOTAL TRANSACTIONS",
  },
  {
    id: 4,
    title: "Energy Efficient",
    color: "pink",
    desc: "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    number: "0%",
    feature: "TRANSACTIONS PER SECOND",
  },
];

const Livedata = () => {
  return (
    <Grid container>
      {content.map((e) => (
        <Grid item lg={6} key={e.id}>
          <Card
            sx={{
              minWidth: 250,
              m: 2,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              p: 2,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography color="white" gutterBottom sx={{ fontSize: "20px" }}>
                <span
                  style={{
                    borderLeft: `4px solid ${e.color}`,
                    paddingLeft: "8px",
                  }}
                >
                  {e.title}
                </span>
              </Typography>
              <Typography sx={{ mb: 1.5, mt: 3 }} color="white">
                {e.desc}
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "10px", color: e.color }}
                />{" "}
                {e.number}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography sx={{ color: "gray" }}>{e.feature}</Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Livedata;
