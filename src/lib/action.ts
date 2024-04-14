import { GetServerSideProps } from "next";
import prisma from "./prisma";
import { makeSerializable } from "./util";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context?.params);
  const data = await prisma.video.findUnique({
    include: {
      chapter: true,
      author: true,
    },
    where: {
      id: Number(context?.params?.id),
    },
  });

  return {
    props: {
      data: makeSerializable(data),
    },
  };
};
