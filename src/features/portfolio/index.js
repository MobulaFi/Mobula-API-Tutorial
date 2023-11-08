import {
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Mobula } from "mobula-api-sdk/dist/cjs/apiWrapper_2";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { isAddress } from "viem";
import { Container } from "../../components/container";
import { SmallFont } from "../../components/fonts";
import { TitleFont } from "../../components/fonts/title";
import { Inputs } from "../../components/inputs";

const EChart = dynamic(() => import("../../components/charts"), {
  ssr: false,
});

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [balanceHistory, setBalanceHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userAddress, setUserAddress] = useState(
    "0x77A89C51f106D6cD547542a3A83FE73cB4459135"
  );
  const mobula = new Mobula();

  const fetchData = () => {
    if (userAddress) {
      mobula
        .fetchWalletHistoryBalance({
          wallet: userAddress,
        })
        .then((res) => {
          if (res.body) {
            const r = JSON.parse(res.body);
            setBalanceHistory(r.data);
          }
          setIsLoading(false);
        });

      mobula.fetchWalletHoldings({ wallet: userAddress }).then((res) => {
        if (res.body) {
          const r = JSON.parse(res.body);
          console.log(r);
          setPortfolio(r.data);
        }
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [userAddress]);

  return (
    <Container>
      <TitleFont mb="20px">Mobula API Tutorial - Portfolio</TitleFont>
      <Flex>
        <Inputs
          placeholder="Enter an address"
          onChange={(e) => {
            if (isAddress(userAddress)) setUserAddress(e.target.value);
          }}
        />
        <Button
          h="45px"
          border="1px solid rgba(255,255,255,0.05)"
          borderRadius="8px"
          fontWeight="500"
          ml="10px"
          _hover={{
            color: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          transition="all 250ms ease-in-out"
          color="rgba(255,255,255,0.6)"
          px="14px"
          bg="#151929"
          onClick={fetchData}
        >
          Search
        </Button>
      </Flex>
      <Flex
        align="center"
        w="100%"
        borderRadius="8px"
        p="20px 20px 20px 20px"
        mt="20px"
        direction="column"
        bg="#151929"
        border="1px solid rgba(255,255,255,0.05)"
      >
        <Flex align="center" justify="space-between" w="100%" mb="-30px">
          <Flex align="center">
            <SmallFont color="rgba(255,255,255,0.6)" mr="10px">
              Balance:{" "}
            </SmallFont>
            <SmallFont>
              {portfolio?.total_wallet_balance?.toFixed(2)} USD
            </SmallFont>
          </Flex>
          <SmallFont>
            {userAddress?.slice(0, 6) +
              "..." +
              userAddress?.slice(userAddress?.length - 6, userAddress?.length)}
          </SmallFont>
        </Flex>
        {!isLoading ? (
          <EChart
            data={
              balanceHistory?.balance_history || [
                [124343, 1434],
                [126434, 1343],
                [127434, 1675],
                [128434, 1233],
                [129434, 1943],
                [130434, 1343],
                [131434, 1675],
                [132434, 1233],
                [133434, 1943],
              ]
            }
            timeframe="ALL"
          />
        ) : (
          "Loading..."
        )}
      </Flex>
      <TitleFont mt="20px">User Assets </TitleFont>
      <Flex
        align="center"
        w="100%"
        borderRadius="8px"
        mt="10px"
        bg="#151929"
        border="1px solid rgba(255,255,255,0.05)"
        direction="column"
      >
        <TableContainer w="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th
                  borderBottom="1px solid rgba(255,255,255,0.05)"
                  color="white"
                >
                  Name
                </Th>
                <Th
                  borderBottom="1px solid rgba(255,255,255,0.05)"
                  color="white"
                >
                  USD Balance
                </Th>
                <Th
                  borderBottom="1px solid rgba(255,255,255,0.05)"
                  color="white"
                >
                  Token Amount
                </Th>
                <Th
                  borderBottom="1px solid rgba(255,255,255,0.05)"
                  color="white"
                >
                  Price Bought
                </Th>
                <Th
                  borderBottom="1px solid rgba(255,255,255,0.05)"
                  color="white"
                  isNumeric
                >
                  Price
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {portfolio?.assets?.map((asset) => (
                <Tr>
                  <Td borderBottom="1px solid rgba(255,255,255,0.05)">
                    <Flex align="center">
                      <Image
                        src={asset?.asset?.logo}
                        boxSize="30px"
                        borderRadius="full"
                        alt={asset?.asset?.name}
                        mr="7.5px"
                        mb="0px"
                      />
                      <Flex direction="column" justify="center" h="100%">
                        <SmallFont mb="0px">{asset?.asset?.symbol}</SmallFont>
                        <SmallFont mb="0px" color="rgba(255,255,255,0.6)">
                          {asset?.asset?.name}
                        </SmallFont>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td borderBottom="1px solid rgba(255,255,255,0.05)">
                    {" "}
                    <SmallFont>
                      ${asset?.estimated_balance?.toFixed(2)}
                    </SmallFont>
                  </Td>
                  <Td borderBottom="1px solid rgba(255,255,255,0.05)">
                    {" "}
                    <SmallFont>
                      {asset?.token_balance?.toFixed(2) +
                        " " +
                        asset?.asset?.symbol}{" "}
                    </SmallFont>
                  </Td>
                  <Td borderBottom="1px solid rgba(255,255,255,0.05)">
                    <SmallFont>${asset?.price_bought?.toFixed(2)}</SmallFont>
                  </Td>
                  <Td borderBottom="1px solid rgba(255,255,255,0.05)" isNumeric>
                    <SmallFont>${asset?.price?.toFixed(2)}</SmallFont>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container>
  );
};
