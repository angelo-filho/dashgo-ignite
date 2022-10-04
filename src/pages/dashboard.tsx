import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DashboardProps {}

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-10-03T00:00:00.0002",
      "2022-10-04T00:00:00.0002",
      "2022-10-05T00:00:00.0002",
      "2022-10-06T00:00:00.0002",
      "2022-10-07T00:00:00.0002",
      "2022-10-08T00:00:00.0002",
      "2022-10-09T00:00:00.0002",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard({}: DashboardProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart
              options={options as ApexOptions}
              series={series}
              type="area"
              height={160}
            />
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart
              options={options as ApexOptions}
              series={series}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
