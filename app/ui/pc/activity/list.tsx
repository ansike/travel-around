"use client";
import { Activity } from "@prisma/client";
import { Button, Table, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type ActivityListProps = {
  data: Activity[];
};
export default function ActivityList({ data }: ActivityListProps) {
  const router = useRouter();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "地址",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "人数限制",
      dataIndex: "personLimit",
      key: "personLimit",
    },
    {
      title: "报名开始时间",
      dataIndex: "enrollStartTime",
      key: "enrollStartTime",
      render(val: Date) {
        return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "报名截至时间",
      dataIndex: "enrollEndTime",
      key: "enrollEndTime",
      render(val: Date) {
        return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "活动开始时间",
      dataIndex: "activityStartTime",
      key: "activityStartTime",
      render(val: Date) {
        return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "活动结束时间",
      dataIndex: "activityEndTime",
      key: "activityEndTime",
      render(val: Date) {
        return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "操作",
      render(_: any, record: Activity) {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                router.push(`/pc/activity/${record.id}/edit`);
              }}
            >
              编辑
            </Button>
            <Button
              danger
              type="link"
              onClick={() => {
                message.info("暂不支持删除");
              }}
            >
              删除
            </Button>
          </>
        );
      },
    },
  ];
  return <Table dataSource={data} columns={columns} />;
}
