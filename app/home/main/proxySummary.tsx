"use client";

import { Descriptions, Typography } from "@douyinfe/semi-ui";
import "../styles/style.css";
import { SSEDataFetch } from "@/app/home/utils/sse";

export default function ProxySummary() {
  const { Title } = Typography;
  const data = SSEDataFetch("https://120.24.211.49/GetNetworkDataSSE");
  const networkSummaryData = [
    {
      key: "状态",
      value: data ? (
        <Title heading={2} type="success">
          在线
        </Title>
      ) : (
        <Title heading={2} type="danger">
          离线
        </Title>
      ),
    },
    {
      key: "当前节点",
      value: data?.nodeInfo.nodeName.slice(1, -1),
    },
    {
      key: "上传速率",
      value:
        data?.proxyNetwork.rxSpeedMbps !== undefined
          ? data?.proxyNetwork.rxSpeedMbps + "mb/s"
          : null,
    },
    {
      key: "下载速率",
      value:
        data?.proxyNetwork.txSpeedMbps !== undefined
          ? data?.proxyNetwork.txSpeedMbps + "mb/s"
          : null,
    },
  ];
  return (
    <>
      <Descriptions
        className="myDescription"
        data={networkSummaryData}
        row
        size="large"
      />
    </>
  );
}
