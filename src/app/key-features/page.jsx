import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import about from "../../assets/about.png";

const page = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Grid item sx={{ textAlign: "center", py: 5, px: 50 }}>
          <Typography variant="h4" sx={{ color: "white" }} data-aos="fade-left">
            Key Features
          </Typography>
          <Typography sx={{ color: "white" }}>
            Discover the key features that make Kaanch a standout in the
            blockchain ecosystem. Below, we’ve compiled a list of frequently
            asked questions to help you understand what sets Kaanch apart.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "black",
          px: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item lg={12}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Advanced Security
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              End-to-End Encryption: All transactions are encrypted from start
              to finish, ensuring data privacy and protection.
            </li>
            <li style={{ color: "gray" }}>
              Immutable Ledger: Once data is recorded, it cannot be altered,
              ensuring the integrity of the transaction history.
            </li>
            <li style={{ color: "gray" }}>
              Multi-Signature Authentication: Multiple layers of authentication
              enhance security, preventing unauthorized access.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Complete Transparency
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Public Ledger: Every transaction is visible on a public ledger,
              allowing anyone to verify its authenticity.
            </li>
            <li style={{ color: "gray" }}>
              Traceability: Track the history and movement of assets or
              transactions in real-time.
            </li>
            <li style={{ color: "gray" }}>
              Auditability: Simplifies the auditing process with readily
              accessible and transparent records.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Decentralization
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Distributed Network: Transactions are verified by a network of
              nodes, removing the need for a central authority.
            </li>
            <li style={{ color: "gray" }}>
              Peer-to-Peer Transactions: Direct interactions between users
              without intermediaries, reducing costs and delays.
            </li>
            <li style={{ color: "gray" }}>
              Enhanced Reliability: The decentralized nature of the network
              reduces the risk of a single point of failure.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Efficiency and Scalability
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Fast Transactions: Transactions are processed quickly, improving
              efficiency compared to traditional systems.
            </li>
            <li style={{ color: "gray" }}>
              Low Transaction Costs: Reduced need for intermediaries and
              automation of processes lower transaction fees.
            </li>
            <li style={{ color: "gray" }}>
              Scalable Solutions: Kaanch is designed to handle a growing number
              of users and transactions without compromising performance.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Smart Contracts
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Automated Processes: Execute contracts automatically when
              predefined conditions are met, reducing the need for manual
              intervention.
            </li>
            <li style={{ color: "gray" }}>
              Trustless Agreements: Smart contracts enforce agreements without
              requiring trust between parties.
            </li>
            <li style={{ color: "gray" }}>
              Cost Efficiency: Streamline operations and reduce administrative
              costs through automation.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Interoperability
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Cross-Chain Compatibility: Seamlessly interact with other
              blockchain networks, enhancing versatility and utility.
            </li>
            <li style={{ color: "gray" }}>
              API Integration: Easy integration with existing systems and
              applications through robust APIs.
            </li>
            <li style={{ color: "gray" }}>
              Flexible Platform: Adaptable to various industries and use cases,
              from finance to supply chain management.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Community and Governance
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Decentralized Governance: Decisions are made collectively by the
              community, ensuring a democratic and transparent process.
            </li>
            <li style={{ color: "gray" }}>
              Active Community: Engage with a vibrant community of developers,
              users, and innovators.
            </li>
            <li style={{ color: "gray" }}>
              Continuous Improvement: Regular updates and enhancements driven by
              community feedback and technological advancements.
            </li>
          </ul>
        </Grid>

        <Grid item lg={12} sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
            Environmental Sustainability
          </Typography>
          <ul>
            <li style={{ color: "gray" }}>
              Energy-Efficient Protocols: Implementing eco-friendly consensus
              mechanisms to reduce energy consumption.
            </li>
            <li style={{ color: "gray" }}>
              Sustainable Practices: Commitment to sustainable practices and
              reducing the carbon footprint of blockchain operations.
            </li>
          </ul>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default page;
